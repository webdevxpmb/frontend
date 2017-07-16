/**
*
* StatistikMaba
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ProgressBar from '../ProgressBar/';
import Card from '../Card';
import {
  CardItem
} from './styled';
import Title from '../Title/';

class StatistikMaba extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Title text="Statistik" />
        <Card>
            <CardItem>
                  <ProgressBar title='Kehadiran' currentProgress='9' maxProgress="10" />
                  <ProgressBar title='Tugas' currentProgress='8' maxProgress="10" />
                  <ProgressBar title='Teman Angklung' currentProgress='10' maxProgress="20" />
                  <ProgressBar title='Teman Orion' currentProgress='98' maxProgress="100" />
                  <ProgressBar title='Teman Capung' currentProgress='150' maxProgress="200" />
                  <ProgressBar title='Teman Omega' currentProgress='120' maxProgress="200" />
            </CardItem>
        </Card>
      </div>

    );
  }
}

StatistikMaba.propTypes = {

};

export default StatistikMaba;
