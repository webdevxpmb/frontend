/*
 *
 * EventPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import NewsItem from 'components/NewsItem';
import makeSelectEventPage from './selectors';


export class EventPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Event"
          meta={[
            { name: 'description', content: 'Description of EventPage' },
          ]}
        />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
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
