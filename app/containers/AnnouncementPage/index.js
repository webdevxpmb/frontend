/*
 *
 * AnnouncementPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { isEmpty } from 'lodash';

import AnnouncementItem from 'components/AnnouncementItem';
import Footer from 'components/Footer';
import SectionHeading from 'components/SectionHeading';

import {
  fetchAnnouncements,
  fetchAnnouncementContent,
} from './actions';

import makeSelectAnnouncementPage from './selectors';

import {
  Announcement,
} from './styled';

export class AnnouncementPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.fetchAnnouncements();
  }

  render() {
    let renderedItem = (<div className="emptyState">No Announcement Available</div>);

    if (!isEmpty(this.props.AnnouncementPage.announcements)) {
      renderedItem =  this.props.AnnouncementPage.announcements.map((value, index) => (
        <AnnouncementItem key={`pmb-announcement-${index}`} announcement={value} onReadMore={() => this.props.push(`/announcement/${value.id}`)} />
      ));

      if (this.props.params.slug) {
        const announcementContent = this.props.AnnouncementPage.announcements.find((value) => {
          return value.id === parseInt(this.props.params.slug);
        });

        renderedItem = (<AnnouncementItem announcement={announcementContent} detailed onBack={() => this.props.push('/announcement')} />)
      }
    }

    return (
      <Announcement>
        <Helmet
          title="Pengumuman"
          meta={[
            { name: 'Pengumuman', content: 'Description of AnnouncementPage' },
          ]}
        />
        <div className="announcementPageContent">
          <SectionHeading>
            Announcement
          </SectionHeading>
          <div className="announcementList">
            {renderedItem}
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </Announcement>
    );
  }
}

AnnouncementPage.propTypes = {
  push: PropTypes.func.isRequired,
  fetchAnnouncements: PropTypes.func.isRequired,
  AnnouncementPage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  AnnouncementPage: makeSelectAnnouncementPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    push: (url) => dispatch(push(url)),
    fetchAnnouncements: () => dispatch(fetchAnnouncements()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementPage);
