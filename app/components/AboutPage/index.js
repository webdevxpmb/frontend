/*
 *
 * AboutPage
 *
 */

import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
// import SectionHeading from 'components/SectionHeading';
import Panitia from 'components/Structure';
import Footer from 'components/Footer';
import Style from './styled';

export class AboutPage extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Style>
        <Helmet
          title="About"
          meta={[
            { name: 'About', content: 'Description of AboutPage' },
          ]}
        />
        <div className="content">
          {
            /*
              <SectionHeading>
                About
              </SectionHeading>
            */
          }
          <Panitia />
          <div className="footer">
            <Footer />
          </div>
        </div>
      </Style>
    );
  }
}

AboutPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default AboutPage;
