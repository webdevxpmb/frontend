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

    const approvedWhatElementSays = this.props.WhatElementSaysModule.whatElementSays.filter((value) => {
      if (value.approved) {
        return true;
      }

      return false;
    });

    if (!isEmpty(approvedWhatElementSays)) {
      posts = approvedWhatElementSays.map((value, index) => (
        <WhatElementSaysPost key={`forum-post-home-${index}`} whatElementSays={value} />
      ));
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
              placeholder="Write down your testimony here"
            />
            <p className="empty">After posting your testimony, it will be displayed when it has been approved as a valid testimony by the admin.</p>
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
