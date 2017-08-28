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
  flex: ${(props) => {
    if (props.flex) {
      return 1;
    }

    return 'none';
  }};
  display: ${(props) => {
    if (props.flex) {
      return 'flex';
    }

    return 'block';
  }};
  flex-wrap: ${(props) => {
    if (props.flex) {
      return 'wrap';
    }

    return 'none';
  }};
  justify-content: ${(props) => {
    if (props.flex) {
      return 'stretch';
    }

    return 'none';
  }};
  align-items: ${(props) => {
    if (props.flex) {
      return 'stretch';
    }

    return 'none';
  }};
  align-content: ${(props) => {
    if (props.flex) {
      return 'stretch';
    }

    return 'none';
  }};

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
