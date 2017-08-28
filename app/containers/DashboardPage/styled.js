import styled from 'styled-components';

export const Dashboard = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;

  .profile {
    width: 100%;
    height: auto;
    min-height: 100vh;
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
      padding: 10rem 0 16rem;

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
              box-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};
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

  .dashboardContent {
    width: 100%;
    max-width: 1200px;
    margin: -12rem auto 0;
    display: flex;
    flex-wrap: wrap;

    .friendlist {
      width: 100%;

      .sectionHeading {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        align-content: center;

        .pagination {
          color: ${(props) => props.theme.white};
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          align-content: center;

          button {
            opacity: 0.75;

            &:hover,
            &:focus,
            &:disabled {
              opacity: 1;
            }

            &:disabled {
              font-weight: 700;
            }
          }

          .central {
            margin: 0 0.5rem;
          }
        }

        .searchBox {
          width: 100%;
          margin-top: 0.5rem;

          input {
            width: 100%;
            padding: 1rem 2rem;
            background: ${(props) => props.theme.white};
            border-radius: ${(props) => props.theme.borderRadius};
            box-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};
          }
        }

        h1 {
          flex: 1;
          font-size: 1.5rem;
          color: ${(props) => props.theme.ivory};
        }
      }

      .friendCard {
        margin: 2rem 0 0;
      }

      .friend {
        width: 100%;
        padding: 2rem;
        color: ${(props) => props.theme.darkGray};

        h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          color: ${(props) => props.theme.black};
        }

        .importants,
        h2 {
          font-size: 1rem;

          a {
            color: ${(props) => props.theme.blue};
          }

          span {
            margin: 0 0.5rem 0 0;
          }
        }

        .importants {
          margin-bottom: 0.5rem;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: center;
          align-content: center;
        }

        h2 {
          margin-bottom: 1rem;
        }

        .detailKenalan {
          margin-top: 1rem;

          h6 {
            font-size: 0.95rem;
            color: ${(props) => props.theme.lightGray};
            margin-bottom: 0.5rem;
          }

          h3 {
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
            color: ${(props) => props.theme.gray};

            span {
              font-weight: 700;
              text-transform: capitalize;
            }

            .pending {
              color: ${(props) => props.theme.yellow};
            }

            .approved {
              color: ${(props) => props.theme.green};
            }

            .rejected {
              color: ${(props) => props.theme.red};
            }
          }

          h4 {
            font-size: 0.9rem;
            margin: 0.25rem 0;
            color: ${(props) => props.theme.darkGray};

            span {
              color: ${(props) => props.theme.gray};
            }

            .icon-phone {
              margin-right: 0.5rem;
            }
          }

          h5 {
            font-size: 1rem;
            line-height: 1.5;
            margin-top: 0.5rem;
            color: ${(props) => props.theme.darkGray};
          }

          .actions {
            margin: 1rem 0 0;

            button {
              margin-right: 1rem;
              padding: 0.5rem 1rem;
              border-radius: 2rem;
              box-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};
              color: ${(props) => props.theme.white};

              span {
                margin-right: 0.5rem;
              }
            }

            .edit {
              background: ${(props) => props.theme.altBlue};
              background-image: ${(props) => props.theme.blueGradient};

              &:hover {
                background: ${(props) => props.theme.blue};
                transition: ${(props) => props.theme.transitionBg};
              }
            }

            .approve {
              background: ${(props) => props.theme.green};
              background-image: ${(props) => props.theme.greenGradient};

              &:hover {
                background: ${(props) => props.theme.altGreen};
                transition: ${(props) => props.theme.transitionBg};
              }
            }

            .reject {
              background: ${(props) => props.theme.altRed};
              background-image: ${(props) => props.theme.redGradient};

              &:hover {
                background: ${(props) => props.theme.red};
                transition: ${(props) => props.theme.transitionBg};
              }
            }
          }
        }
      }
    }

    .footer {
      margin: 2rem 0;
      width: 100%;
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
    color: ${(props) => props.theme.ivory};
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
        background: ${(props) => props.theme.green};
        background-image: ${(props) => props.theme.greenGradient};
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

  .statusConfirmOverlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(33, 33, 33, 0.75);
    z-index: 2000;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 2rem;

    .confirmBox {
      padding: 1rem;
      width: 100%;
      max-width: 600px;
      background: ${(props) => props.theme.ivory};
      box-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};
      border-radius: ${(props) => props.theme.borderRadius};

      h1 {
        font-size: 1rem;
        text-align: center;
        color: ${(props) => props.theme.gray};

        span {
          text-transform: capitalize;
          font-weight: 700;

          &.approve {
            color: ${(props) => props.theme.green};
          }

          &.reject {
            color: ${(props) => props.theme.altRed};
          }
        }
      }

      .actions {
        margin: 1rem 0 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        align-content: center;

        button {
          width: calc(50% - 0.5rem);
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          box-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};
          color: ${(props) => props.theme.white};

          span {
            margin-right: 0.5rem;
          }
        }

        .edit {
          background: ${(props) => props.theme.altBlue};
          background-image: ${(props) => props.theme.blueGradient};

          &:hover {
            background: ${(props) => props.theme.blue};
            transition: ${(props) => props.theme.transitionBg};
          }
        }

        .approve {
          background: ${(props) => props.theme.green};
          background-image: ${(props) => props.theme.greenGradient};

          &:hover {
            background: ${(props) => props.theme.altGreen};
            transition: ${(props) => props.theme.transitionBg};
          }
        }

        .reject {
          background: ${(props) => props.theme.altRed};
          background-image: ${(props) => props.theme.redGradient};

          &:hover {
            background: ${(props) => props.theme.red};
            transition: ${(props) => props.theme.transitionBg};
          }
        }
      }
    }
  }

  @media screen and (max-width: 64em) {
    .profile {
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
              font-size: 1rem;

              &.save {
                font-size: 1.25rem;
              }
            }
          }
        }
      }
    }

    .dashboardContent {
      margin: 0 auto;

      .friendlist {
        margin-top: 2rem;
        width: 100%;

        .sectionHeading {
          margin-bottom: 1rem;
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          align-content: center;

          .pagination {
            margin-right: 2rem;
            color: ${(props) => props.theme.darkGray};
          }

          .searchBox {
            input {
              background: ${(props) => props.theme.white};
            }
          }

          h1 {
            font-size: 1.25rem;
            margin-left: 2rem;
            color: ${(props) => props.theme.black};
          }
        }
      }

      .footer {
        margin-top: 2rem;
        width: 100%;
        max-width: 1200px;
        position: relative;
        bottom: auto;
      }
    }
  }
`;
