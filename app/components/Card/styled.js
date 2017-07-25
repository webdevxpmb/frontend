import styled from 'styled-components';

export const CardLayout = styled.div`
  background: ${(props) => props.theme.white};
  border-radius: ${(props) => {
    if (props.radius === 'top') {
      return `${props.theme.borderRadius} ${props.theme.borderRadius} 0 0`;
    } else if (props.radius === 'bottom') {
      return `0 0 ${props.theme.borderRadius} ${props.theme.borderRadius}`;
    } else if (props.radius === 'left') {
      return `${props.theme.borderRadius} 0 0 ${props.theme.borderRadius}`;
    } else if (props.radius === 'right') {
      return `0 ${props.theme.borderRadius} ${props.theme.borderRadius} 0`;
    } else if (props.radius === 'none') {
      return '0';
    }

    return props.theme.borderRadius;
  }};
  box-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};
  width: 100%;

  @media screen and (max-width: 64em) {
    border-radius: ${(props) => {
      if (props.smallRadius === 'top') {
        return `${props.theme.borderRadius} ${props.theme.borderRadius} 0 0`;
      } else if (props.smallRadius === 'bottom') {
        return `0 0 ${props.theme.borderRadius} ${props.theme.borderRadius}`;
      } else if (props.smallRadius === 'left') {
        return `${props.theme.borderRadius} 0 0 ${props.theme.borderRadius}`;
      } else if (props.smallRadius === 'right') {
        return `0 ${props.theme.borderRadius} ${props.theme.borderRadius} 0`;
      } else if (props.smallRadius === 'none') {
        return '0';
      }

      return props.theme.borderRadius;
    }};
  }
`;
