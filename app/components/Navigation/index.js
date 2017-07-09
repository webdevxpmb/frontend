/**
*
* Navigation
*
* @TODO
* [] Navbar responsive
* [] Navbar bisa ngelink ke halaman lain
*/

import React from 'react';
import { push } from 'react-router-redux';

import Nav from './Nav';

class Navigation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Nav>
        <div className="nav-container">
          <div className="img-container">
            <img id="pmb-nav-logo" src="https://pbs.twimg.com/profile_images/780731113685684224/fpuJ_2il_400x400.jpg" alt="PMB Fasilkom UI 2017" />
          </div>
          <div className="tabs">
            <a>Event</a>
            <a>Tugas</a>
            <a>Apa Kata Element?</a>
            <a>Statistik Maba</a>
            <a>Gallery</a>
          </div>
          <button id="sso">MASUK DENGAN SSO</button>
        </div>
      </Nav>
    );
  }
}

Navigation.propTypes = {

};

export default Navigation;
