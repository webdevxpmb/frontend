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
import styled, { ThemeProvider } from 'styled-components';
import Navbar from 'containers/Navbar';

import { theme } from './theme';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <Helmet
            titleTemplate="%s - PMB Fasilkom UI 2017"
            defaultTitle="PMB Fasilkom UI 2017"
            meta={[
              { name: 'description', content: 'PMB Fasilkom UI application' },
            ]}
          />
          <Navbar />
          {React.Children.toArray(this.props.children)}
        </AppWrapper>
      </ThemeProvider>
    );
  }
}
