import styled from 'styled-components';

export const Forum = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  color: ${(props) => props.theme.gray};

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
