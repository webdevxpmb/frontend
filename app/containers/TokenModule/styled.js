import styled from 'styled-components';

export const Token = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 10rem 0;
  color: ${(props) => props.theme.white};
  background-image: ${(props) => props.theme.blueGradient};

  .tokenContent {
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
        font-size: 1.5rem;
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

    .tokenContent {
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
          font-size: 3rem;
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

  .tokenContent {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      text-align: center;
    }
    
    h6 {
      font-size: 0.9rem;
      margin-top: 2rem;
      text-align: center;
    }
    
    .non-sso button {
      &:hover {
        color: #2d587c;
      }
      
      border-bottom: 1px solid;
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

        &:disabled {
          opacity: 0.75;
        }
      }

      button {
        font-size: 1.5rem;
        font-weight: 700;
        margin-left: 2rem;
        background: ${(props) => props.theme.altDarkBlue};
        background-image: ${(props) => props.theme.darkBlueGradient};
        transition: ${(props) => props.theme.transitionBg};
        color: ${(props) => props.theme.white};
        padding: 1rem 1.5rem;
        border: none;
        border-radius: ${(props) => props.theme.borderRadius};
        box-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};

        &:disabled {
          opacity: 0.75;
        }

        &:hover {
          background: ${(props) => props.theme.darkBlue};
          transition: ${(props) => props.theme.transitionBg};
        }

        .icon-send {
          margin-right: 0.5rem;
        }
      }
    }
  }

  .kenalanOverlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.blue};
    background-image: ${(props) => props.theme.blueGradient};
    z-index: 1000;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    overflow: auto;

    .container {
      width: 100%;
      max-width: 1200px;
      padding: 2rem;

      h1 {
        font-size: 1rem;
        line-height: 1.25;
        opacity: 0.5;
        margin-bottom: 2rem;
      }

      h2 {
        font-size: 0.85rem;
        opacity: 0.75;
      }

      input,
      textarea {
        width: 100%;
        padding: 1rem 0 0.75rem;
        border-bottom: 0.1rem solid ${(props) => props.theme.ivory};
        margin-top: 1rem;

        &:disabled {
          font-size: 2rem;
          font-weight: 700;
          padding: 0;
          border: none;
          margin-bottom: -1rem;
        }
      }

      .submit {
        width: 100%;
        padding: 1rem 2rem;
        border-radius: ${(props) => props.theme.borderRadius};
        background: ${(props) => props.theme.darkBlue};
        background-image: ${(props) => props.theme.darkBlueGradient};
        box-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};
        font-weight: 700;
        font-size: 1.5rem;
        margin-top: 2rem;

        span {
          font-weight: 400;
          margin-right: 0.5rem;
        }
      }

      .cancel {
        width: 100%;
        margin-top: 1.5rem;
        font-size: 1rem;
        opacity: 0.75;

        span {
          font-weight: 400;
          margin-right: 0.5rem;
        }
      }

      .cancelationModal {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: rgba(33, 33, 33, 0.95);
        z-index: 2000;
        display: none;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-content: center;
        padding: 2rem;

        &.displayed {
          display: flex;
        }

        h2 {
          text-align: center;
          font-size: 1rem;
          margin-bottom: 2rem;
          width: 100%;
        }

        .cancelCancel {
          width: 100%;
          max-width: 1200px;
          padding: 1rem 2rem;
          border-radius: ${(props) => props.theme.borderRadius};
          background: ${(props) => props.theme.blue};
          background-image: ${(props) => props.theme.blueGradient};
          box-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};
          font-weight: 700;
          font-size: 1.5rem;
        }

        .confirmCancel {
          width: 100%;
          max-width: 1200px;
          margin-top: 1.5rem;
          font-size: 1rem;
          opacity: 0.75;
          text-decoration: underline;
          line-height: 1.5;
        }
      }
    }
  }

  .successOverlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.blue};
    background-image: ${(props) => props.theme.blueGradient};
    z-index: 1000;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    overflow: auto;

    .container {
      width: 100%;
      max-width: 1200px;
      padding: 2rem;

      h1 {
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 1.5;
        margin: 2rem 0;
      }

      h2 {
        font-size: 0.85rem;
        opacity: 0.75;
      }


      .finish {
        width: 100%;
        padding: 0.5rem 1rem;
        border-radius: ${(props) => props.theme.borderRadius};
        background: ${(props) => props.theme.darkBlue};
        background-image: ${(props) => props.theme.darkBlueGradient};
        box-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};
        font-size: 1rem;
        margin-top: 2rem;

        span {
          font-weight: 400;
          margin-right: 0.5rem;
        }
      }
    }
  }

  @media screen and (max-width: 64em) {
    padding: 5rem 2rem;

    .tokenContent {
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
