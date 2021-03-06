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
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { isEmpty } from 'lodash';

import makeSelectGlobal from 'globalSelectors';

import AnnouncementItem from 'components/AnnouncementItem';
import Footer from 'components/Footer';
import Card from 'components/Card';

import TokenModule from 'containers/TokenModule';
import LatestUpdatesModule from 'containers/LatestUpdatesModule';
import DateModule from 'containers/DateModule';
// import ForumModule from 'containers/ForumModule';
import WhatElementSaysModule from 'containers/WhatElementSaysModule';

import {
  fetchAnnouncements,
} from 'containers/AnnouncementPage/actions';

import {
  fetchEvents,
} from 'containers/EventPage/actions';

import {
  fetchTasks,
} from 'containers/TaskPage/actions';

import {
  Home,
} from './styled';

import makeSelectHomePage from './selectors';

const Moment = window.moment;

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.fetchTasks();
    this.props.fetchEvents();
    this.props.fetchAnnouncements();
  }

  render() {
    const now = new Moment();

    const {
      tasks,
    } = this.props.homePage.task;

    const {
      events,
    } = this.props.homePage.event;

    const activeTasks = tasks.filter((value) => {
      const deadline = new Moment(value.end_time);

      if (deadline.diff(now) > 0) {
        return true;
      }

      return false;
    });

    const activeEvents = events.filter((value) => {
      const start = new Moment(value.start_time);

      if (start.diff(now) > 0) {
        return true;
      }

      return false;
    });

    const importantDates = [];

    tasks.concat(events).forEach((value) => {
      if ('location' in value) {
        const start = new Moment(value.start_time);
        const end = new Moment(value.end_time);
        const diff = end.diff(start, 'days', true) < 1 && end.diff(start, 'days', true) > 0 ? 0 : Math.ceil(end.diff(start, 'days', true));

        if (diff > 1) {
          const currentEnd = new Moment(start.toISOString());

          for (let i = 0; i < diff; i += 1) {
            const current = { ...value, end_time: currentEnd.toISOString() };
            importantDates.push(current);
            currentEnd.add(1, 'days');
          }
        } else {
          importantDates.push(value);
        }
      } else {
        importantDates.push(value);
      }
    });


    let activeImportantDates = activeTasks.concat(activeEvents).sort((a, b) => {
      let aMoment = new Moment(a.end_time);
      let bMoment = new Moment(b.end_time);

      if ('location' in a) {
        aMoment = new Moment(a.start_time);
      }

      if ('location' in b) {
        bMoment = new Moment(b.start_time);
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

    let currentTime = new Moment();

    if (this.props.Global.serverTime) {
      currentTime = new Moment(this.props.Global.serverTime);
    }

    const dayNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const clockTime = `${currentTime.hour() > 9 ? currentTime.hour() : `0${currentTime.hour()}`}:${currentTime.minute() > 9 ? currentTime.minute() : `0${currentTime.minute()}`}:${currentTime.second() > 9 ? currentTime.second() : `0${currentTime.second()}`}`;
    const dateTime = `${dayNames[currentTime.day()]}, ${currentTime.date()} ${monthNames[currentTime.month()]} ${currentTime.year()}`;

    let announcementItemRendered = (<p className="empty">No Announcement Available</p>);

    if (!isEmpty(this.props.homePage.announcement.announcements)) {
      if (this.props.homePage.announcement.announcements.length > 5) {
        announcementItemRendered = this.props.homePage.announcement.announcements.slice(0, 5).map((value, index) => (
          <AnnouncementItem key={`pmb-announcement-${index}`} announcement={value} onReadMore={() => this.props.push(`/announcement/${value.id}`)} />
        ));
      } else {
        announcementItemRendered = this.props.homePage.announcement.announcements.map((value, index) => (
          <AnnouncementItem key={`pmb-announcement-${index}`} announcement={value} onReadMore={() => this.props.push(`/announcement/${value.id}`)} />
        ));
      }
    }

    return (
      <Home>
        <Helmet
          title=""
          meta={[
            { name: 'description', content: 'PMB Fasilkom UI application' },
          ]}
        />
        <TokenModule />
        <LatestUpdatesModule importantDates={activeImportantDates} />
        <div className="homeContent">
          <div className="leftColumn">
            <div className="announcements">
              <h1 className="sectionTitle">Latest Announcements</h1>
              {announcementItemRendered}
            </div>
          </div>
          <div className="rightColumn">
            <div className="sidebar">
              <div className="calendar">
                <Card>
                  <div className="container">
                    <h2 className="label">Server Time</h2>
                    <h1 className="serverTime">{clockTime}</h1>
                    <h1 className="serverDate">{dateTime}</h1>
                    <h2 className="label">PMB Calendar</h2>
                    <DateModule importantDates={importantDates} />
                  </div>
                </Card>
              </div>
              <div className="whatElementSaysContainer">
                <Card>
                  <WhatElementSaysModule />
                </Card>
              </div>
            </div>
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
  push: PropTypes.func.isRequired,
  fetchTasks: PropTypes.func.isRequired,
  fetchEvents: PropTypes.func.isRequired,
  fetchAnnouncements: PropTypes.func.isRequired,
  homePage: PropTypes.object,
  Global: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
  Global: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    push: (url) => dispatch(push(url)),
    fetchTasks: () => dispatch(fetchTasks()),
    fetchEvents: () => dispatch(fetchEvents()),
    fetchAnnouncements: () => dispatch(fetchAnnouncements()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
