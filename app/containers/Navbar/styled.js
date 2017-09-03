import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  max-width: 1200px;
  z-index: 1000;
  padding: 0;
  color: ${(props) => props.theme.black};
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);

  .navbarContent {
    width: 100%;
    height: 3rem;
    padding: 0 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;

    &.showForLarge {
      display: flex;
    }

    &.hideForLarge {
      display: none;
    }

    .logoSet {
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      .logo {
        width: 5rem;
        height: 5rem;
        background: ${(props) => props.theme.white};
        border-radius: 5rem;
        box-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};
        position: relative;
        z-index: 100;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .dpm {
        width: 7rem;
        padding: 0.5rem 1rem 0.5rem 2rem;
        margin-left: -2rem;
        border-radius: ${(props) => props.theme.borderRadius};
        background: ${(props) => props.theme.white};
        box-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .navigations {
      .link,
      .dashboard,
      .logout {
        margin-left: 1rem;
        font-size: 1rem;
        font-weight: 700;
      }

      .link {
        transition: ${(props) => props.theme.transitionColor};

        &:hover {
          color: ${(props) => props.theme.blue};
          transition: ${(props) => props.theme.transitionColor};
        }
      }

      .dashboard,
      .logout {
        box-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};
      }

      .dashboard {
        color: ${(props) => props.theme.white};
        background: ${(props) => props.theme.altBlue};
        background-image: ${(props) => props.theme.blueGradient};
        transition: ${(props) => props.theme.transitionBg};
        padding: 0.5rem 1rem;
        border-radius: ${(props) => props.theme.borderRadius};

        &:hover {
          background: ${(props) => props.theme.blue};
          transition: ${(props) => props.theme.transitionBg};
        }
      }

      .logout {
        color: ${(props) => props.theme.white};
        background: ${(props) => props.theme.altOrange};
        background-image: ${(props) => props.theme.orangeGradient};
        padding: 0.5rem 1rem;
        border-radius: ${(props) => props.theme.borderRadius};

        &:hover {
          background: ${(props) => props.theme.orange};
          transition: ${(props) => props.theme.transitionBg};
        }
      }
    }
  }

  @media screen and (max-width: 64em) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    transform: none;

    .navbarContent {
      width: 100%;
      height: 3rem;
      padding: 0 2rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      align-content: center;

      &.showForLarge {
        display: none;
      }

      &.hideForLarge {
        display: flex;
      }

      .logoSet {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-top: 1rem;

        .logo {
          width: 4rem;
          height: 4rem;
          border-radius: 4rem;
        }

        .dpm {
          padding: 0.5rem 0.5rem 0.5rem 2.5rem;
        }
      }

      .link {
        width: auto;
        font-size: 2rem;
        font-weight: 700;
        color: ${(props) => props.theme.blue};
        transition: ${(props) => props.theme.transitionColor};

        &:hover {
          color: ${(props) => props.theme.altBlue};
          transition: ${(props) => props.theme.transitionColor};
        }
      }
    }
  }
`;
