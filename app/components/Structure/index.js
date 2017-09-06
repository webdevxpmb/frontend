/**
*
* Structure
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import listStructure from './listStructure';
import Style from './style';

function Structure(props) {
  return (
    <div>
      <h2 className="text-center">{props.position}</h2>
      <div className="rounded-image">
        <img src={props.images} />
      </div>
      <h3 className="text-center">{props.name}</h3>
    </div>
  );
}

function Panitia(){
    return(
        <Style>
        {
            listStructure.map((item) => (
                <Structure images={item.images} name={item.name} position={item.position} />
            ))
        }
        </Style>
    );
}

Structure.propTypes = {
    'images': React.PropTypes.string.isRequired,
    'name' : React.PropTypes.string.isRequired,
    'position': React.PropTypes.string.isRequired,
};

export default Panitia;
