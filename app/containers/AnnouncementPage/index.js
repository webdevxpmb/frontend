/*
 *
 * AnnouncementPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import AnnouncementList from 'components/AnnouncementList';
import { createStructuredSelector } from 'reselect';
import makeSelectAnnouncementPage from './selectors';


export class AnnouncementPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Pengumuman"
          meta={[
            { name: 'Pengumuman', content: 'Description of AnnouncementPage' },
          ]}
        />
        <AnnouncementList />
      </div>
    );
  }
}

AnnouncementPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  AnnouncementPage: makeSelectAnnouncementPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementPage);
