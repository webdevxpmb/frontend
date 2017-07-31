/**
*
* AnnouncementItem
*
*/

import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
// import Card from '../Card';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import WyswygEditor from 'components/WyswygEditor';
import SectionHeading from 'components/SectionHeading';
import Card from 'components/Card';
import ForumModule from 'containers/ForumModule';
import { Item, Comment } from './styled';

class AnnouncementItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    // const posts = this.props.posts.posts;
    // let post;
    // for (let i = 0; i < posts.length; i += 1) {
    //   if (posts[i].slug === this.props.slug) {
    //     post = posts[i];
    //   }
    // }

    // if (post === undefined) {
    //   this.props.push('/*');
    // }
    // const date = new Date(post.date);
    // const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oktober', 'November', 'December'];

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
              <button className="read-more" onClick={() => this.props.push('/announcement')}>
                Back
              </button>
            </div>
          </div>
        </Item>
        <Card>
          <ForumModule
            title="Comments"
            postLabel="All Comments"
          />
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
  push: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    push: (url) => (dispatch(push(url))),
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(AnnouncementItem);
