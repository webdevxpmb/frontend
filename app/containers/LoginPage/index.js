/*
 *
 * LoginPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';

import { createStructuredSelector } from 'reselect';
import makeSelectGlobal from 'globalSelectors';

import {
  login,
} from 'globalActions';

import { API_PREFIX } from 'request';

import Logo from 'assets/logo.png';
import Ristek from 'assets/footer_ristek.png';

import {
  Login,
} from './styled';

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.receiveLoginData = this.receiveLoginData.bind(this);
  }

  componentDidMount() {
    window.addEventListener('message', this.receiveLoginData, false);

    if (this.props.Global.loggedIn) {
      this.props.push('/');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.Global.loggedIn && this.props.Global.loggedIn) {
      this.props.push('/');
    }
  }

  /**
   *  Catch login data from message sent by CP ORION via postMessage function
   *  Caught by setting an event listener to 'message' event
   */
  receiveLoginData(event) {
    // For Chrome, the origin property is in the event.originalEvent object.
    const origin = event.origin || event.originalEvent.origin;
    const user = event.data;

    // MAKE SURE FUNCTION CALLER ORIGIN IS FROM CP ORION DOMAIN! SECURITY PURPOSES.
    if (API_PREFIX.startsWith(origin)) {
      this.props.login(user);
    }
  }


  onLogin() {
    const loginWindow = window.open(`${API_PREFIX}/login/`, '_blank', 'width=800,height=600');

    const getUserDataInterval = setInterval(() => {
      // stop interval when login window has closed
      if (loginWindow.closed) {
        clearInterval(getUserDataInterval);
      }

      // postMessage to the window, the message is not important whatsoever,
      // what important is that CP ORION get CP OMEGA origin window
      // so CP ORION can send message back to CP OMEGA
      loginWindow.postMessage('MadeByWebdev2017', `${API_PREFIX}/login/`);
    }, 1000);
  }

  render() {
    return (
      <Login>
        <Helmet
          title="Login"
          meta={[
            { name: 'description', content: 'Description of LoginPage' },
          ]}
        />
        <div className="loginContainer">
          <h2>PMB 2017</h2>
          <h1>Bersama</h1>
          <h1>Menggenggam</h1>
          <h1>Masa Depan</h1>
          <button onClick={this.onLogin} className="loginButton">Login with SSO</button>
          <div className="ristek">
            <h3>In collaboration with:</h3>
            <a href="http://ristek.cs.ui.ac.id/" target="_blank">
              <img src={Ristek} alt="ristek" />
            </a>
          </div>
        </div>
        <div className="bg">
          <div className="container">
            <img src={Logo} alt="logo-pmb" />
          </div>
        </div>
      </Login>
    );
  }
}

LoginPage.propTypes = {
  push: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  Global: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  Global: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    push: (url) => dispatch(push(url)),
    login: (user) => dispatch(login(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);