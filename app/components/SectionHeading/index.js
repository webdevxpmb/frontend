/**
*
* SectionHeading
*
*/

import React from 'react';

import {
  Heading,
} from './styled';


class SectionHeading extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Heading>
        {this.props.children}
      </Heading>
    );
  }
}

SectionHeading.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default SectionHeading;
