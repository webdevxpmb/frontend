/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Helmet from 'react-helmet';

import TokenModule from 'containers/TokenModule';
import LatestUpdatesModule from 'containers/LatestUpdatesModule';
import DateModule from 'containers/DateModule';

import {
  Home,
} from './styled';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const importantDays = [
      '2017-07-24T01:05:13+07:00',
      '2017-07-26T01:05:13+07:00',
      '2017-07-26T01:05:13+07:00',
      '2017-08-09T01:05:13+07:00',
    ];

    return (
      <Home>
        <Helmet
          title=""
          meta={[
            { name: 'description', content: 'PMB Fasilkom UI application' },
          ]}
        />
        <TokenModule />
        <LatestUpdatesModule />
        <DateModule days={importantDays} />
      </Home>
    );
  }
}
