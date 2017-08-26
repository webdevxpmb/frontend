/*
 *
 * LatestUpdatesModule
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Card from 'components/Card';
import DateString from 'components/DateString';

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
              <h1>Upcoming Events & Tasks</h1>
              <span className="icon-down" />
            </div>
            <div className="updates">
              {
                this.props.importantDates.length === 0 &&
                <div className="emptyState">No upcoming tasks or events</div>
              }
              {
                this.props.importantDates.length > 0 &&
                <div className="updatesCard">
                  <h1>{this.props.importantDates[0].name}</h1>
                  <div className="date">
                    <span className="icon-event" />
                    <h2><DateString date={this.props.importantDates[0].end_time} /> </h2>
                  </div>
                  <button
                    onClick={() => {
                      if ('is_kenalan' in this.props.importantDates[0]) {
                        this.props.push('/task');
                      } else if ('location' in this.props.importantDates[0]) {
                        this.props.push('/event');
                      }
                    }}
                  >
                    <span className="icon-send" />
                    {
                      'is_kenalan' in this.props.importantDates[0] ? 'Go to Tasks' : 'Go to Events'
                    }
                  </button>
                </div>
              }
              {
                this.props.importantDates.length > 1 &&
                <div className="border" />
              }
              {
                this.props.importantDates.length > 1 &&
                <div className="updatesCard">
                  <h1>{this.props.importantDates[1].name}</h1>
                  <div className="date">
                    <span className="icon-event" />
                    <h2><DateString date={this.props.importantDates[1].end_time} /> </h2>
                  </div>
                  <button
                    onClick={() => {
                      if ('is_kenalan' in this.props.importantDates[1]) {
                        this.props.push('/task');
                      } else if ('location' in this.props.importantDates[1]) {
                        this.props.push('/event');
                      }
                    }}
                  >
                    <span className="icon-send" />
                    {
                      'is_kenalan' in this.props.importantDates[1] ? 'Go to Tasks' : 'Go to Events'
                    }
                  </button>
                </div>
              }
              {
                this.props.importantDates.length > 2 &&
                <div className="border" />
              }
              {
                this.props.importantDates.length > 2 &&
                <div className="updatesCard">
                  <h1>{this.props.importantDates[2].name}</h1>
                  <div className="date">
                    <span className="icon-event" />
                    <h2><DateString date={this.props.importantDates[2].end_time} /> </h2>
                  </div>
                  <button
                    onClick={() => {
                      if ('is_kenalan' in this.props.importantDates[2]) {
                        this.props.push('/task');
                      } else if ('location' in this.props.importantDates[2]) {
                        this.props.push('/event');
                      }
                    }}
                  >
                    <span className="icon-send" />
                    {
                      'is_kenalan' in this.props.importantDates[2] ? 'Go to Tasks' : 'Go to Events'
                    }
                  </button>
                </div>
              }
            </div>
          </div>
        </Card>
      </LatestUpdates>
    );
  }
}

LatestUpdatesModule.propTypes = {
  push: PropTypes.func.isRequired,
  importantDates: PropTypes.array,
};


function mapDispatchToProps(dispatch) {
  return {
    push: (url) => dispatch(push(url)),
  };
}

export default connect(null, mapDispatchToProps)(LatestUpdatesModule);
