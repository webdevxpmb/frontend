/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import {
  FourOFour,
} from './styled';

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <FourOFour>
        <div className="fourOFourContent">
          <h1>Oh no, you{"'"}re lost</h1>
          <h2>We{"'"}ve been looking for your request everywhere, its not here.</h2>
        </div>
      </FourOFour>
    );
  }
}
