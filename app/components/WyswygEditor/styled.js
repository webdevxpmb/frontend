import styled from 'styled-components';

export const Wyswyg = styled.div`
  width: 100%;

  .submit {
    width: 100%;
    margin-top: 1rem;
    font-size: 1rem;
    background: ${(props) => props.theme.altGreen};
    background-image: ${(props) => props.theme.greenGradient};
    transition: ${(props) => props.theme.transitionBg};
    color: ${(props) => props.theme.white};
    padding: 0.5rem 1rem;
    border: none;
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};

    &:hover {
      background: ${(props) => props.theme.green};
      transition: ${(props) => props.theme.transitionBg};
    }

    .icon-send {
      margin-right: 0.5rem;
    }
  }
`;
