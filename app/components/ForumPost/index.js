/* eslint new-cap: 0 no-plusplus: 0 */
/**
*
* ForumPost
*
*/

import React from 'react';

import WyswygEditor from 'components/WyswygEditor';

import {
  Post,
} from './styled';

const moment = window.moment;

class ForumPost extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.state = {
      isReplying: false,
    };

    this.toggleReplyInput = this.toggleReplyInput.bind(this);
  }

  toggleReplyInput() {
    this.setState({ isReplying: !this.state.isReplying });
  }

  render() {
    const isReply = !Object.prototype.hasOwnProperty.call(this.props.post, 'replies');

    let replies = null;

    if (!isReply) {
      replies = this.props.post.replies.map((value, index) => (
        <ForumPost key={`forum-post-home-${index}`} post={value} />
      ));
    }

    return (
      <Post isReply={isReply && !this.props.isElementPost}>
        <div className="post" dangerouslySetInnerHTML={{ __html: this.props.post.post }} />
        <div className="author">
          <p>
            Posted {new moment(this.props.post.posted_on).calendar()} by {this.props.post.poster.name}
            {
              !isReply && !this.props.isElementPost &&
              <span className="divider">·</span>
            }
            {
              !isReply && !this.props.isElementPost &&
              <button onClick={this.toggleReplyInput}>{this.state.isReplying ? 'Cancel Replying' : 'Reply'}</button>
            }
          </p>
        </div>
        {
          !isReply && !this.props.isElementPost &&
          <div className="replies">
            {replies}
          </div>
        }
        {
          !isReply && !this.props.isElementPost && this.state.isReplying &&
          <div className="newReply">
            <h1 className="label">Reply Post</h1>
            <WyswygEditor
              onSubmit={(value) => {
                if (value) {
                  this.props.onPostReply(value);
                }
              }}
              placeholder="Write down your reply here"
            />
          </div>
        }
      </Post>
    );
  }
}

ForumPost.propTypes = {
  post: React.PropTypes.object.isRequired,
  onPostReply: React.PropTypes.func,
  isElementPost: React.PropTypes.bool,
};

export default ForumPost;
