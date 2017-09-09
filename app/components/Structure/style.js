import styled from 'styled-components';

const Style = styled.div`
  color: ${(props) => props.theme.tosca};
    h1,h2,h3,h4,h5,h6 {
    font-family: "Montserrat";
    font-weight: bold;
  }

  .rounded-image {
    border-radius : 50%;
    overflow : hidden;
    &:img {
      width : 100%;
    }
  }
  .text-center {
    text-align: center;
  }
`;

export default Style;
