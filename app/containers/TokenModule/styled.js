import styled from 'styled-components';

export const Token = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 10rem 0;
  color: ${(props) => props.theme.white};
  background-image: ${(props) => props.theme.blueGradient};

  .content {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;

    .token {
      margin-bottom: 2rem;

      .textPack {
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        .icon-token {
          font-weight: 400;
          font-size: 6rem;
          margin-right: 1rem;
        }
      }

      h1 {
        font-weight: 700;
        font-size: 8rem;
        line-height: 1;
        text-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};
      }

      h3 {
        font-size: 1rem;
        margin-bottom: 1rem;
      }
    }

    .progress {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-end;

      .icon-time {
        font-weight: 400;
        font-size: 3rem;
        margin-right: 1rem;
        text-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};
      }

      h1 {
        font-weight: 700;
        font-size: 3rem;
        text-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};
      }

      h3 {
        font-size: 1rem;
        margin-right: 0.5rem;
      }

      .bar {
        width: 100%;
        height: 0.5rem;
        position: relative;

        .current {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: ${(props) => props.progress}%;
          height: 100%;
          border-radius: 0.25rem;
          background: ${(props) => props.theme.white};
        }

        .max {
          width: 100%;
          height: 100%;
          border-radius: 0.25rem;
          background: ${(props) => props.theme.white};
          box-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};
          opacity: 0.5;
        }
      }
    }
  }

  @media screen and (max-width: 64em) {
    padding: 5rem 2rem;

    .content {
      .token {
        margin-bottom: 2rem;

        .textPack {
          .icon-token {
            font-size: 3rem;
            margin-right: 0.5rem;
          }
        }

        h1 {
          font-weight: 700;
          font-size: 4rem;
          line-height: 1;

          .icon-token {
            font-weight: 400;
            font-size: 2rem;
          }
        }

        h3 {
          font-size: 1rem;
          margin: 0 0 1rem;
        }
      }

      .progress {
        .bar {
          margin-bottom: 1rem;
        }

        .icon-time {
          font-size: 2rem;
          margin-right: 0.5rem;
        }

        h1 {
          font-weight: 700;
          font-size: 2rem;
        }

        h3 {
          font-size: 1rem;
          margin-right: 0.5rem;
        }
      }
    }
  }
`;

export const TokenForm = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 10rem 0;
  color: ${(props) => props.theme.white};
  background-image: ${(props) => props.theme.blueGradient};

  .content {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 2rem;
      margin-bottom: 2rem;
      text-align: center;
    }

    .form {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: stretch;
      align-content: center;

      .input {
        flex: 1;
        font-size: 1rem;
        background: ${(props) => props.theme.white};
        color: ${(props) => props.theme.black};
        padding: 1rem 2rem;
        border: none;
        border-radius: ${(props) => props.theme.borderRadius};
        box-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};
      }

      button {
        font-size: 1.5rem;
        font-weight: 700;
        margin-left: 2rem;
        background: ${(props) => props.theme.altGreen};
        background-image: ${(props) => props.theme.greenGradient};
        transition: ${(props) => props.theme.transitionBg};
        color: ${(props) => props.theme.white};
        padding: 1rem 1.5rem;
        border: none;
        border-radius: ${(props) => props.theme.borderRadius};
        box-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};

        &:hover {
          background: ${(props) => props.theme.green};
          transition: ${(props) => props.theme.transitionBg};
        }

        .icon-send {
          margin-right: 0.5rem;
        }
      }
    }
  }

  @media screen and (max-width: 64em) {
    padding: 5rem 2rem;

    .content {
      h1 {
        font-size: 1rem;
        margin-bottom: 2rem;
        text-align: center;
      }

      .form {
        justify-content: center;
        align-items: center;

        .input {
          flex: none;
          width: 100%;
          text-align: center;
        }

        button {
          font-size: 1rem;
          font-weight: 700;
          margin-left: 0;
          margin-top: 1rem;
        }
      }
    }
  }
`;
