import styled from 'styled-components';

export const WhatElementSays = styled.div`
  width: 100%;
  padding: 2rem;
  height: 64rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  .label {
    font-size: 1rem;
    color: ${(props) => props.theme.gray};
    margin: 0 0 1rem;
    line-height: 1;
  }

  .posts {
    flex: 1;
    overflow: auto;
  }
`;
