/*
 *
 * EventPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import SectionHeading from 'components/SectionHeading';
import EventList from 'components/EventList';
import Style from './styled';
import makeSelectEventPage from './selectors';

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
        <div className="content">
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
