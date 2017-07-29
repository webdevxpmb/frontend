/*
 *
 * EventPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import SectionHeading from 'components/SectionHeading';
import EventList from 'components/EventList';
import makeSelectEventPage from './selectors';

const Style = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;

  .event-content {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 7rem 0 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
  }
`;

export class EventPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Style>
        <Helmet
          title="Event"
          meta={[
            { name: 'description', content: 'Description of EventPage' },
          ]}
        />
        <div className="event-content">
          <SectionHeading>
            Event PMB
          </SectionHeading>
          <EventList />
        </div>
      </Style>
    );
  }
}

EventPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  EventPage: makeSelectEventPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);


{/*<EventItem
    title="EVALLL!!!"
    date="20 September 2017"
    startTime="09:00 AM"
    endTime="10:00 AM"
    location="Fasilkom UI"
    detail="LET'S ROCKKKK !!!! LET'S ROCKKKK !!!! LET'S ROCKKKK !!!! LET'S ROCKKKK !!!! LET'S ROCKKKK !!!!
            LET'S ROCKKKK !!!!LET'S ROCKKKK !!!!LET'S ROCKKKK !!!!LET'S ROCKKKK !!!!"
  />
  <EventItem
    title="EVALLL!!!"
    date="20 September 2017"
    startTime="09:00 AM"
    endTime="10:00 AM"
    location="Fasilkom UI"
    detail="LET'S ROCKKKK !!!! LET'S ROCKKKK !!!! LET'S ROCKKKK !!!! LET'S ROCKKKK !!!! LET'S ROCKKKK !!!!
            LET'S ROCKKKK !!!!LET'S ROCKKKK !!!!LET'S ROCKKKK !!!!LET'S ROCKKKK !!!!"
  />
  <EventItem
    title="EVALLL!!!"
    date="20 September 2017"
    startTime="09:00 AM"
    endTime="10:00 AM"
    location="Fasilkom UI"
    detail="LET'S ROCKKKK !!!! LET'S ROCKKKK !!!! LET'S ROCKKKK !!!! LET'S ROCKKKK !!!! LET'S ROCKKKK !!!!
            LET'S ROCKKKK !!!!LET'S ROCKKKK !!!!LET'S ROCKKKK !!!!LET'S ROCKKKK !!!!"

  />
  <EventItem
    title="EVALLL!!!"
    date="20 September 2017"
    startTime="09:00 AM"
    endTime="10:00 AM"
    location="Fasilkom UI"
    detail="LET'S ROCKKKK !!!! LET'S ROCKKKK !!!! LET'S ROCKKKK !!!! LET'S ROCKKKK !!!! LET'S ROCKKKK !!!!
            LET'S ROCKKKK !!!!LET'S ROCKKKK !!!!LET'S ROCKKKK !!!!LET'S ROCKKKK !!!!"
  />
</div>*/}