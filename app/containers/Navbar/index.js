/*
 *
 * Navbar
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectNavbar from './selectors';

export class Navbar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        WOIOIOIO
      </div>
    );
  }
}

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Navbar: makeSelectNavbar(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
