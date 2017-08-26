/* eslint new-cap: 0 no-plusplus: 0 */
/**
*
* WhatElementSaysPost
*
*/

import React from 'react';

import {
  WhatElementSays,
} from './styled';

const moment = window.moment;

class WhatElementSaysPost extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <WhatElementSays>
        <div className="post" dangerouslySetInnerHTML={{ __html: this.props.whatElementSays.testimony }} />
        <div className="author">
          <p>
            Posted {new moment(this.props.whatElementSays.posted_on).calendar()} by {this.props.whatElementSays.author.profile.name}
          </p>
        </div>
      </WhatElementSays>
    );
  }
}

WhatElementSaysPost.propTypes = {
  whatElementSays: React.PropTypes.object.isRequired,
};

export default WhatElementSaysPost;
