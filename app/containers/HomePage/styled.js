import styled from 'styled-components';

export const Home = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;

  .homeContent {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;

    .footer {
      margin-top: 2rem;
      width: 100%;
    }

    .rightColumn,
    .leftColumn {
      display: flex;
      flex-align: column;
      flex-wrap: wrap;
    }

    .rightColumn {
      width: 30%;
      justify-content: stretch;
      align-items: stretch;
      align-content: stretch;
    }

    .leftColumn {
      width: calc(70% - 2rem);
      align-items: stretch;
    }

    .sidebar {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      width: 100%;
    }

    .calendar {
      width: 100%;
      margin-bottom: 2rem;

      .label {
        font-size: 1rem;
        color: ${(props) => props.theme.gray};
        margin: 0 0 1rem;
        line-height: 1;
      }

      .serverTime {
        font-size: 3.5rem;
        font-weight: 700;
        color: ${(props) => props.theme.black};
        margin: 0 0 0.5rem;
        line-height: 1;
      }

      .serverDate {
        font-size: 1rem;
        color: ${(props) => props.theme.darkGray};
        margin: 0 0 2rem;
        line-height: 1;
      }

      .container {
        padding: 2rem;
      }
    }

    .announcements {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      color: ${(props) => props.theme.gray};

      .sectionTitle {
        font-size: 1rem;
        margin: 0 0 1rem;
        font-wiegh: 700;
        width: 100%;
      }

      .empty {
        color: ${(props) => props.theme.lightGray};
      }
    }
  }

  @media screen and (max-width: 64em) {
    .homeContent {
      .rightColumn {
        width: 100%;
        margin-bottom: 2rem;
      }

      .leftColumn {
        width: 100%;
      }

      .announcements {
        .sectionTitle,
        .empty {
          margin-left: 2rem;
          margin-right: 2rem;
        }

        .empty {
          margin-bottom: 2rem;
        }
      }
    }
  }
`;
