import styled from 'styled-components';

export const WhatElementSays = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
  color: ${(props) => props.theme.gray};

  .label {
    font-size: 1rem;
    margin: 0 0 1rem;
    line-height: 1;
  }

  .posts {
    flex: 1;
    overflow: auto;
    max-height: 35rem;

    .empty {
      font-size: 0.85rem;
      margin: 2rem 0;
      color: ${(props) => props.theme.lightGray};
    }
  }
`;

// height: 64rem;
