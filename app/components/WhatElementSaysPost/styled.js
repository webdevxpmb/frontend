import styled from 'styled-components';

export const WhatElementSays = styled.div`
  background: ${(props) => props.theme.ivory};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 1rem;
  margin: 1rem 0;
  text-align: left;

  .post {
    margin-bottom: 1rem;
    color: ${(props) => props.theme.darkGray};

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.75rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    h4 {
      font-size: 1.25rem;
    }

    h5,
    h6 {
      font-size: 1rem;
    }

    p {
      line-height: 1.25;
      font-size: 1rem;
    }

    strong {
      font-weight: 700;
    }

    a {
      color: ${(props) => props.theme.blue};
    }
  }

  .author {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    color: ${(props) => props.theme.darkGray};
    font-size: 0.75rem;

    .divider {
      margin: 0 0.5rem;
    }
  }
`;
