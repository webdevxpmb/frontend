/*
 *
 * BantuanPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import ContactPmb from 'components/ContactPmb';
import Faq from 'components/Faq';
import messages from './messages';

export class BantuanPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Bantuan"
          meta={[
            { name: 'description', content: 'PMB Fasilkom UI 2017' },
          ]}
        />
        <ContactPmb />
        <Faq />
      </div>
    );
  }
}

BantuanPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(BantuanPage);
