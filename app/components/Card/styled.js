import styled from 'styled-components';

export const CardLayout = styled.div`
  background: ${(props) => props.theme.white};
  border-radius: ${(props) => {
    if (props.radius === 'top') {
      return '0.25rem 0.25rem 0 0';
    } else if (props.radius === 'bottom') {
      return '0 0 0.25rem 0.25rem';
    } else if (props.radius === 'left') {
      return '0.25rem 0 0 0.25rem';
    } else if (props.radius === 'right') {
      return '0 0.25rem 0.25rem 0';
    }

    return '0.25rem';
  }};
  box-shadow: 0 0 0.5rem ${(props) => props.theme.shadow};
  width: 100%;
`;
