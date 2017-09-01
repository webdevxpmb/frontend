import styled from 'styled-components';

export const Login = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.yellow};
  position: relative;

  .loginContainer {
    position: relative;
    z-index: 10;
    width: 100%;
    height: 100%;
    max-width: 1200px;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    color: ${(props) => props.theme.black};

    h1 {
      margin: 0;
      line-height: 1;
      font-weight: 700;
      font-size: 6rem;
    }

    h2 {
      margin-bottom: 0;
      font-weight: 700;
      opacity: 0.5;
      color: ${(props) => props.theme.ivory};
    }

    .loginButton {
      color: ${(props) => props.theme.black};
      background: ${(props) => props.theme.altYellow};
      border-radius: ${(props) => props.theme.borderRadius};
      box-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};
      transition: ${(props) => props.theme.transitionColor}, ${(props) => props.theme.transitionBg};
      font-weight: 700;
      font-size: 2rem;
      padding: 1rem 2rem;
      margin-top: 2rem;

      &:hover {
        color: ${(props) => props.theme.yellow};
        background: ${(props) => props.theme.ivory};
        transition: ${(props) => props.theme.transitionColor}, ${(props) => props.theme.transitionBg};
      }
    }

    .ristek {
      position: absolute;
      bottom: 2rem;
      right: 0;
      z-index: 5;
      color: ${(props) => props.theme.black};

      h3 {
        font-size: 1rem;
        margin-bottom: 0.25rem;
        text-align: right;
      }

      img {
        padding: 1rem 2rem;
        height: 5rem;
        width: auto;
        background: ${(props) => props.theme.altYellow};
        border-radius: ${(props) => props.theme.borderRadius};
        box-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};
        transition: ${(props) => props.theme.transitionColor}, ${(props) => props.theme.transitionBg}, ${(props) => props.theme.transitionOpacity};
        opacity: 0.75;

        &:hover {
          background: ${(props) => props.theme.altYellow};
          transition: ${(props) => props.theme.transitionColor}, ${(props) => props.theme.transitionBg}, ${(props) => props.theme.transitionOpacity};
          opacity: 1;
        }
      }
    }
  }

  .bg {
    position: absolute;
    width: 100%;
    height: 100%:
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    overflow: hidden;

    .container {
      position: relative;
      width: 100%;
      height: 100vh;

      img {
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate(25%, 25%);
        filter: grayscale(100%);
        opacity: 0.3;
      }
    }
  }

  @media screen and (max-width: 64em) {
    .loginContainer {
      padding: 2rem;

      h1 {
        font-size: 2rem;
      }

      .loginButton {
        font-size: 1.5rem;
        margin-top: 1rem;
      }

      .ristek {
        right: 2rem;
        color: ${(props) => props.theme.black};

        h3 {
          font-size: 0.8rem;
        }

        img {
          width: 10rem;
          height: auto;
          padding: 0.5rem 1rem;
        }
      }
    }
  }
`;
