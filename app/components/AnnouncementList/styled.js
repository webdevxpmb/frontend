import styled from 'styled-components';

export const Announcement = styled.div`
  padding: 2em;

  .pagination {
    margin: auto;
    text-align: center;
  }
  .pagination button {
    padding: 1em;
    border-radius: ${(props) => props.theme.borderRadius};
    &.active {
      background: ${(props) => props.theme.blueGradient};
      color: white;
    }
  }
  @media screen and (max-width: 960px) {
    padding: 0;
  }
`;

export const Item = styled.div`
  width: 100%;
  padding: 2rem;
  margin: 1rem auto;
  background: ${(props) => props.theme.greyLighten};
  
  h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.25;
    color: ${(props) => props.theme.black};
  }

  h2 {
    font-size: 1rem;
    line-height: 1.25;
    color: ${(props) => props.theme.darkGray};
  }

  p {
    font-size: 0.9rem;
    line-height: 1;
  }

  .media-primary {
    display: -webkit-flex;
    display: flex;

    .header {
      margin-bottom: 1rem;
      .media-heading {
        margin: 0;
        font-weight: 700;
        font-family: 'Montserrat';
      }
      .command {
        font-size: 1em;
        display: flex;
      }
    }
    .media-content {
      width: 100%;
    }

    .read-more {
      padding: 0.5rem;
      color: white;
      margin: 0.5rem 0;
      border-radius: ${(props) => props.theme.borderRadius};
      background: ${(props) => props.theme.blueGradient};
    }
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    margin: 1em auto;
    padding: 1rem;
  }
`;
