import styled from 'styled-components';

export const Dates = styled.div`
  width: 100%;

  .navigation {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    button {
      font-size: 1rem;
      padding: 0.5rem;
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme.altBlue};
      background-image: ${(props) => props.theme.blueButtonGradient};
      transition: ${(props) => props.theme.transitionBg};
      border-radius: ${(props) => props.theme.borderRadius};

      &:hover {
        background: ${(props) => props.theme.blue};
        transition: ${(props) => props.theme.transitionBg};
      }
    }

    h1 {
      flex: 1;
      text-align: center;
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(props) => props.theme.darkGray};
    }
  }

  .dateContent {
    margin: 1rem 0 0;
    width: 100%:
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;

    .days {
      width: calc(100% / 7);
      display: inline-flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
      align-content: center;

      h1 {
        font-size: 1rem;
        color: ${(props) => props.theme.gray};
      }

      .date {
        width: 2rem;
        height: 2rem;
        color: ${(props) => props.theme.darkGray};
      }
    }
  }

  .dateContext {
    width: 100%;
    position: relative;
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;

    h1 {
      font-size: 0.8rem;
      color: ${(props) => props.theme.gray};
      margin-bottom: 1rem;
    }

    .close {
      font-size: 0.8rem;
      color: ${(props) => props.theme.gray};
      margin-bottom: 1rem;
    }

    .activity {
      border-left: 0.1rem solid ${(props) => props.theme.lightGray};
      padding: 1rem;

      h2 {
        font-size: 1.25rem;
        font-weight: 700;
        color: ${(props) => props.theme.darkGray};
        margin-bottom: 1rem;
      }

      button {
        font-size: 1rem;
        background: ${(props) => props.theme.altLightBlue};
        background-image: ${(props) => props.theme.lightBlueGradient};
        transition: ${(props) => props.theme.transitionBg};
        color: ${(props) => props.theme.white};
        padding: 0.5rem 1rem;
        border: none;
        border-radius: ${(props) => props.theme.borderRadius};
        box-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};

        &:hover {
          background: ${(props) => props.theme.lightBlue};
          transition: ${(props) => props.theme.transitionBg};
        }

        .icon-send {
          margin-right: 0.5rem;
        }
      }
    }
  }
`;

export const SpecialDate = styled.button`
  width: 2rem;
  height: 2rem;
  background: ${(props) => props.theme[`alt${props.color.charAt(0).toUpperCase()}${props.color.slice(1)}`]};
  color: ${(props) => props.theme.white};
  background-image: ${(props) => props.theme[`${props.color}Gradient`]};
  transition: ${(props) => props.theme.transitionBg};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};

  &:hover {
    background: ${(props) => props.theme[props.color]};
    transition: ${(props) => props.theme.transitionBg};
  }
`;
