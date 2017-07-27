import styled from 'styled-components';

const Contact = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme.tosca};
  h1,h2,h3,h4,h5,h6 {
    font-family: "Montserrat";
    font-weight: bold;
  }
  @media screen and (max-width: 40em) {
    padding: 1rem;
  }
`;

export default Contact;
