import styled from 'styled-components';

export const AnnouncementElement = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin: 0 0 2rem;

  .announcementContent {
    padding: 2rem;
    color: ${(props) => props.theme.darkGray};
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    h1 {
      font-size: 2rem;
      font-weight: 700;
      color: ${(props) => props.theme.black};
    }

    h2 {
      font-size: 1rem;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      color: ${(props) => props.theme.gray};
    }

    p {
      line-height: 1.25;
    }

    a,
    button {
      margin: 1rem 0 0;

      span {
        margin: 0 0.5rem 0 0;
      }
    }

    a {
      color: ${(props) => props.theme.blue};
    }

    button {
      color: ${(props) => props.theme.gray};

      &.backButton {
        margin-top: 0;
        margin-bottom: 1rem;
      }
    }
  }
`;