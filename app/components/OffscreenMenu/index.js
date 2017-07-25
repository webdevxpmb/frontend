/**
*
* OffscreenMenu
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';
import logoPmbImg from 'assets/logopmb.png';
import Card from 'components/Card';
import messages from './messages';
import OffScreenMenu from './OffScreenMenu';

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
          link: '/apakataelement',
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

    this.goTo = this.goTo.bind(this);
    this.showOffsetMenu = this.showOffsetMenu.bind(this);
    this.hideOffsetMenu = this.hideOffsetMenu.bind(this);
  }

  goTo(url) {
    this.setState({
      offsetMenuDisplay: false,
    });

    this.props.push(url);
  }

  /**
   * Untuk menampilkan OffScreenMenu Slider
   */
  showOffsetMenu() {
    this.setState({
      offsetMenuDisplay: true,
    });
  }

  /**
   * Untuk close OffScreenMenu Slider
   */
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
        <Card radius="bottom">
          <div className="header">
            <button className="logo" onClick={() => this.goTo('/')}>
              <img src={logoPmbImg} alt="Logo PMB Fasilkom 2017" />
            </button>
            <div className="actions">
              <h3>Hai, <span>Ricky!</span></h3>
              <button onClick={this.showOffsetMenu}>
                <img alt="Menu" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDEyNCAxMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyNCAxMjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMTEyLDZIMTJDNS40LDYsMCwxMS40LDAsMThzNS40LDEyLDEyLDEyaDEwMGM2LjYsMCwxMi01LjQsMTItMTJTMTE4LjYsNiwxMTIsNnoiIGZpbGw9IiMwMGZmZmYiLz4KCTxwYXRoIGQ9Ik0xMTIsNTBIMTJDNS40LDUwLDAsNTUuNCwwLDYyYzAsNi42LDUuNCwxMiwxMiwxMmgxMDBjNi42LDAsMTItNS40LDEyLTEyQzEyNCw1NS40LDExOC42LDUwLDExMiw1MHoiIGZpbGw9IiMwMGZmZmYiLz4KCTxwYXRoIGQ9Ik0xMTIsOTRIMTJjLTYuNiwwLTEyLDUuNC0xMiwxMnM1LjQsMTIsMTIsMTJoMTAwYzYuNiwwLDEyLTUuNCwxMi0xMlMxMTguNiw5NCwxMTIsOTR6IiBmaWxsPSIjMDBmZmZmIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
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
                    <button className="li-button" onClick={() => this.goTo('/')}>Beranda</button>
                    <button className="li-button" onClick={() => this.goTo('/dashboard')}>Dashboard</button>
                    <button className="li-button" onClick={() => this.goTo('/event')}>Event</button>
                    <button className="li-button" onClick={() => this.goTo('/pengumuman')}>Pengumuman</button>
                    <button className="li-button" onClick={() => this.goTo('/profil')}>Profil</button>
                    <button className="li-button" onClick={() => this.goTo('/tugas')}>Tugas</button>
                    <button id="btn-bantuan" className="li-button" onClick={() => this.goTo('/signup')}>Bantuan</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </OffScreenMenu>
    );
  }
}

OffscreenMenu.propTypes = {
  push: React.PropTypes.func.isRequired,
};

export default OffscreenMenu;
