import styled from 'styled-components';

export const Announcement = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;

  .announcementPageContent {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 6rem 0 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;

    .announcementList {
      min-height: calc(100vh - 10rem);
      width: 100%;
    }

    .footer {
      margin-top: 2rem;
      width: 100%;
    }
  }

  @media screen and (max-width: 64em) {
    .announcementPageContent {
      padding: 4rem 0 2rem;
    }
  }
`;
