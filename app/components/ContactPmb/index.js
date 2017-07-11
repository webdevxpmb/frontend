/**
*
* ContactPmb
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ContactPmb() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ContactPmb.propTypes = {

};

export default ContactPmb;
