/**
*
* Footer
*
*/

import React from 'react';
import Card from 'components/Card';

import Logo from 'assets/logo.png';
import DpmLogo from 'assets/dpm.png';
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
            <img src={DpmLogo} alt="Logo PMB 2017" className="dpm" />
            <img src={Logo} alt="Logo PMB 2017" className="logo" />
            <h1>#BersamaMenggenggamMasaDepan</h1>
          </div>
          <a href="http://ristek.cs.ui.ac.id/" target="_blank">
            <div className="ristekPack">
              <h1>In Collaboration With</h1>
              <img src={Ristek} alt="Logo Ristek 2017" />
            </div>
          </a>
        </Foot>
      </Card>
    );
  }
}

Footer.propTypes = {

};

export default Footer;
