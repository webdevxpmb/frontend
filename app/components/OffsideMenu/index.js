/**
*
* OffsideMenu
*
*/

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { createStructuredSelector } from 'reselect';
import makeSelectGlobal from 'globalSelectors';

import {
  logout,
} from 'globalActions';

import {
  Offside,
} from './styled';

class OffsideMenu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.goTo = this.goTo.bind(this);
  }

  goTo(url) {
    this.props.push(url);
    this.props.toggleOffside();
  }

  render() {
    return (
      <Offside display={this.props.display}>
        <div className="content">
          <h1>
            Welcome {this.props.Global.user.name}.
            <br />
          </h1>
          <button onClick={() => this.goTo('/')} className="link"><span className="icon-home" />Home</button>
          <button onClick={() => this.goTo('/announcement')} className="link"><span className="icon-announcement" />Announcement</button>
          <button onClick={() => this.goTo('/task')} className="link"><span className="icon-task" />Task</button>
          <button onClick={() => this.goTo('/event')} className="link"><span className="icon-event" />Event</button>
          {
            // <button onClick={() => this.goTo('/help')} className="link"><span className="icon-help" />Help</button>
          }
          <button onClick={() => this.goTo('/dashboard')} className="link"><span className="icon-dashboard" />Dashboard</button>
          <button onClick={this.props.logout} className="link"><span className="icon-close" />Logout</button>
          <button onClick={this.props.toggleOffside} className="close">
            <span className="icon-close" />Close
          </button>
        </div>
      </Offside>
    );
  }
}

OffsideMenu.propTypes = {
  toggleOffside: React.PropTypes.func.isRequired,
  display: React.PropTypes.bool,
  Global: React.PropTypes.object,
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

export default connect(mapStateToProps, mapDispatchToProps)(OffsideMenu);
