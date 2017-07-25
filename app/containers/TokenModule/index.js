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
    const isMaba = false;

    if (isMaba) {
      return (
        <TokenForm progress={80}>
          <div className="content">
            <h1>Masukkan token, mulai berkenalan.</h1>
            <div className="form">
              <input className="input" type="text" placeholder="Token elemen" />
              <button><span className="icon-send" />Kenalan</button>
            </div>
          </div>
        </TokenForm>
      );
    }

    return (
      <Token progress={80}>
        <div className="content">
          <div className="token">
            <h3>Selamat datang, gunakan token ini untuk berkenalan</h3>
            <div className="textPack">
              <span className="icon-token" />
              <h1>743829</h1>
            </div>
          </div>
          <div className="progress">
            <div className="bar">
              <div className="current" />
              <div className="max" />
            </div>
            <span className="icon-time" />
            <h1>03:45</h1>
          </div>
        </div>
      </Token>
    );
  }
}

TokenModule.propTypes = {
  dispatch: PropTypes.func.isRequired,
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
