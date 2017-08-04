/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectGlobal from 'globalSelectors';

import Footer from 'components/Footer';
import Card from 'components/Card';

import TokenModule from 'containers/TokenModule';
import LatestUpdatesModule from 'containers/LatestUpdatesModule';
import DateModule from 'containers/DateModule';
import ForumModule from 'containers/ForumModule';
import WhatElementSaysModule from 'containers/WhatElementSaysModule';

import makeSelectHomePage from './selectors';

import {
  fetchEvents,
} from 'containers/EventPage/actions';

import {
  fetchTasks,
} from 'containers/TaskPage/actions';

import {
  Home,
} from './styled';

const moment = window.moment;

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.fetchTasks();
    this.props.fetchEvents();
  }

  render() {
    const now = new moment();

    const {
      tasks
    } = this.props.homePage.task;

    const {
      events,
    } = this.props.homePage.event;

    const activeTasks = tasks.filter((value) => {
      const deadline = new moment(value.end_time);

      if (deadline.diff(now) > 0) {
        return true;
      }

      return false;
    });

    const activeEvents = events.filter((value) => {
      const start = new moment(value.start_time);

      if (start.diff(now) > 0) {
        return true;
      }

      return false;
    });

    const importantDates = tasks.concat(events);

    let activeImportantDates = activeTasks.concat(activeEvents).sort((a, b) => {
      let aMoment = new moment(a.end_time);
      let bMoment = new moment(b.end_time);

      if ('location' in a) {
        aMoment = new moment(a.start_time);
      }

      if ('location' in b) {
        bMoment = new moment(b.start_time);
      }

      const diff = aMoment.diff(bMoment);

      if (diff < 0) {
        return -1;
      }

      if (diff > 0) {
        return 1;
      }

      return 0;
    });

    if (activeTasks.length > 3) {
      activeImportantDates = activeImportantDates.slice(0, 3);
    }

    return (
      <Home>
        <Helmet
          title=""
          meta={[
            { name: 'description', content: 'PMB Fasilkom UI application' },
          ]}
        />
        <TokenModule user={this.props.Global.user} />
        <LatestUpdatesModule importantDates={activeImportantDates} />
        <div className="homeContent">
          <div className="leftColumn">
            <div className="calendar">
              <Card>
                <div className="container">
                  <h2 className="label">Server Time</h2>
                  <h1 className="serverTime">05:00</h1>
                  <h2 className="label">PMB Calendar</h2>
                  <DateModule importantDates={importantDates} />
                </div>
              </Card>
            </div>
            <Card>
              <WhatElementSaysModule />
            </Card>
          </div>
          <div className="rightColumn">
            <Card>
              <ForumModule />
            </Card>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </Home>
    );
  }
}

HomePage.propTypes = {
  fetchTasks: PropTypes.func.isRequired,
  fetchEvents: PropTypes.func.isRequired,
  homePage: PropTypes.object,
  Global: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
  Global: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchTasks: () => dispatch(fetchTasks()),
    fetchEvents: () => dispatch(fetchEvents()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
