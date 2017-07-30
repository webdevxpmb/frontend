/**
*
* AnnouncementItem
*
*/

import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
// import Card from '../Card';
import WyswygEditor from 'components/WyswygEditor';
import SectionHeading from 'components/SectionHeading';
import Card from 'components/Card';
import { Item, Comment } from './styled';

class AnnouncementItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      comment: 'comment',
    };
  }

  render() {
    return (
      <div>
        <Item>
          <div className="media-primary">
            <div className="media-body">
              <div className="header">
                <a href="#"><h1 className="media-heading">{this.props.title}</h1></a>
                <p className="command">
                  <a href="https://google.com">{this.props.publisher}</a> | {this.props.date}, {this.props.time}
                </p>
              </div>
              <div className="media-content" dangerouslySetInnerHTML={{ __html: this.props.content }} />
              <button className="read-more">
                Back
              </button>
            </div>
          </div>
        </Item>
        <SectionHeading>
          Comments
        </SectionHeading>
        <Card>
          <Comment>
            <WyswygEditor
              placeholder="Comment.."
            />
            <div className="comments">
              dsjdkfk
            </div>
          </Comment>
        </Card>
      </div>
    );
  }
}

AnnouncementItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired,
  publisher: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
  time: React.PropTypes.string.isRequired,
};

AnnouncementItem.defaultProps = {

};

export default AnnouncementItem;
