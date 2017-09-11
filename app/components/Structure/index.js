/**
*
* Structure
*
*/

import React from 'react';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import listStructure from './listStructure';
import Style from './style';

function Structure(props) {
  return (
    <div>
      <h3 className="text-center">{props.position}</h3>
      <img className="rounded-image" src={props.images} alt="Foto Panitia PMB" />
      <h4 className="text-center">{props.name}</h4>
    </div>
  );
}

function Panitia() {
  return (
    <Style>
      <div className="kp-wkp">
        {
             listStructure.kpWkp.map((item) => (
               <Structure images={item.images} name={item.name} position={item.position} styleName={item.styleName} />
             ))
        }
      </div>
      <div className="sekre-benda">
        {
          listStructure.sekreBendahara.map((item) => (
            <Structure images={item.images} name={item.name} position={item.position} styleName={item.styleName} />
          ))
        }
      </div>
      <div className="pj">
        {
          listStructure.pj.map((item) => (
            <Structure images={item.images} name={item.name} position={item.position} styleName={item.styleName} />
          ))
        }
      </div>
    </Style>
  );
}

Structure.propTypes = {
  images: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  position: React.PropTypes.string.isRequired,
};

export default Panitia;
