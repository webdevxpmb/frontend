import styled from 'styled-components';

const Bantuan = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;

  .help-content {
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

    @media screen and (max-width: 40em) {
      padding: 3rem 1rem;
      .title {
        margin: 2rem auto;
      }
    }
  }
`;

export default Bantuan;
