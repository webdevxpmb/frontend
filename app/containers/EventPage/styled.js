import styled from 'styled-components';

export const Event = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;

  .eventContent {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 7rem 0 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;

    .footer {
      margin-top: 2rem;
      width: 100%;
    }
  }

  @media screen and (max-width: 64em) {
    .eventContent {
      padding: 4rem 0 2rem;
    }
  }
`;
