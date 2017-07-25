/*
 *
 * Navbar
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Card from 'components/Card';

import Logo from 'assets/logo.png';

import {
  Nav,
} from './styled';

export class Navbar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Nav>
        <Card smallRadius="bottom">
          <div className="content showForLarge">
            <button className="logoSet">
              <div className="logo">
                <img src={Logo} alt="Logo PMB 2017" />
              </div>
              <h1>#BersamaMenggenggamMasaDepan</h1>
            </button>
            <div className="navigations">
              <button className="link">Pengumuman</button>
              <button className="link">Tugas</button>
              <button className="link">Acara</button>
              <button className="link">Bantuan</button>
              <button className="dashboard">Dashboard</button>
              <button className="logout">Logout</button>
            </div>
          </div>
          <div className="content hideForLarge">
            <button className="logo">
              <img src={Logo} alt="Logo PMB 2017" />
            </button>
            <button className="link">
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
};

function mapDispatchToProps(dispatch) {
  return {
    push: (url) => dispatch(push(url)),
  };
}

export default connect(null, mapDispatchToProps)(Navbar);
