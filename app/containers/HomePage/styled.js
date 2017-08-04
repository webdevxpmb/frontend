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

    .leftColumn,
    .rightColumn {
      display: flex;
      flex-align: column;
      flex-wrap: wrap;
    }

    .leftColumn {
      width: 30%;
      justify-content: stretch;
      align-items: stretch;
      align-content: stretch;
    }

    .rightColumn {
      width: calc(70% - 2rem);
      align-items: stretch;
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
        font-size: 4rem;
        font-weight: 700;
        color: ${(props) => props.theme.black};
        margin: 0 0 2rem;
        line-height: 1;
      }

      .container {
        padding: 2rem;
      }
    }
  }

  @media screen and (max-width: 64em) {
    .homeContent {
      .leftColumn {
        width: 100%;
        margin-bottom: 2rem;
      }

      .rightColumn {
        width: 100%;
      }

    }
  }
`;
