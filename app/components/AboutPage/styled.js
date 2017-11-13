import styled from 'styled-components';

const Style = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-image: ${(props) => props.theme.blueGradient};

  .content {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 6rem 0 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    
    .title {
      margin: 1em 0;
      font-weight: bold;
      font-family: "Montserrat";
      color: ${(props) => props.theme.tosca};
    }

    .footer {
      margin-top: 2rem;
      width: 100%;
    }
  }

  @media screen and (max-width: 40em) {
    padding: 3rem 1rem;
    .title {
      margin: 2rem auto;
    }

    .content {
      padding: 1rem 0 2rem;
    }
  }
`;

export default Style;
