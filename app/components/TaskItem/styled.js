import styled from 'styled-components';

export const Task = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin: 0 0 2rem;
  filter: ${(props) => {
    if (props.overdue) {
      return 'grayscale(1)';
    }

    return 'none';
  }};

  .taskItem {
    padding: 2rem;

    h1 {
      font-size: 1.5rem;
      font-weight: 700;
      color: ${(props) => props.theme.black};
    }

    h2 {
      font-size: 1rem;
      color: ${(props) => props.theme.darkGray};
      margin-bottom: 1rem;

      .icon-event {
        margin-right: 0.5rem;
      }
    }

    p {
      line-height: 1.25;
      color: ${(props) => props.theme.gray};
    }

    .progress {
      .entry {
        margin: 1rem 0;
      }
    }

    .submission {
      margin: 1rem 0 0;

      h3 {
        font-size: 1rem;
        color: ${(props) => props.theme.darkGray};

        span {
          margin-right: 0.5rem;
        }
      }

      .current {
        margin: 1rem 0;
        padding: 0 1rem;
        color: ${(props) => props.theme.blue};
        border-left: 0.25rem solid ${(props) => props.theme.ultraLightGray};

        a {
          color: ${(props) => props.theme.blue};
        }
      }

      .box {
        margin: 1rem 0;

        input {
          width: 100%;
          padding: 1rem 2rem;
          box-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};
          border-radius: ${(props) => props.theme.borderRadius};
          background: ${(props) => {
            if (props.isSubmitted) {
              return props.theme.green;
            }
            if (!props.isValid && !props.isEmpty) {
              return props.theme.red;
            }

            return props.theme.white;
          }};
          color: ${(props) => {
            if (props.isSubmitted || (!props.isValid && !props.isEmpty)) {
              return props.theme.white;
            }

            return props.theme.black;
          }};
          transition: ${(props) => props.theme.transitionBg}, ${(props) => props.theme.transitionColor};
        }

        .submit {
          width: 100%;
          margin-top: 1rem;
          font-size: 1rem;
          background: ${(props) => props.theme.altGreen};
          background-image: ${(props) => props.theme.greenGradient};
          transition: ${(props) => props.theme.transitionBg}, ${(props) => props.theme.transitionOpacity};
          color: ${(props) => props.theme.white};
          padding: 0.5rem 1rem;
          border: none;
          border-radius: ${(props) => props.theme.borderRadius};
          box-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};

          &:hover {
            background: ${(props) => props.theme.green};
            transition: ${(props) => props.theme.transitionBg};
          }

          &:disabled {
            opacity: 0.5;
            transition: ${(props) => props.theme.transitionBg}, ${(props) => props.theme.transitionOpacity};
          }

          .icon-send {
            margin-right: 0.5rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 64em) {
  }
`;
