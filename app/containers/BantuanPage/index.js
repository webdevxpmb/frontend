/*
 *
 * BantuanPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import SectionHeading from 'components/SectionHeading';
import ContactPmb from 'components/ContactPmb';
import Faq from 'components/Faq';
import Bantuan from './styled';

export class BantuanPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Bantuan>
        <Helmet
          title="Bantuan"
          meta={[
            { name: 'description', content: 'PMB Fasilkom UI 2017' },
          ]}
        />
        <div className="content">
          <SectionHeading>
            Kontak Panitia
          </SectionHeading>
          <ContactPmb />
          <SectionHeading>
            Frequently Answered Questions (FAQs)
          </SectionHeading>
          <Faq />
        </div>
      </Bantuan>
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
