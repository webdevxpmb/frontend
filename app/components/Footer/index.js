/**
*
* Footer
*
*/

import React from 'react';
import Card from 'components/Card';

import Logo from 'assets/logo.png';
import Ristek from 'assets/footer_ristek.png';

import {
  Foot,
} from './styled';

class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Card>
        <Foot>
          <div className="logoPack">
            <img src={Logo} alt="Logo PMB 2017" />
            <h1>#BersamaMenggenggamMasaDepan</h1>
          </div>
          <div className="ristekPack">
            <h1>In Collaboration With</h1>
            <img src={Ristek} alt="Logo Ristek 2017" />
          </div>
        </Foot>
      </Card>
    );
  }
}

Footer.propTypes = {

};

export default Footer;
