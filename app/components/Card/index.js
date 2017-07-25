/**
*
* Card
*
*/

import React from 'react';

import {
  CardLayout,
} from './styled';

class Card extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <CardLayout radius={this.props.radius} smallRadius={this.props.smallRadius}>
        {React.Children.toArray(this.props.children)}
      </CardLayout>
    );
  }
}

Card.propTypes = {
  children: React.PropTypes.node,
  radius: React.PropTypes.string,
  smallRadius: React.PropTypes.string,
};

export default Card;
