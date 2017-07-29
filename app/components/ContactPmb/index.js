/**
*
* ContactPmb
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import Card from 'components/Card';
import Contact from './Contact';

function ContactPmb() {
  return (
    <Card>
      <Contact>
        <ul>
          <li>
            Grace Angelica:
            <ul>
              <li>HP: +6289628752338</li>
              <li>LINE: grcanglc</li>
            </ul>
          </li>
          <br />
          <li>
            Wilda Septiani:
            <ul>
              <li>HP: +6289618469501</li>
              <li>LINE: queenstar1</li>
            </ul>
          </li>
        </ul>
      </Contact>
    </Card>
  );
}

ContactPmb.propTypes = {

};

export default ContactPmb;
