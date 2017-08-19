import styled from 'styled-components';

export const WhatElementSays = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
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

  .posts {
    flex: 1;
    overflow: auto;
  }
`;

// height: 64rem;
