/**
*
* Faq
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Faq() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Faq.propTypes = {

};

export default Faq;
