/**
*
* ProfileCard
*
*/

import React from 'react';
// import styled from 'styled-components';
import Card from 'components/Card';

import {
  Link,
  Name,
  ShortPar,
} from './styled';

class ProfileCard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      	<Card radius="bottom">
      	  <Name> Citra Glory </Name>
          <Link>Ubah profil</Link>
          <ShortPar> asdklamsdklamsdklasmdl </ShortPar>
        </Card>
    );
  }
}

ProfileCard.propTypes = {

};

export default ProfileCard;
