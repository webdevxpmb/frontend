/**
*
* Navigation
*
* @TODO
* [] Navbar responsive
* [] Navbar bisa ngelink ke halaman lain
*/

import React from 'react';
// import { push } from 'react-router-redux';

import Card from 'components/Card';

import {
  Nav,
  Content,
} from './styled';

class Navigation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Nav>
        <Card radius="bottom">
          <Content>
            <a>Event</a>
            <a>Tugas</a>
            <a>Apa Kata Element?</a>
            <a>Statistik Maba</a>
            <a>Gallery</a>
          </Content>
        </Card>
      </Nav>
    );
  }
}

Navigation.propTypes = {

};

export default Navigation;
