import styled from 'styled-components';

export const Bar = styled.div`
  .info {
    color: ${(props) => props.theme.darkGray};
    margin-bottom: 0.5rem;

    h3 {
      margin: 0;
      font-size: 1rem;
      font-weight: 700;

      span {
        color: ${(props) => props.theme.blue};
      }
    }
  }

  .max {
    border-radius: 0.5em;
    box-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};
    width: 100%;
    height: 0.25rem;
    margin: auto;
    background: ${(props) => props.theme.ultraLightGray};

    .current {
      border-radius: 0.5em;
      width: ${(props) => props.percentage}%;
      height: 0.25rem;
      background: ${(props) => props.theme.darkBlue};
      background-image: ${(props) => props.theme.darkBlueGradient};
    }
  }
`;
