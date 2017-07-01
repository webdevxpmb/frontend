/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Navigation from 'components/Navigation';
import NewsItem from 'components/NewsItem';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 0;
  flex-direction: column;
`;

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - PMB Fasilkom UI 2017"
          defaultTitle="PMB Fasilkom UI 2017"
          meta={[
            { name: 'description', content: 'PMB Fasilkom UI application' },
          ]}
        />
        <Navigation />
        <div className="main-profile">

        </div>
        {React.Children.toArray(this.props.children)}
        <div className="main-info">

        </div>
      </AppWrapper>
    );
  }
}
