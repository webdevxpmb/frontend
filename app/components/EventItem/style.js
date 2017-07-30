import styled from 'styled-components';

const EventCard = styled.div`
  padding: 2rem;
  flex: 1;
  margin: 1rem 0;
  width: 100%;

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
    margin-top: 1rem;
    font-size: 0.9rem;
    line-height: 1;
    color: ${(props) => props.theme.gray};
  }
  .active {
    display: block; 
  }
  .passive {
    display: none;
  }
  .toggle-detail {
    width: 100%;
  }
  @media screen and (max-width: 960px) {
    h1 {
      font-size: 1.5rem;
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
      margin-top: 1rem;
      font-size: 0.9rem;
      line-height: 1;
      color: ${(props) => props.theme.gray};
    }
  }
`;

export default EventCard;
