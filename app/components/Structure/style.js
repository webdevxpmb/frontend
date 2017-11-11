import styled from 'styled-components';

const Style = styled.div`
  width:100%;
  margin: 2em 0 0;
  color: ${(props) => props.theme.black};
  h1,h2,h3,h4,h5,h6 {
    font-family: "Montserrat";
    font-weight: bold;
  }
  .structure-list {
    margin: 1em 0;
    
    .name {
      color: ${(props) => props.theme.white};
      text-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};
    }

    /* Card Component Div */
    div {
      text-align: center;
      padding: 0 1em;

      .text-center {
        white-space: nowrap;
        text-align: center;
        margin: 0.25em auto;
      }  
    }
    .rounded-image {
      border-radius:50%;
      width:50%;
      margin: 0.5em 0;
      box-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};
    }
    .text-center {
      white-space: nowrap;
      text-align: center;
      margin: 0.5em 0;
    }
  }
  .kp-wkp {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: center;
    &>div {
      width:50%;
      padding: 0 1em;
      text-align: center;
    }
  }
  .sekre-benda {
    display: flex;
    margin: 1.5em 0;
    flex-flow: row;
    flex-wrap:wrap;
    justify-content: space-between;
    h3,h4{
      font-size:1.5em;
    }
    &>div {
      width: 25%;
      padding: 0 1em;
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
    &>div {
      width:30%;
      padding: 0 1em;
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
    .kp-wkp>div {
      width:100%;
      padding: 0 0.5em;
    }
    .sekre-benda>div {
      width:50%;
      padding: 0 0.5em;
      h3,h4 {
        font-size: 0.65em;
      }
    }
    .pj>div {
      width:50%;
      padding: 0 0.5em;
      h3,h4{
        font-size: 0.65em;
      }
    }
    .pj>div:last-child {
      width:50%;
      padding: 0 0.5em;
      margin: auto;
      h3,h4{
        font-size: 0.65em;
      }
    }
  }
`;

export default Style;
