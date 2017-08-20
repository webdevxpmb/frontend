/**
*
* AnnouncementItem
*
*/

import React from 'react';

import Card from 'components/Card';
import DateString from 'components/DateString';

import {
  AnnouncementElement,
} from './styled';

class AnnouncementItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let renderedItem = null;

    if (this.props.announcement) {
      renderedItem = (
        <div className="announcementContent">
          <h1>{this.props.announcement.title}</h1>
          <h2>Last updated on <DateString date={this.props.announcement.updated_at} /> by Admin.</h2>
          <p dangerouslySetInnerHTML={{ __html: this.props.announcement.summary }} />
          {
            this.props.announcement.attachment_link &&
            <a href={this.props.announcement.attachment_link} target="_blank">
              <span className="icon-link" />Attachment
            </a>
          }
          <button onClick={this.props.onReadMore}><span className="icon-send" />Read More</button>
        </div>
      );
    }

    if (this.props.detailed && this.props.announcement) {
      renderedItem = (
        <div className="announcementContent">
          <button className="backButton" onClick={this.props.onBack}><span className="icon-left" />Back</button>
          <h1>{this.props.announcement.title}</h1>
          <h2>Last updated on <DateString date={this.props.announcement.updated_at} /> by Admin.</h2>
          <p dangerouslySetInnerHTML={{ __html: this.props.announcement.content }} />
          {
            this.props.announcement.attachment_link &&
            <a href={this.props.announcement.attachment_link} target="_blank">
              <span className="icon-link" />Attachment
            </a>
          }
        </div>
      );
    }

    return (
      <AnnouncementElement>
        <Card>
          {renderedItem}
        </Card>
      </AnnouncementElement>
    );
  }
}

AnnouncementItem.propTypes = {
  announcement: React.PropTypes.object.isRequired,
  onReadMore: React.PropTypes.func,
  onBack: React.PropTypes.func,
  detailed: React.PropTypes.bool,
};

export default AnnouncementItem;
