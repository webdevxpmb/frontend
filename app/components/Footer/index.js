/**
*
* Footer
*
*/

import React from 'react';
// import styled from 'styled-components';

import Card from 'components/Card';

import {
  Foots,
  Text,
} from './styled';

class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
    	<Foots>
    		<Card radius="bottom">
    			<Text> PMB 2017 By Faridah Nur Suci </Text>
	    	</Card>
  		</Foots>
    );
  }
}

Footer.propTypes = {

};

export default Footer;