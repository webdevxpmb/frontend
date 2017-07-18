/**
*
* AnnouncementItem
*
*/

import React from 'react';
import styled from 'styled-components';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import Card from '../Card';

const Item = styled.div`
  width: 100%;
  padding: 1em;
  .media-primary {
    display: -webkit-flex;
    display: flex;
  }
  .media-body { width: 100%; }
  .media-info , .media-heading { margin: 0; }
  .media-action {
    margin-top: 1em;
    .comment { margin: 0 0.5em; }
  }
  @media screen and (max-width: 960px) {
    width: 90%;
  }
  .media-command {
    display: -webkit-flex;
    display: flex;
  }
`;

class AnnouncementItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      comment: 'comment',
      isLoadMore: false,
    };
  }

  render() {
    return (
      <Card>
        <Item>
          <div className="media-primary">
            <div className="media-body">
              <h2 className="media-heading"><a href="#">{this.props.header}</a></h2>
              <div className="media-content">
                <p>{this.props.article}</p>
              </div>
            </div>
          </div>
          <div className="media-command">
            <p>
              <a href="https://google.com">{this.props.publisher}</a> - {this.props.date}, {this.props.time} {this.props.countComment} {this.state.comment} <a href="#">Reply</a>
            </p>
          </div>
        </Item>
      </Card>
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
