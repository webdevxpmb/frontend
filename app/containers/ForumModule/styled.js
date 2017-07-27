import styled from 'styled-components';

export const Forum = styled.div`
  width: 100%;
  padding: 2rem;

  .label {
    font-size: 1rem;
    color: ${(props) => props.theme.gray};
    margin: 0 0 1rem;
    line-height: 1;
  }

  .newPost {
    margin-bottom: 2rem;
  }
`;
