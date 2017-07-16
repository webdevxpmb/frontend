/*
 *
 * TugasPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectTugasPage from './selectors';

export class TugasPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="TugasPage"
          meta={[
            { name: 'description', content: 'Description of TugasPage' },
          ]}
        />
        <h1>Tugas</h1>
      </div>
    );
  }
}

TugasPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  TugasPage: makeSelectTugasPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TugasPage);
