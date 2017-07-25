/*
 *
 * BantuanPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import ContactPmb from 'components/ContactPmb';
import Faq from 'components/Faq';
import styled from 'styled-components';

const Bantuan = styled.div`
  .title {
    font-weight: bold;
    font-family: "Montserrat";
    color: ${(props) => props.theme.tosca};
  }

  @media screen and (max-width: 40em) {
    padding: 3rem 1rem;
    .title {
      margin: 2rem auto;
    }
  }
`;

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
        <h3 className="title">BANTUAN</h3>
        <ContactPmb />
        <Faq />
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
