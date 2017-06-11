import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  position: relative;
  z-index: 1000;
  margin: 0 0;
  padding: 0.75rem;
  background-color: #0e3b49;

  a {
    color: #ffffff;
    border-radius: 50px;
    border: 3px solid #0e3b49;
    padding: 0.25em 0.5em;
    cursor: pointer;
    margin: 0 0.25em;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      border-color: #ffffff;
    }
  }
`;

export default Nav;
