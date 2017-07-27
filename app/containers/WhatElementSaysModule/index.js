/* eslint new-cap: 0 no-plusplus: 0 */
/*
 *
 * WhatElementSaysModule
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import makeSelectWhatElementSaysModule from './selectors';

import WyswygEditor from 'components/WyswygEditor';
import ForumPost from 'components/ForumPost';

import {
  WhatElementSays,
} from './styled';

const moment = window.moment;

export class WhatElementSaysModule extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.state = {
      forumPosts: [
        {
          post: '<p>Halo, Semoga angkatan Rebung semakin jago ya</p>',
          poster: {
            name: 'Kenny Reida Dharmawan',
          },
          posted_on: '2017-07-25T22:14:42+07:00',
        },
        {
          post: '<p>Rebung mantap, teruskan!</p>',
          poster: {
            name: 'Seseorang Yang Namanya Panjang Sekali Kaya ABCDEFG HIJ KLMN O WOOOOOO',
          },
          posted_on: '2017-07-25T22:14:42+07:00',
        },
      ],
    };

    this.onNewPost = this.onNewPost.bind(this);
  }

  onNewPost(post) {
    const newForumPosts = this.state.forumPosts.slice(0);

    const newPost = {
      post,
      poster: {
        name: 'Kenny Reida Dharmawan',
      },
      posted_on: new moment().toISOString(),
    };

    newForumPosts.push(newPost);

    this.setState({ forumPosts: newForumPosts });
  }

  render() {
    const posts = this.state.forumPosts.map((value, index) => (
      <ForumPost key={`forum-post-home-${index}`} post={value} isElementPost />
    ));

    return (
      <WhatElementSays>
        <h1 className="label">Apa Kata Elemen</h1>
        <div className="posts">
          {posts}
        </div>
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
      </WhatElementSays>
    );
  }
}

WhatElementSaysModule.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

// const mapStateToProps = createStructuredSelector({
//   WhatElementSaysModule: makeSelectWhatElementSaysModule(),
// });

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(WhatElementSaysModule);
