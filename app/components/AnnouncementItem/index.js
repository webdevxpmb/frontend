/**
*
* AnnouncementItem
*
*/

import React from 'react';
import styled from 'styled-components';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const Item = styled.div`
  background-color: #fff;
  width: 70%;
  padding: 1em;
  border-radius: 0.5em;
  margin: 0.5em 0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  overflow: auto;
  .media-primary {
    border-bottom: 1px solid #C6C8CA;
    display: -webkit-flex;
    display: flex;
  }
  .media-left {
    margin-right: 1em;
    width: 60px;
    .img-container {
      width: 60px;
      border-radius: 50%;
      overflow: hidden;
      .media-img { width: 100%; }
    } 
  }
  .media-body { width: 90%; }
  .media-info , .media-heading { margin: 0; }
  .media-action {
    margin-top: 1em;
    .comment { margin: 0 0.5em; }
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

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
            <h2 className="media-heading"><a href="#">{this.props.header}</a></h2>
            <div className="media-content">
              <p>{this.props.article}</p>
            </div>
          </div>
        </div>
        <div>
          <p>
            <a href="https://google.com">{this.props.publisher}</a> - {this.props.date}, {this.props.time} {this.props.countComment} {this.state.comment}
            <button>Reply</button>
          </p>
          
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
  countComment: React.PropTypes.number.isRequired,
};

AnnouncementItem.defaultProps = {
  publisher: 'admin',
  countComment: 0,
};

export default AnnouncementItem;


{/*<AnnouncementItem
  header="Halo"
  article="Lorem Lorem Lorem Lorem Lorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem Lorem"
  publisher="Satria"
  date="20 September 2017"
  time="1:10 AM"
  countComment="9"
/>*/}