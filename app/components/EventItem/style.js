import styled from 'styled-components';

export const EventCard = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin: 0 0 2rem;

  .eventItem {
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

    h6 {
      font-size: 1rem;
      margin-top: 0.5rem;

      .icon-send {
        margin-right: 0.5rem;
      }
    }


    a {
      color: ${(props) => props.theme.blue};
    }

    p {
      line-height: 1.25;
      color: ${(props) => props.theme.gray};
    }

    .progress {
      .entry {
        margin: 1rem 0 0;
      }
    }

    h5 {
      font-size: 0.8rem;
      margin: 1rem 0 0;
      color: ${(props) => props.theme.gray};
    }
  }
`;

export const Bar = styled.div`
  .info {
    color: ${(props) => props.theme.darkGray};
    margin-bottom: 0.5rem;

    h3 {
      margin: 0;
      font-size: 1rem;
      font-weight: 700;

      span {
        color: ${(props) => props.theme.blue};
      }
    }
  }

  .max {
    border-radius: 0.5em;
    box-shadow: ${(props) => props.theme.shadowConfig} ${(props) => props.theme.shadowColor};
    width: 100%;
    height: 0.25rem;
    margin: auto;
    background: ${(props) => props.theme.ultraLightGray};
    position: relative;

    .onTime,
    .late,
    .permission,
    .absent {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
    }

    .onTime {
      border-radius: 0.5em;
      width: ${(props) => props.onTime}%;
      height: 0.25rem;
      background: ${(props) => props.theme.green};
      background-image: ${(props) => props.theme.greenGradient};
      z-index: 10;
    }

    .late {
      border-radius: 0.5em;
      width: ${(props) => props.late}%;
      height: 0.25rem;
      background: ${(props) => props.theme.blue};
      background-image: ${(props) => props.theme.blueGradient};
      z-index: 8;
    }

    .permission {
      border-radius: 0.5em;
      width: ${(props) => props.permission}%;
      height: 0.25rem;
      background: ${(props) => props.theme.yellow};
      background-image: ${(props) => props.theme.yellowGradient};
      z-index: 4;
    }

    .absent {
      border-radius: 0.5em;
      width: ${(props) => props.absent}%;
      height: 0.25rem;
      background: ${(props) => props.theme.red};
      background-image: ${(props) => props.theme.redGradient};
      z-index: 2;
    }
  }

  .labels {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;

    .label {
      margin-right: 1rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      align-content: center;

      h4 {
        font-size: 0.8rem;
        margin-left: 0.4rem;
        color: ${(props) => props.theme.darkGray}
      }

      .onTimeLabel,
      .lateLabel,
      .permissionLabel,
      .absentLabel {
        width: 1rem;
        height: 1rem;
        border-radius: 100%;
      }

      .onTimeLabel {
        background: ${(props) => props.theme.green};
        background-image: ${(props) => props.theme.greenGradient};
      }

      .lateLabel {
        background: ${(props) => props.theme.blue};
        background-image: ${(props) => props.theme.blueGradient};
      }

      .permissionLabel {
        background: ${(props) => props.theme.yellow};
        background-image: ${(props) => props.theme.yellowGradient};
      }

      .absentLabel {
        background: ${(props) => props.theme.red};
        background-image: ${(props) => props.theme.redGradient};
      }
    }
  }

  @media screen and (max-width: 64em) {
    .labels {
      flex-direction: column;
      align-items: flex-start;
      align-content: flex-start;

      .label {
        margin-right: 0;
        margin-top: 0.5rem;
      }
    }
  }
`;
