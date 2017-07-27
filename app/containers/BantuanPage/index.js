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
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;

  .help-content {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 6rem 0 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    
    &>div {
      margin: 1em 0;
    }
    .title {
      margin: 1em 0;
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
        <div className="help-content">
          <h3 className="title">BANTUAN</h3>
          <ContactPmb />
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
