import styled from 'styled-components';

export const Event = styled.div`
  width: 100%;
  min-height: calc(100vh - 10rem);

  .emptyState {
    color: ${(props) => props.theme.gray};
    text-align: center;
    width: 100%;
  }
`;
