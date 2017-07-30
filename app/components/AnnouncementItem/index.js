/**
*
* AnnouncementItem
*
*/

import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
// import Card from '../Card';
import Item from './styled';

class AnnouncementItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      comment: 'comment',
    };
  }

  render() {
    return (
      <Item>
        <div className="media-primary">
          <div className="media-body">
            <div className="header">
              <a href="#"><h1 className="media-heading">BESOK EVAL WLEEEE!!</h1></a>
              <p className="command">
                <a href="https://google.com">Admin</a> | {i}-September-2017, 11.00 PM
              </p>
            </div>
            <div className="media-content" dangerouslySetInnerHTML={{ __html: 'Blablablabla' }} />
            <button className="read-more">
              Read More
            </button>
          </div>
        </div>
      </Item>
    );
  }
}

AnnouncementItem.propTypes = {
  header: React.PropTypes.string.isRequired,
  article: React.PropTypes.string.isRequired,
  publisher: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
  time: React.PropTypes.string.isRequired,
  countComment: React.PropTypes.string.isRequired,
};

AnnouncementItem.defaultProps = {
  countComment: 0,
};

export default AnnouncementItem;
