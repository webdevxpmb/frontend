/**
*
* Structure
*
*/

import React from 'react';
import Card from 'components/Card';
import data from './data';
import Style from './style';

function Structure(props) {
  return (
    <div className="structure-list">
      <Card>
        <h3 className="text-center">{props.position}</h3>
      </Card>
      <img className="rounded-image" src={props.images} alt="Foto Panitia PMB" />
      <h4 className="text-center name">{props.name}</h4>
    </div>
  );
}

function Panitia() {
  return (
    <Style>
      <div className="kp-wkp">
        {
             data.kpWkp.map((item) => (
               <Structure images={item.images} name={item.name} position={item.position} styleName={item.styleName} />
             ))
        }
      </div>
      <div className="sekre-benda">
        {
          data.sekreBendahara.map((item) => (
            <Structure images={item.images} name={item.name} position={item.position} styleName={item.styleName} />
          ))
        }
      </div>
      <div className="pj">
        {
          data.pj.map((item) => (
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
