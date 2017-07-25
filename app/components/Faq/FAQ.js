import styled from 'styled-components';

const FAQ = styled.div`
  padding: 2rem;
  margin: 2rem 0;
  color: ${(props) => props.theme.tosca};
  h1,h2,h3,h4,h5,h6 {
    font-family: "Montserrat";
    font-weight: bold;
  }

  .qa-item {
    margin: 0.5em;
    
    .cyan-item {
      color: ${(props) => props.theme.cyan};
    }
  }

  @media screen and (max-width: 40em) {
    padding: 1rem;
  }
`;

export default FAQ;
