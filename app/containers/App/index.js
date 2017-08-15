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
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

import { createStructuredSelector } from 'reselect';
import makeSelectGlobal from 'globalSelectors';

import {
  fetchServerTime,
  setServerTime,
} from 'globalActions';

import OffsideMenu  from 'components/OffsideMenu';
import Navbar from 'containers/Navbar';

import { theme } from './theme';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

const AppLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 100000;
  background: ${(props) => props.theme.blue};
  background-image: ${(props) => props.theme.blueGradient};
  color: ${(props) => props.theme.white};
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  h1 {
    font-size: 1rem;
  }
`;

const moment = window.moment;

export class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    children: React.PropTypes.node,
    Global: React.PropTypes.object,
    fetchServerTime: React.PropTypes.func,
    setServerTime: React.PropTypes.func,
  };

  constructor() {
    super();

    this.state = {
      offside: false,
    };

    this.toggleOffside = this.toggleOffside.bind(this);
  }

  componentDidMount() {
    if (this.props.Global.loggedIn) {
      this.props.fetchServerTime();
    }

    setInterval(() => {
      if (this.props.Global.serverTime) {
        this.props.setServerTime(this.timeIterator(this.props.Global.serverTime));
      }
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.Global.loggedIn && this.props.Global.loggedIn) {
      this.props.fetchServerTime();
    }
  }

  timeIterator(serverTime) {
    const currentTime = new moment(serverTime);

    currentTime.add(1, 's');

    return currentTime.toISOString();
  }

  toggleOffside() {
    this.setState({
      offside: !this.state.offside,
    });
  }

  render() {
    let renderNavbar = true;

    if (window.location.pathname.startsWith('/login')) {
      renderNavbar = false;
    }

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
          {
            this.props.Global.currentlySending &&
            <AppLoader>
              <div className="spinner">
                <div className="dot1" />
                <div className="dot2" />
              </div>
              <h1>Loading</h1>
            </AppLoader>
          }
          {
            renderNavbar &&
            <OffsideMenu display={this.state.offside} toggleOffside={this.toggleOffside} />
          }
          {
            renderNavbar &&
            <Navbar toggleOffside={this.toggleOffside} />
          }
          {React.Children.toArray(this.props.children)}
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  Global: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchServerTime: () => dispatch(fetchServerTime()),
    setServerTime: (serverTime) => dispatch(setServerTime(serverTime)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
