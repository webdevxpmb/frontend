/*
 *
 * EventPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Footer from 'components/Footer';
import EventList from 'components/EventList';

import { createStructuredSelector } from 'reselect';
import makeSelectEventPage from './selectors';

import {
  fetchEvents,
  fetchEventStatistics,
} from './actions';

import {
  Event,
} from './styled';

export class EventPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.fetchEvents();
    this.props.fetchEventStatistics();
  }

  render() {
    return (
      <Event>
        <Helmet
          title="Event"
          meta={[
            { name: 'description', content: 'Description of EventPage' },
          ]}
        />
        <div className="event-content">
          <EventList events={this.props.EventPage.events} eventStatistics={this.props.EventPage.eventStatistics} />
          <div className="footer">
            <Footer />
          </div>
        </div>
      </Event>
    );
  }
}

EventPage.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
  fetchEventStatistics: PropTypes.func.isRequired,
  EventPage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  EventPage: makeSelectEventPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    fetchEventStatistics: () => dispatch(fetchEventStatistics()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
