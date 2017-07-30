/*
 *
 * AnnouncementPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import SectionHeading from 'components/SectionHeading';
import AnnouncementList from 'components/AnnouncementList';
import { createStructuredSelector } from 'reselect';
import makeSelectAnnouncementPage from './selectors';
import Style from './styled';

export class AnnouncementPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Style>
        <Helmet
          title="Pengumuman"
          meta={[
            { name: 'Pengumuman', content: 'Description of AnnouncementPage' },
          ]}
        />
        <div className="announce-content">
          <SectionHeading>
            Announcement
          </SectionHeading>
          <AnnouncementList />
        </div>
      </Style>
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
