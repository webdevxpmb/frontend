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
    display: flex;
    flex-wrap: wrap;

    .profile {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      align-content: center;
      background: ${(props) => props.theme.blue};
      background-image: ${(props) => props.theme.blueGradient};

      .profileWrapper {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-content: center;

        .profileContent {
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          align-content: center;
          width: 100%;

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
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            width: 100%;
            overflow: hidden;
            position: relative;
            color: ${(props) => props.theme.white};

            input,
            textarea {
              border-bottom: 0.1rem solid ${(props) => props.theme.white};
            }

            input {
              padding: 0.5rem 1rem;
              margin: 0 1rem;
            }

            textarea {
              width: 100%;
              padding: 1rem 0;
            }

            h1 {
              font-size: 5rem;
              font-weight: 700;
              line-height: 1.25;
              margin-bottom: 1rem;
            }

            .importants {
              display: flex;
              flex-wrap: wrap;
              flex-direction: row;
              font-size: 1.25rem;
              line-height: 1.25;

              a {
                color: ${(props) => props.theme.white};
              }

              span {
                margin: 0 0.5rem 0 0;
              }

              .inputPack {
                width: calc(25% - 1rem);
                margin-right: 1rem;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;
                align-content: center;

                input {
                  width: calc(100% - 2.5rem);
                  margin: 0;
                }
              }
            }

            h2 {
              font-size: 1rem;
              margin-top: 1rem;
            }

            h3 {
              font-size: 1.5rem;
              opacity: 0.5;
            }

            p {
              margin-top: 1rem;
              font-size: 1rem;
              line-height: 1;
            }

            button {
              margin-top: 2rem;
              font-size: 1rem;

              &.save {
                padding: 0.5rem 2rem;
                border-radius: 3rem;
                font-size: 1.5rem;
                background: ${(props) => props.theme.white};
                color: ${(props) => props.theme.blue};
              }

              &.edit {
                font-size: 1.5rem;
              }

              span {
                margin-right: 0.5rem;
              }
            }
          }
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
      max-width: 1200px;
      position: absolute;
      bottom: 2rem;
    }
  }

  @media screen and (max-width: 64em) {
    .dashboardContent {
      .profile {
        position: relative;
        top: auto;
        bottom: auto;
        left: auto;
        right: auto;
        width: 100%;
        height: auto;

        .profileWrapper {
          padding: 6rem 0 2rem;

          .profileContent {
            padding: 2rem;
            width: 100%;

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
              input,
              textarea {
                border-bottom: 0.1rem solid ${(props) => props.theme.white};
              }

              input {
                padding: 0.5rem 1rem;
                margin: 1rem 0;
                width: 100%;
              }

              textarea {
                width: 100%;
                padding: 1rem 0;
              }

              h1 {
                font-size: 3rem;
                margin-bottom: 1rem;
              }

              h2 {
                margin-top: 2rem;
              }

              .importants {
                font-size: 1rem;
                line-height: 1.5;

                .inputPack {
                  width: 100%;
                  margin: 0.5rem 0;
                }
              }

              h3 {
                font-size: 1rem;
              }

              button {
                font-size: 1.25rem;
              }
            }
          }
        }
      }

      .footer {
        margin-top: 3rem;
        width: 100%;
        max-width: 1200px;
        position: relative;
        bottom: auto;
      }
    }
  }
`;
