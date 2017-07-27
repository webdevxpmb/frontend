/*
 *
 * LatestUpdatesModule
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Card from 'components/Card';

import {
  LatestUpdates,
} from './styled';

export class LatestUpdatesModule extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <LatestUpdates>
        <Card>
          <div className="updatesContent">
            <div className="title">
              <h1>Latest Updates</h1>
              <span className="icon-down" />
            </div>
            <div className="updates">
              <div className="updatesCard">
                <h1>Sabtu Pelangi 1</h1>
                <div className="date">
                  <span className="icon-event" />
                  <h2>1 October 2017, 09:00 AM</h2>
                </div>
                <p>
                  Porta a sociis nibh vestibulum lacinia a cras a faucibus scelerisque a a sed fames erat lectus pulvinar turpis eros.
                </p>
                <button>
                  <span className="icon-send" />
                  Read More
                </button>
              </div>
              <div className="border" />
              <div className="updatesCard">
                <h1>Sabtu Pelangi 1</h1>
                <div className="date">
                  <span className="icon-event" />
                  <h2>1 October 2017, 09:00 AM</h2>
                </div>
                <p>
                  Porta a sociis nibh vestibulum lacinia a cras a faucibus scelerisque a a sed fames erat lectus pulvinar turpis eros.
                </p>
                <button>
                  <span className="icon-send" />
                  Read More
                </button>
              </div>
              <div className="border" />
              <div className="updatesCard">
                <h1>Sabtu Pelangi 1 ela elo aowkeoawkeo</h1>
                <div className="date">
                  <span className="icon-event" />
                  <h2>1 October 2017, 09:00 AM</h2>
                </div>
                <p>
                  Porta a sociis nibh vestibulum lacinia a cras a faucibus scelerisque a a sed fames erat lectus pulvinar turpis eros.
                </p>
                <button>
                  <span className="icon-send" />
                  Read More
                </button>
              </div>
            </div>
          </div>
        </Card>
      </LatestUpdates>
    );
  }
}

LatestUpdatesModule.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(LatestUpdatesModule);
