/*
*
* InputForm
*
*/

import styled from 'styled-components';

const InputForm = styled.input`
  border-radius: 3rem;
  border: 3px solid #3F51B5;
  padding: 0.5em;
  width: 25%;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export default InputForm;
