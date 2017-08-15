/*
 *
 * TokenModule
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import Card from 'components/Card';

// import makeSelectTokenModule from './selectors';

import {
  Token,
  TokenForm,
} from './styled';

export class TokenModule extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    // const isMaba = this.props.user.role === 'mahasiswa baru';

    // if (isMaba) {
    //   return (
    //     <TokenForm>
    //       <div className="tokenContent">
    //         <h1>Write down the token, get to know your new friend now.</h1>
    //         <div className="form">
    //           <input className="input" type="text" placeholder="Token elemen" />
    //           <button><span className="icon-send" />Go</button>
    //         </div>
    //       </div>
    //     </TokenForm>
    //   );
    // }

    // return (
    //   <Token progress={80}>
    //     <div className="tokenContent">
    //       <div className="token">
    //         <h3>Welcome, give this token to your new friend</h3>
    //         <div className="textPack">
    //           <span className="icon-token" />
    //           <h1>743829</h1>
    //         </div>
    //       </div>
    //       <div className="progress">
    //         <div className="bar">
    //           <div className="current" />
    //           <div className="max" />
    //         </div>
    //         <span className="icon-time" />
    //         <h1>03:45</h1>
    //       </div>
    //     </div>
    //   </Token>
    // );

    return (
      <Token progress={80}>
        <div className="tokenContent">
          <div className="token">
            <h3>Welcome to PMB 2017 website. you can check for announcements, events, and tasks here.<br /><br />More cool features will be added in the near future, so stay tuned for updates.</h3>
          </div>
        </div>
      </Token>
    );
  }
}

TokenModule.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object,
};

// const mapStateToProps = createStructuredSelector({
//   TokenModule: makeSelectTokenModule(),
// });

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(TokenModule);
