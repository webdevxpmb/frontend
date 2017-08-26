/* eslint new-cap: 0 no-plusplus: 0 */
/*
 *
 * WhatElementSaysModule
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { isEmpty } from 'lodash';

import makeSelectGlobal from 'globalSelectors';

import WyswygEditor from 'components/WyswygEditor';
import WhatElementSaysPost from 'components/WhatElementSaysPost';

import makeSelectWhatElementSaysModule from './selectors';

import {
  fetchWhatElementSays,
  postWhatElementSays,
} from './actions';

import {
  WhatElementSays,
} from './styled';

export class WhatElementSaysModule extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.onNewPost = this.onNewPost.bind(this);
  }

  componentDidMount() {
    if (!isEmpty(this.props.Global.user)) {
      this.props.fetchWhatElementSays();
    }
  }

  onNewPost(testimony) {
    const whatElementSays = {
      testimony,
    };

    this.props.postWhatElementSays(whatElementSays);
  }

  render() {
    const isMaba = !isEmpty(this.props.Global.user) ? this.props.Global.user.role === 'mahasiswa baru' : false;
    let posts = (<p className="empty">There is no approved testimonies from the elements yet, stay tuned.</p>);

    if (this.props.WhatElementSaysModule.whatElementSays) {
      posts = this.props.WhatElementSaysModule.whatElementSays.map((value, index) => {
        if (value.approved) {
          return (
            <WhatElementSaysPost key={`forum-post-home-${index}`} whatElementSays={value} />
          );
        }

        return false;
      });
    }

    return (
      <WhatElementSays>
        <h1 className="label">Apa Kata Elemen</h1>
        <div className="posts">
          {posts}
        </div>
        {
          !isMaba &&
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
        }
      </WhatElementSays>
    );
  }
}

WhatElementSaysModule.propTypes = {
  fetchWhatElementSays: PropTypes.func.isRequired,
  postWhatElementSays: PropTypes.func.isRequired,
  WhatElementSaysModule: PropTypes.object,
  Global: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  WhatElementSaysModule: makeSelectWhatElementSaysModule(),
  Global: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchWhatElementSays: () => dispatch(fetchWhatElementSays()),
    postWhatElementSays: (whatElementSays) => dispatch(postWhatElementSays(whatElementSays)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WhatElementSaysModule);
