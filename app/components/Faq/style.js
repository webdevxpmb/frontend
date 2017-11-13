import styled from 'styled-components';

const FAQ = styled.div`
  width: 100%;
  h1,h2,h3,h4,h5,h6 {
    font-family: "Montserrat";
    font-weight: bold;
  }

  .qa-item {
    margin: 1rem 0;

    .qa-li {
      width: 100%;
      display: flex;
      padding: 1rem;
      margin: 1rem 0;

      p { word-wrap: break-word; }
      .prefix {
        color: ${(props) => props.theme.tosca};
        margin-right: 0.5em;
        font-weight: bold;
      }
    }

    .answer {
      margin-left: 2rem;
    }
  }

  @media screen and (max-width: 40em) {
    padding: 1rem;
  }
`;

export default FAQ;
