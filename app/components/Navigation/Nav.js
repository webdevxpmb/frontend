import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  position: relative;
  z-index: 1000;
  margin: 0 0;
  padding: 0.75rem;
  background-color: #004D40;

  a {
    color: #ffffff;
    border-radius: 3rem;
    border: 3px solid #004D40;
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
