/*
 *
 * TokenModule
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { isEmpty } from 'lodash';

import makeSelectGlobal from 'globalSelectors';

// import Card from 'components/Card';

import makeSelectTokenModule from './selectors';

import {
  generateToken,
  fetchKenalan,
  postKenalan,
  deleteKenalan,
} from './actions';

import {
  Token,
  TokenForm,
} from './styled';

const Moment = window.moment;

export class TokenModule extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.state = {
      difference: -1,
      inputToken: '',
      phone_number: '',
      birth_place: '',
      birth_date: '',
      asal_sma: '',
      story: '',
      isCanceling: false,
      warning: {
        phone_number: '',
        birth_place: '',
        birth_date: '',
        asal_sma: '',
        story: '',
      },
    };

    this.startTimer = this.startTimer.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.getKenalan = this.getKenalan.bind(this);
    this.postKenalan = this.postKenalan.bind(this);
    this.cancelKenalan = this.cancelKenalan.bind(this);
    this.cancelCancelKenalan = this.cancelCancelKenalan.bind(this);
  }

  componentDidMount() {
    if (!isEmpty(this.props.Global.user) && this.props.Global.user.role !== 'mahasiswa baru') {
      this.props.generateToken();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (isEmpty(this.props.TokenModule.token) && !isEmpty(nextProps.TokenModule.token) && nextProps.TokenModule.token.end_time) {
      this.startTimer(nextProps.TokenModule.token.end_time);
    } else if (!isEmpty(this.props.TokenModule.token) && !isEmpty(nextProps.TokenModule.token) && this.props.TokenModule.token.end_time && nextProps.TokenModule.token.end_time && this.state.difference === 0) {
      const prev = new Moment(this.props.TokenModule.token.end_time);
      const next = new Moment(nextProps.TokenModule.token.end_time);

      if (next.diff(prev) > 0) {
        this.startTimer(nextProps.TokenModule.token.end_time);
      }
    }

    if (isEmpty(this.props.TokenModule.kenalan) && !isEmpty(nextProps.TokenModule.kenalan) && !isEmpty(nextProps.TokenModule.kenalan.detail_kenalan)) {
      this.setState({
        ...this.state,
        phone_number: nextProps.TokenModule.kenalan.detail_kenalan.phone_number,
        birth_place: nextProps.TokenModule.kenalan.detail_kenalan.birth_place,
        birth_date: nextProps.TokenModule.kenalan.detail_kenalan.birth_date,
        asal_sma: nextProps.TokenModule.kenalan.detail_kenalan.asal_sma,
        story: nextProps.TokenModule.kenalan.detail_kenalan.story,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!isEmpty(prevProps.TokenModule.token) && prevState.difference > 0 && this.state.difference === 0) {
      setTimeout(this.props.generateToken, 3000);
    }
  }

  onInputChange(field, value) {
    const newState = { ...this.state };

    newState[field] = value;

    this.setState({ ...newState });
  }

  getKenalan() {
    if (this.state.inputToken && this.state.inputToken.length === 6) {
      this.props.fetchKenalan(this.state.inputToken);
    }
  }

  postKenalan() {
    const dateTimeRegex = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/;
    const warning = {
      phone_number: '',
      birth_place: '',
      birth_date: '',
      asal_sma: '',
      story: '',
    };
    let isInvalid = false;

    if (!this.state.phone_number || this.state.phone_number.length < 6 || isNaN(this.state.phone_number)) {
      warning.phone_number = 'Phone Number cannot be less than 6 character and must be a number';
      isInvalid = true;
    }

    if (!this.state.birth_place || this.state.birth_place.length <= 0) {
      warning.birth_place = 'Birth Place cannot be empty';
      isInvalid = true;
    }

    if (!this.state.birth_date || this.state.birth_date.length <= 0) {
      warning.birth_date = 'Birth Date cannot be empty';
      isInvalid = true;
    } else if (!this.state.birth_date.match(dateTimeRegex)) {
      warning.birth_date = 'Birth Date Must be in YYYY-MM-DD Format!';
      isInvalid = true;
    }

    if (!this.state.asal_sma || this.state.asal_sma.length <= 0) {
      warning.asal_sma = 'Highschool cannot be empty';
      isInvalid = true;
    }

    if (!this.state.story || this.state.story.length <= 0) {
      warning.story = 'Unique Story cannot be empty';
      isInvalid = true;
    }

    if (!isInvalid) {
      const finalData = {
        ...this.props.TokenModule.kenalan.detail_kenalan,
        phone_number: this.state.phone_number,
        birth_place: this.state.birth_place,
        birth_date: this.state.birth_date,
        asal_sma: this.state.asal_sma,
        story: this.state.story,
      };

      this.props.postKenalan(finalData);
      this.setState({
        ...this.state,
        inputToken: '',
        phone_number: '',
        birth_place: '',
        birth_date: '',
        asal_sma: '',
        story: '',
        isCanceling: false,
        warning: {
          phone_number: '',
          birth_place: '',
          birth_date: '',
          asal_sma: '',
          story: '',
        },
      });
    } else {
      this.setState({
        ...this.state,
        warning,
      });
    }
  }

  cancelKenalan() {
    if (this.state.isCanceling) {
      this.setState({ ...this.state, isCanceling: false });
      this.props.deleteKenalan();
    } else {
      this.setState({ ...this.state, isCanceling: true });
    }
  }

  cancelCancelKenalan() {
    this.setState({ ...this.state, isCanceling: false });
  }

  startTimer(expiredTime) {
    const now = new Moment(this.props.Global.serverTime);
    const expired = new Moment(expiredTime);

    const difference = expired.diff(now, 'seconds');

    if (difference > 0) {
      this.setState({ ...this.state, difference });
    }

    const timer = setInterval(() => {
      const nowInterval = new Moment(this.props.Global.serverTime);
      const expiredInterval = new Moment(expiredTime);

      const differenceInterval = expiredInterval.diff(nowInterval, 'seconds');

      if (differenceInterval > 0) {
        this.setState({ ...this.state, difference: differenceInterval });
      } else {
        clearInterval(timer);
        this.setState({ ...this.state, difference: 0 });
      }
    }, 1000);
  }

  render() {
    const isMaba = !isEmpty(this.props.Global.user) ? this.props.Global.user.role === 'mahasiswa baru' : false;
    const currentlyKenalan = isMaba ? !isEmpty(this.props.TokenModule.kenalan) && !isEmpty(this.props.TokenModule.kenalan.detail_kenalan) : false;
    const successfullyKenalan = isMaba ? !isEmpty(this.props.TokenModule.kenalan) && isEmpty(this.props.TokenModule.kenalan.detail_kenalan) : false;
    const currentToken = !isMaba && !isEmpty(this.props.TokenModule.token) ? this.props.TokenModule.token.token : '-';

    let kenalanFormRender = null;
    let successRender = null;

    if (currentlyKenalan) {
      kenalanFormRender = (
        <div className="kenalanOverlay">
          <div className="container">
            <h1>Get to know your new friend more, fill these informations about your new friend and hit submit when you are done</h1>
            <div className="inputForm">
              <input
                value={this.props.TokenModule.kenalan.detail_kenalan.name}
                type="text"
                placeholder="Name"
                disabled
              />
              <input
                value={this.state.phone_number}
                type="tel"
                placeholder="Phone Number"
                onChange={(evt) => this.onInputChange('phone_number', evt.target.value)}
              />
              {
                this.state.warning.phone_number &&
                <h2>{this.state.warning.phone_number}</h2>
              }
              <input
                value={this.state.birth_place}
                type="text"
                placeholder="Birth Place"
                onChange={(evt) => this.onInputChange('birth_place', evt.target.value)}
              />
              {
                this.state.warning.birth_place &&
                <h2>{this.state.warning.birth_place}</h2>
              }
              <input
                value={this.state.birth_date}
                type="date"
                placeholder="Birth Date"
                onChange={(evt) => this.onInputChange('birth_date', evt.target.value)}
              />
              {
                this.state.warning.birth_date &&
                <h2>{this.state.warning.birth_date}</h2>
              }
              <input
                value={this.state.asal_sma}
                type="text"
                placeholder="Highschool"
                onChange={(evt) => this.onInputChange('asal_sma', evt.target.value)}
              />
              {
                this.state.warning.asal_sma &&
                <h2>{this.state.warning.asal_sma}</h2>
              }
              <textarea
                value={this.state.story}
                placeholder="Unique Story"
                onChange={(evt) => this.onInputChange('story', evt.target.value)}
              />
              {
                this.state.warning.story &&
                <h2>{this.state.warning.story}</h2>
              }
            </div>
            <button className="submit" onClick={this.postKenalan}><span className="icon-send" />Go</button>
            <button className="cancel" onClick={this.cancelKenalan}><span className="icon-close " />Cancel</button>
            <div className={this.state.isCanceling ? 'cancelationModal displayed' : 'cancelationModal'}>
              <h2>Are you sure you want to cancel knowing a new friend?</h2>
              <button className="cancelCancel" onClick={this.cancelCancelKenalan}>No, go back to the form.</button>
              <button className="confirmCancel" onClick={this.cancelKenalan}>Yes, i want to cancel this and go back to home</button>
            </div>
          </div>
        </div>
      );
    }

    if (successfullyKenalan) {
      successRender = (
        <div className="successOverlay">
          <div className="container">
            <h2>You have successfully added</h2>
            <h1>{this.props.TokenModule.kenalan.name}</h1>
            <h2>As your new friend, wait for them or admin to confirm your data and verify your request. See your friends list and its request statuses at the Dashboard.</h2>
            <button className="finish" onClick={this.props.deleteKenalan}>Ok, take me back to home.</button>
          </div>
        </div>
      );
    }

    if (isMaba) {
      return (
        <TokenForm currentlyKenalan={currentlyKenalan}>
          <div className="tokenContent">
            <h1>Write down the token, get to know your new friend now.</h1>
            <div className="form">
              <input value={this.state.inputToken} onChange={(evt) => this.onInputChange('inputToken', evt.target.value)} className="input" type="number" placeholder="Token elemen" />
              <button onClick={this.getKenalan}><span className="icon-send" />Go</button>
            </div>
          </div>
          {kenalanFormRender}
          {successRender}
        </TokenForm>
      );
    }

    let expired = '--:--';

    if (this.state.difference >= 0) {
      expired = `${Math.floor(this.state.difference / 60) > 9 ? Math.floor(this.state.difference / 60) : `0${Math.floor(this.state.difference / 60)}`}:${this.state.difference % 60 > 9 ? this.state.difference % 60 : `0${this.state.difference % 60}`}`;
    }

    return (
      <Token progress={(this.state.difference / 300) * 100}>
        <div className="tokenContent">
          <div className="token">
            <h3>Welcome, give this token to your new friend</h3>
            <div className="textPack">
              <span className="icon-token" />
              <h1>{currentToken}</h1>
            </div>
          </div>
          <div className="progress">
            <div className="bar">
              <div className="current" />
              <div className="max" />
            </div>
            <span className="icon-time" />
            <h1>{expired}</h1>
          </div>
        </div>
      </Token>
    );
  }
}

TokenModule.propTypes = {
  generateToken: PropTypes.func.isRequired,
  fetchKenalan: PropTypes.func.isRequired,
  postKenalan: PropTypes.func.isRequired,
  deleteKenalan: PropTypes.func.isRequired,
  user: PropTypes.object,
  TokenModule: PropTypes.object,
  Global: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  TokenModule: makeSelectTokenModule(),
  Global: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    generateToken: () => dispatch(generateToken()),
    fetchKenalan: (token) => dispatch(fetchKenalan(token)),
    postKenalan: (detailKenalan) => dispatch(postKenalan(detailKenalan)),
    deleteKenalan: () => dispatch(deleteKenalan()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TokenModule);
