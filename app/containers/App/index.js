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
import Navigation from 'components/Navigation';
import AnnouncementItem from 'components/AnnouncementItem';
import ProgressBar from 'components/ProgressBar';
import { theme } from './theme';

const AppWrapper = styled.div`
  margin: 0 auto;
  width: 100%:
  min-height: 100%;
  max-width: 1200px;
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
          <Navigation />
          <AnnouncementItem
            header="Halo"
            article="Lorem Lorem LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, vel? Architecto consectetur doloribus quo voluptas, officiis impedit ipsam incidunt voluptates accusantium error maxime eligendi magni consequatur ex id assumenda, veniam? Lorem Lorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem Lorem"
            publisher="Satria"
            date="20 September 2017"
            time="1:10 AM"
            countComment="9"
          />
          <AnnouncementItem
            header="Halo"
            article="Lorem Lorem LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, vel? Architecto consectetur doloribus quo voluptas, officiis impedit ipsam incidunt voluptates accusantium error maxime eligendi magni consequatur ex id assumenda, veniam? Lorem Lorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem Lorem"
            publisher="Satria"
            date="20 September 2017"
            time="1:10 AM"
            countComment="9"
          />
          <AnnouncementItem
            header="Halo"
            article="Lorem Lorem LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, vel? Architecto consectetur doloribus quo voluptas, officiis impedit ipsam incidunt voluptates accusantium error maxime eligendi magni consequatur ex id assumenda, veniam? Lorem Lorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem Lorem"
            publisher="Satria"
            date="20 September 2017"
            time="1:10 AM"
            countComment="9"
          />
          <AnnouncementItem
            header="Halo"
            article="Lorem Lorem LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem LoremLorem Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, vel? Architecto consectetur doloribus quo voluptas, officiis impedit ipsam incidunt voluptates accusantium error maxime eligendi magni consequatur ex id assumenda, veniam? Lorem Lorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem LoremLorem Lorem"
            publisher="Satria"
            date="20 September 2017"
            time="1:10 AM"
            countComment="9"
          />
          <ProgressBar />
          <ProgressBar />
          <ProgressBar />
          {React.Children.toArray(this.props.children)}
        </AppWrapper>
      </ThemeProvider>
    );
  }
}
