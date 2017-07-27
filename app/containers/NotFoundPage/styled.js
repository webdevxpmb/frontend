import styled from 'styled-components';

export const FourOFour = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 10rem 0;
  color: ${(props) => props.theme.white};
  background-image: ${(props) => props.theme.blueGradient};

  .fourOFourContent {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 6rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    h2 {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 64em) {
    .fourOFourContent {
      padding: 2rem;

      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1rem;
      }
    }
  }
`;
