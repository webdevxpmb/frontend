/* eslint new-cap: 0 no-plusplus: 0 */
/*
 *
 * ForumModule
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import makeSelectForumModule from './selectors';

import WyswygEditor from 'components/WyswygEditor';
import ForumPost from 'components/ForumPost';

import {
  Forum,
} from './styled';

const moment = window.moment;

export class ForumModule extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.state = {
      forumPosts: [
        {
          post: '<p>Halo, salam kenal</p><p><br></p><p>nama saya kenny</p><p><br></p><p>saya maba, saya ingin tanya</p><p><br></p><p>kenapa sistemnya jelek ya?</p>',
          poster: {
            name: 'Kenny Reida Dharmawan',
          },
          posted_on: '2017-07-25T22:14:42+07:00',
          replies: [
            {
              post: '<p>Hallo Kenny!, selamat datang di fasilkom</p><p> </p><p>Kami telah menerima kritikanmu dan memohon maaf atas ketidaknyamanannya</p><p><br></p><p>yang bikin sistem emg bego, hehe.</p>',
              poster: {
                name: 'Admin',
              },
              posted_on: '2017-07-25T22:14:42+07:00',
            },
            {
              post: '<p>Hallo Kenny!, selamat datang di fasilkom</p><p> </p><p>Kami telah menerima kritikanmu dan memohon maaf atas ketidaknyamanannya</p><p><br></p><p>yang bikin sistem emg bego, hehe.</p>',
              poster: {
                name: 'Admin',
              },
              posted_on: '2017-07-25T22:14:42+07:00',
            },
          ],
        },
        {
          post: '<p>Halo, salam kenal</p><p><br></p><p>nama saya kenny</p><p><br></p><p>saya maba, saya ingin tanya</p><p><br></p><p>kenapa sistemnya jelek ya?</p>',
          poster: {
            name: 'Kenny Reida Dharmawan',
          },
          posted_on: '2017-07-25T22:14:42+07:00',
          replies: [
            {
              post: '<p>Hallo Kenny!, selamat datang di fasilkom</p><p> </p><p>Kami telah menerima kritikanmu dan memohon maaf atas ketidaknyamanannya</p><p><br></p><p>yang bikin sistem emg bego, hehe.</p>',
              poster: {
                name: 'Admin',
              },
              posted_on: '2017-07-25T22:14:42+07:00',
            },
          ],
        },
      ],
    };

    this.onNewPost = this.onNewPost.bind(this);
    this.onPostReply = this.onPostReply.bind(this);
  }

  onNewPost(post) {
    const newForumPosts = this.state.forumPosts.slice(0);

    const newPost = {
      post,
      poster: {
        name: 'Kenny Reida Dharmawan',
      },
      posted_on: new moment().toISOString(),
      replies: [],
    };

    newForumPosts.unshift(newPost);

    this.setState({ forumPosts: newForumPosts });
  }


  onPostReply(originPost, reply) {
    const newForumPosts = this.state.forumPosts.slice(0);

    const newReply = {
      post: reply,
      poster: {
        name: 'Admin',
      },
      posted_on: new moment().toISOString(),
    };

    newForumPosts[originPost].replies.push(newReply);

    this.setState({ forumPosts: newForumPosts });
  }

  render() {
    const posts = this.state.forumPosts.map((value, index) => (
      <ForumPost key={`forum-post-home-${index}`} post={value} onPostReply={(reply) => this.onPostReply(index, reply)} />
    ));

    return (
      <Forum>
        <h1 className="label">{this.props.title}</h1>
        <div className="newPost">
          <WyswygEditor
            onSubmit={(value) => {
              if (value) {
                this.onNewPost(value);
              }
            }}
            placeholder="Write down your post here"
          />
        </div>
        <div className="posts">
          <h1 className="label">{this.props.postLabel}</h1>
          {posts}
        </div>
      </Forum>
    );
  }
}

ForumModule.propTypes = {
  title: React.PropTypes.string.isRequired,
  postLabel: React.PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

ForumModule.defaultProps = {
  title: 'Student Forum',
  postLabel: 'All Posts',
};

// const mapStateToProps = createStructuredSelector({
//   ForumModule: makeSelectForumModule(),
// });

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ForumModule);
