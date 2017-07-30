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
  padding: 0.5em;
  margin: 1em auto;
  background: ${(props) => props.theme.greyLighten};

  h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.25;
    color: ${(props) => props.theme.black};
  }

  h2 {
    font-size: 1rem;
    line-height: 1.25;
    color: ${(props) => props.theme.darkGray};
  }

  p {
    margin-top: 1rem;
    font-size: 0.9rem;
    line-height: 1;
    color: ${(props) => props.theme.gray};
  }
  
  .media-primary {
    display: -webkit-flex;
    display: flex;
    border-bottom: 1px solid ${(props) => props.theme.lightGray};
    padding-bottom: 0.5em;
  }
  .media-body { width: 100%; }
  .media-heading {
    margin: 0;
    font-weight: 700;
    font-family: 'Montserrat';
    a {color: black;}
  }
  .media-action {
    margin-top: 1em;

    .comment { margin: 0 0.5em; }
  }
  .command {
    font-size: 0.75em;
    display: flex;
    padding-top: 0.5em;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
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
            <h5 className="media-heading"><a href="#">{this.props.header}</a></h5>
            <br />
            <div className="media-content" dangerouslySetInnerHTML={{ __html: this.props.article }} />
          </div>
        </div>
        <div className="command">
          <p>
            <a href="https://google.com">{this.props.publisher}</a> | {this.props.date}, {this.props.time} {this.props.countComment} {this.state.comment} <a href="#">Reply</a>
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
  countComment: React.PropTypes.string.isRequired,
};

AnnouncementItem.defaultProps = {
  countComment: 0,
};

export default AnnouncementItem;
