/**
*
* OffscreenMenu
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import OffScreenMenu from './OffScreenMenu';

import logoPmbImg from 'assets/logopmb.png';

class OffscreenMenu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      menuContent: [
        {
          title: 'Event',
          link: '/event',
        }, 
        {
          title: 'Apa Kata Element?',
          link: '/apakataelement'
        },
        {
          title: 'Statistik Maba',
          link: '/statistikmaba',
        },
        {
          title: 'Gallery',
          link: '/gallery',
        },
      ],
      offsetMenuDisplay: false,
    };
    this.showOffsetMenu = this.showOffsetMenu.bind(this);
    this.hideOffsetMenu = this.hideOffsetMenu.bind(this);
  }

  showOffsetMenu() {
    this.setState({
      offsetMenuDisplay: true,
    });
  }

  hideOffsetMenu() {
    this.setState({
      offsetMenuDisplay: false,
    });
  }

  renderOffsetActions(isLoggedIn) {
    if (!isLoggedIn) {
      return (
        <div className="userAccess">
          <button className="action" onClick={() => this.goTo('/login')}>
            Login
          </button>
          <div className="divider"><div className="text">or</div></div>
          <button className="action" onClick={() => this.goTo('/signup')}>
            Sign Up
          </button>
        </div>
      );
    }

    return (
      <div className="userAccess">
        <h3>Hi, <strong>{this.props.Global.user.first_name}</strong></h3>
        <button className="action" onClick={() => this.goTo('/dashboard')}>
          Go to Dashboard
        </button>
        <div className="divider"><div className="text">or</div></div>
        <button className="action" onClick={() => this.props.logout()}>
          Logout
        </button>
      </div>
    );
  }

  render() {
    return (
      <OffScreenMenu>
        <div className="header">
          <button className="logo" onClick={() => this.goTo('/')}>
            <img src={logoPmbImg} alt="Logo PMB Fasilkom 2017" />
          </button>
          <div className="actions">
            <h3>Hai, Ricky!</h3>
            <button onClick={this.showOffsetMenu}>
              <span className="icon-menu" />
            </button>
          </div>
        </div>

        <div
          className={this.state.offsetMenuDisplay
            ? 'offsetMenu active'
            : 'offsetMenu passive'
          }
        >
          <div className="content">
            <button className="close-btn" onClick={this.hideOffsetMenu}><span className="icon-close">X</span></button>
            <div className="container">
              <div className="user-action">
                <h1>Hai, <span className="username">Ricky</span></h1>
              </div>
              <div className="navigations">
                <p><FormattedMessage {...messages.navHeaderMessage} /></p>
                <div className="ul-button">
                  <button className="li-button">Beranda</button>
                  <button className="li-button">Dashboard</button>
                  <button className="li-button">Event</button>
                  <button className="li-button">Pengumuman</button>
                  <button className="li-button">Profil</button>
                  <button className="li-button">Tugas</button>
                  <button id="btn-bantuan" className="li-button">Bantuan</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OffScreenMenu>
    );
  }
}

OffscreenMenu.propTypes = {

};

export default OffscreenMenu;
