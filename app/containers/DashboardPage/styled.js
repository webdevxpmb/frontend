import styled from 'styled-components';

export const Dashboard = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;

  .dashboardContent {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 6rem 0 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;

    .profile {
      padding: 2rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      align-content: center;

      .picture {
        width: 10rem;
        height: 10em;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: ${(props) => props.theme.borderRadius};
        }
      }

      .data {
        flex: 1;
        padding: 0 0 0 2rem;

        h1 {
          font-size: 2rem;
          font-weight: 700;
          line-height: 1.25;
          color: ${(props) => props.theme.black};
        }

        h2 {
          font-size: 1rem;
          line-height: 1.25;
          color: ${(props) => props.theme.darkGray};
        }

        p {
          margin-top: 1rem;
          font-size: 0.9rem;
          line-height: 1;
          color: ${(props) => props.theme.gray};
        }
      }
    }

    .stats {
      padding: 2rem;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;

      .progress {
        margin: 1rem 0;
      }
    }

    .friends {
      padding: 2rem;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;

      .searchModule {
        width: 100%;
        padding-bottom: 1rem;
        border-bottom: 0.1rem solid ${(props) => props.theme.ultraLightGray};

        input {
          width: 100%;
          padding: 1rem 2rem;
          background: ${(props) => props.theme.ultraLightGray};
          border-radius: ${(props) => props.theme.borderRadius};
        }
      }

      .friendList {
        .friendItem {
          padding: 2rem 0;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          align-content: center;
          border-bottom: 0.1rem solid ${(props) => props.theme.ultraLightGray};

          .picture {
            width: 5rem;
            height: 5em;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: ${(props) => props.theme.borderRadius};
            }
          }

          .data {
            flex: 1;
            padding: 0 0 0 2rem;

            h1 {
              font-size: 1.5rem;
              font-weight: 700;
              line-height: 1.25;
              color: ${(props) => props.theme.black};
            }

            h2 {
              font-size: 1rem;
              line-height: 1.25;
              color: ${(props) => props.theme.darkGray};
            }

            p {
              margin-top: 0.5rem;
              font-size: 0.9rem;
              line-height: 1;
              color: ${(props) => props.theme.gray};
            }
          }
        }
      }
    }

    .footer {
      margin-top: 2rem;
      width: 100%;
    }
  }

  @media screen and (max-width: 64em) {
    .dashboardContent {
      padding: 4rem 0 2rem;

      .profile {
        justify-content: flex-start;

        .picture {
          width: 10rem;
          height: 10rem;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: ${(props) => props.theme.borderRadius};
          }
        }

        .data {
          flex: none;
          width: 100%;
          padding: 0;
          margin-top: 2rem;

          h2 {
            margin-top: 0.5rem;
          }

          p {
            line-height: 1.25;
          }
        }
      }
    }
  }
`;
