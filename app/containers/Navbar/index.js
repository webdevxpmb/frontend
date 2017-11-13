/*
 *
 * Navbar
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { createStructuredSelector } from 'reselect';
import makeSelectGlobal from 'globalSelectors';

import {
  logout,
} from 'globalActions';

// import { API_PREFIX } from 'request';

import Card from 'components/Card';

import Logo from 'assets/logo.png';
import DpmLogo from 'assets/dpm.png';

import {
  Nav,
} from './styled';

export class Navbar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (!this.props.Global.loggedIn) {
      this.props.push('/login');
    }
  }

  render() {
    return (
      <Nav>
        <Card smallRadius="bottom">
          <div className="navbarContent showForLarge">
            <button onClick={() => this.props.push('/')} className="logoSet">
              <div className="logo">
                <img src={Logo} alt="Logo PMB 2017" />
              </div>
              <div className="dpm">
                <img src={DpmLogo} alt="Logo DPM 2017" />
              </div>
            </button>
            <div className="navigations">
              <button onClick={() => this.props.push('/announcement')} className="link">Announcement</button>
              <button onClick={() => this.props.push('/task')} className="link">Task</button>
              <button onClick={() => this.props.push('/event')} className="link">Event</button>
              {/* <button onClick={() => this.props.push('/help')} className="link">Help</button> */}
              <button onClick={() => this.props.push('/about')} className="link">About</button>
              <button onClick={() => this.props.push('/dashboard')} className="dashboard">Dashboard</button>
              <button onClick={this.props.logout} className="logout">Logout</button>
            </div>
          </div>
          <div className="navbarContent hideForLarge">
            <button onClick={() => this.props.push('/')} className="logoSet">
              <div className="logo">
                <img src={Logo} alt="Logo PMB 2017" />
              </div>
              <div className="dpm">
                <img src={DpmLogo} alt="Logo DPM 2017" />
              </div>
            </button>
            <button onClick={this.props.toggleOffside} className="link">
              <span className="icon-menu" />
            </button>
          </div>
        </Card>
      </Nav>
    );
  }
}

Navbar.propTypes = {
  push: PropTypes.func.isRequired,
  toggleOffside: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  Global: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  Global: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    push: (url) => dispatch(push(url)),
    logout: () => dispatch(logout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
