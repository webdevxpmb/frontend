import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  position: relative;
  z-index: 1000;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #ffffff;
  .nav-container{
    display: -webkit-flex;
    display: flex;
    padding: 0.75rem;
    margin: auto;
    position: relative;
    .tabs {
      width: 75%;
      margin: auto 0.5em;
      a {
        color: #004D40;
        border: 0;
        border-bottom: 3px solid #004D40;
        padding: 0.25em 0.5em;
        cursor: pointer;
        margin: 0 0.25em;
        text-decoration: none;
        transition: 0.3s;

        &:hover {
          border-color: #004D40;
        }
      }
    }
    .img-container {
      width: 40px;
      overflow: hidden;
      #pmb-nav-logo { width: 100%; }
    }
    #sso {
      position: absolute;
      right: 0.75rem;
      bottom:0.75rem;
      background-color: #FCE300;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      color: #ffffff;
      padding: 0.5rem;
      border-radius: 8px;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 840px) {
    width: 100%;
  }
`;

export default Nav;
