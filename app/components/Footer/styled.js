import styled from 'styled-components';

export const Foot = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 1rem 2rem;

  img {
    width: auto;
  }

  h1 {
    color: ${(props) => props.theme.darkGray};
  }

  .logoPack,
  .ristekPack {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
  }

  .logoPack {
    img {
      height: 5rem;
    }

    h1 {
      font-size: 1rem;
      font-weight:700;
      margin-left: 0.5rem;
    }
  }

  .ristekPack {
    img {
      height: 3rem;
    }

    h1 {
      font-size: 1rem;
      margin-right: 1rem;
    }
  }

  @media screen and (max-width: 64em) {
    justify-content: center;
    padding: 2rem;

    .logoPack,
    .ristekPack {
      justify-content: center;
    }

    .logoPack {
      margin-bottom: 2rem;

      img {
        height: 5rem;
      }

      h1 {
        margin-left: 0;
        margin-right: 0.5rem;
        margin-top: 1rem;
        font-size: 0.75rem;
      }
    }

    .ristekPack {

      h1 {
        margin-right: 0;
        margin-bottom: 0.5rem;
      }
    }
  }
`;
