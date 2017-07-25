import styled from 'styled-components';

export const LatestUpdates = styled.div`
  position: relative;
  z-index: 100;
  max-width: 1200px;
  margin: -7rem auto 0;

  .content {
    padding: 0 2rem 1rem;

    .title {
      height: 3rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;

      h1 {
        font-size: 1rem;
        color: ${(props) => props.theme.lightGray};
        margin: 0;
      }

      .icon-down {
        font-size: 1rem;
        color: ${(props) => props.theme.lightGray};
        margin: 0;
      }
    }

    .updates {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
      align-items: stretch;

      .border {
        width: 0.1rem;
        background: ${(props) => props.theme.ultraLightGray};
      }

      .updatesCard {
        width: 30%;
        padding: 1rem 0;

        h1 {
          color: ${(props) => props.theme.black};
          font-weight: 700;
          font-size: 2rem;
        }

        .date {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          margin-bottom: 0.5rem;

          .icon-event {
            color: ${(props) => props.theme.gray};
            font-size: 1.5rem;
            margin-right: 0.5rem;
          }

          h2 {
            color: ${(props) => props.theme.darkGray};
            font-size: 1rem;
          }
        }

        p {
          font-size: 1rem;
          line-height: 1.25;
          color: ${(props) => props.theme.darkGray};
          margin: 0 0 1rem;
        }

        button {
          font-size: 1rem;
          padding: 0.5rem 1rem;
          color: ${(props) => props.theme.white};
          background: ${(props) => props.theme.altBlue};
          background-image: ${(props) => props.theme.blueGradient};
          transition: ${(props) => props.theme.transitionBg};
          border-radius: ${(props) => props.theme.borderRadius};

          &:hover {
            background: ${(props) => props.theme.blue};
            transition: ${(props) => props.theme.transitionBg};
          }

          .icon-send {
            margin-right: 0.5rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 64em) {
    margin-top: -3rem;

    .content {
      .updates {
        flex-direction: column;

        .border {
          width: auto;
          height: 0.1rem;
        }

        .updatesCard {
          width: 100%;
        }
      }
    }
  }
`;
