import styled from 'styled-components';

export const WhatElementSays = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
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
      font-size: 0.9rem;
      color: ${(props) => props.theme.lightGray};
    }
  }

  .newPost {
    margin-top: 2rem;

    .empty {
      font-size: 0.85rem;
      margin: 1rem 0 0;
      color: ${(props) => props.theme.lightGray};
    }
  }
`;
