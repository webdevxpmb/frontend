import styled from 'styled-components';

const Style = styled.div`
  width:100%;
  color: ${(props) => props.theme.black};
    h1,h2,h3,h4,h5,h6 {
    font-family: "Montserrat";
    font-weight: bold;
  }
  .rounded-image {
    border-radius:50%;
    width:50%;
  }
  .text-center {
    white-space: nowrap;
    text-align: center;
  }
  .kp-wkp {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: center;
    div {
      width:50%;
      text-align: center;
    }
  }
  .sekre-benda {
    display: flex;
    margin: 1.5em 0 1.5em 0 ;
    flex-flow: row;
    flex-wrap:wrap;
    justify-content: space-between;
    h3,h4{
      font-size:1.5em;
    }
    div {
      width:25%;
      text-align: center;
    }
    .rounded-image {
      width:70%;
    }
  }
  .pj {
    display: flex;
    margin: 1.5em 0 1.5em 0 ;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: space-between;
    div {
      width:30%;
      text-align: center;
    }
    h3,h4 {
      font-size: 1.5em;
    }
    .rounded-image{
      width: 70%;
    }
  }
  @media screen and (max-width:48em){
    .kp-wkp div {
      width:100%;
    }
    .sekre-benda div {
      width:50%;
      h3,h4 {
        font-size: 1em;
      }
    }
    .pj div {
      width:50%;
      h3,h4{
        font-size: 1em;
      }
    }
  }
`;

export default Style;
