import styled from 'styled-components';

export const Offside = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(33, 33, 33, 0.75);
  z-index: 10000;
  display: ${(props) => {
    if (props.display) {
      console.log('abc');
      return 'block';
    }

    return 'none';
  }};

  .content {
    position: relative;
    width: 75%;
    height: 100%;
    margin-left: 25%;
    padding: 2rem 0;
    background: ${(props) => props.theme.white};
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;

    h1 {
      padding: 0 2rem;
      font-size: 1rem;
      color: ${(props) => props.theme.gray};
      margin-bottom: 1rem;
    }

    .link {
      color: ${(props) => props.theme.darkGray};
      font-size: 1rem;
      width: 100%;
      padding: 1rem 2rem;
      border-bottom: 0.1rem solid ${(props) => props.theme.ultraLightGray};
      text-align: left;
      margin-bottom: 0.5rem;

      span {
        margin-right: 0.5rem;
      }
    }

    .close {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      width: 100%;
      height: 3rem;
      color: ${(props) => props.theme.altRed};
      border-top: 0.1rem solid ${(props) => props.theme.ultraLightGray};

      span {
        margin-right: 0.5rem;
      }
    }
  }
`;
