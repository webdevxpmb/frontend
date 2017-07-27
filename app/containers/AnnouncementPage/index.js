/*
 *
 * AnnouncementPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import AnnouncementList from 'components/AnnouncementList';
import { createStructuredSelector } from 'reselect';
import makeSelectAnnouncementPage from './selectors';

const Style = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;

  .announce-content {
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
