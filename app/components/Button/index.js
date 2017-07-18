/**
*
* Button
*
*/

import styled from 'styled-components';

const Button = styled.button`
  border-radius: 3rem;
  background-color: #3278C8;
  color: white;
  padding: 0.5em 0.75em;
  cursor: pointer;

  &:active{
    background-color: #17385D;
  }
`;

export default Button;
