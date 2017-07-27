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

import Footer from 'components/Footer';
import Card from 'components/Card';

import TokenModule from 'containers/TokenModule';
import LatestUpdatesModule from 'containers/LatestUpdatesModule';
import DateModule from 'containers/DateModule';
import ForumModule from 'containers/ForumModule';
import WhatElementSaysModule from 'containers/WhatElementSaysModule';

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
        <div className="homeContent">
          <div className="leftColumn">
            <div className="calendar">
              <Card>
                <div className="container">
                  <h2 className="label">Server Time</h2>
                  <h1 className="serverTime">05:00</h1>
                  <h2 className="label">PMB Calendar</h2>
                  <DateModule days={importantDays} />
                </div>
              </Card>
            </div>
            <div className="whatElementSays">
              <Card>
                <WhatElementSaysModule />
              </Card>
            </div>
          </div>
          <div className="rightColumn">
            <Card>
              <ForumModule />
            </Card>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </Home>
    );
  }
}
