/**
*
* Navigation
*
*/

import React from 'react';
import { push } from 'react-router-redux';

import Nav from './Nav';

class Navigation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Nav>
        <div>
          <a>Event</a>
          <a>Tugas</a>
          <a>Apa Kata Element?</a>
          <a>Statistik Maba</a>
          <a>Gallery</a>
        </div>
      </Nav>
    );
  }
}

Navigation.propTypes = {

};

export default Navigation;
