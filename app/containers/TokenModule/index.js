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
    };

    this.startTimer = this.startTimer.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.getKenalan = this.getKenalan.bind(this);
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
  }

  componentDidUpdate(prevProps, prevState) {
    if (!isEmpty(prevProps.TokenModule.token) && prevState.difference > 0 && this.state.difference === 0) {
      this.props.generateToken();
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
    const currentToken = !isMaba && !isEmpty(this.props.TokenModule.token) ? this.props.TokenModule.token.token : '-';

    if (isMaba) {
      return (
        <TokenForm>
          <div className="tokenContent">
            <h1>Write down the token, get to know your new friend now.</h1>
            <div className="form">
              <input value={this.state.inputToken} onChange={(evt) => this.onInputChange('inputToken', evt.target.value)} className="input" type="number" placeholder="Token elemen" />
              <button onClick={this.getKenalan}><span className="icon-send" />Go</button>
            </div>
          </div>
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TokenModule);
