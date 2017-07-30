import styled from 'styled-components';

const Style = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;

  .content {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 7rem 0 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
  }

  @media screen and (max-width: 960px) {
    .content {
      padding: 4rem 0 1rem;
    }
  }
`;

export default Style;
