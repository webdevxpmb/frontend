import styled from 'styled-components';

const OffScreenMenu = styled.nav`
  width: 100%;
  position: relative;
  z-index: 1000;
  margin: 0 0 2rem;
  
  .icon-menu {
    max-width: 256px;
    max-height: 256px;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CiAgPGc+CiAgICA8cGF0aCBkPSJNMjQsM2MwLTAuNi0wLjQtMS0xLTFIMUMwLjQsMiwwLDIuNCwwLDN2MmMwLDAuNiwwLjQsMSwxLDFoMjJjMC42LDAsMS0wLjQsMS0xVjN6IiBmaWxsPSIjMDBmZmZmIi8+CiAgICA8cGF0aCBkPSJNMjQsMTFjMC0wLjYtMC40LTEtMS0xSDFjLTAuNiwwLTEsMC40LTEsMXYyYzAsMC42LDAuNCwxLDEsMWgyMmMwLjYsMCwxLTAuNCwxLTFWMTF6IiBmaWxsPSIjMDBmZmZmIi8+CiAgICA8cGF0aCBkPSJNMjQsMTljMC0wLjYtMC40LTEtMS0xSDFjLTAuNiwwLTEsMC40LTEsMXYyYzAsMC42LDAuNCwxLDEsMWgyMmMwLjYsMCwxLTAuNCwxLTFWMTl6IiBmaWxsPSIjMDBmZmZmIi8+CiAgPC9nPgo8L3N2Zz4K)
  }
  .offsetMenu {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    overflow: hidden;
    color: ${(props) => props.theme.tosca};

    &.passive {
      visibility: hidden;
      opacity: 0;
      background: rgba(0, 0, 0, 0);
      transition: background ease-out 0.5s, opacity ease-out 1s;

      .content {
        transform: translateX(100%);
        transition: transform ease-out 0.25s;
      }
    }

    &.active {
      background: rgba(0, 0, 0, 0.75);
      opacity: 1;
      transition: background ease-in 0.5s;

      .content {
        transform: translateX(0);
        transition: transform ease-in 0.25s;
      }
    }

    .content {
      padding: 1rem;
      width: 80%;
      height: 100%;
      position: relative;
      background: ${(props) => props.theme.white};

      .close-btn {
        width: 3rem;
        font-size: 1rem;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-3rem, 1rem);
        padding: 1rem;
        position: absolute;
        text-align: center;
        background: ${(props) => props.theme.dark};
        color: ${(props) => props.theme.white};
      }
      .container {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: auto;

        .user-action {
          margin: 0 0 0.5em 0;
          h1 { font-weight: bold; }
          .username { color: ${(props) => props.theme.cyan}; }
        }
        .navigations {

          .ul-button {
            
            .li-button {
              width: 100%;
              margin: 0.2em 0;
              padding: 0.2em 0;
              font-size: 1.5rem;
              font-weight: 700;
              text-align: left;
              outline: none;
              border-bottom: 0.1em solid;
              cursor: pointer;
              &::first-letter {
                color: ${(props) => props.theme.cyan};
              }
            }
            #btn-bantuan {
              position: absolute;
              bottom: 0;
              left: 0;
              overflow: auto;
            }
          }
        }
      }
    }
  }
  
  .header {
    width: 100%;
    background: ${(props) => props.theme.grayLight};
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    padding: 1rem;

    .logo {
      width:50px;
      text-align: left;
      
      img {
        width: 100%;
      }
    }

    .actions {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      align-items: center;
      align-content: center;
      text-align: right;

      h3 {
        color: ${(props) => props.theme.tosca};
        font-size: 1rem;
        font-family: 'Montserrat';
        font-weight: bold;
        margin: 0 1em;

        span {
          color: ${(props) => props.theme.cyan};
        }
      }
      button {
        line-height: 0;
      }
    }

    .action {
      self-align: flex-end;
      font-size: 1rem;
      color: ${(props) => props.theme.grayDarkSuper};
      border-bottom: 0.2rem solid ${(props) => props.theme[props.background]};
      margin: 0 0.5rem;
      padding: 0 0 0.25rem;
      transition: padding ease-in 0.25s, margin ease-in 0.25s;

      &:hover {
        margin: 0;
        padding: 0 0.5rem 0.25rem;
        transition: padding ease-out 0.25s, margin ease-out 0.25s;
      }
    }
  }

  @media screen and (max-width: 40em) {
    margin: 0;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 3rem;

    .header {
      height: 3rem;
      padding: 1rem 1.5rem;
      width: 100%;
      background: ${(props) => props.theme.grayLight};
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      align-content: center;
      padding: 1rem;

      button {
        font-size: 2rem;
        color: ${(props) => props.theme[props.background]};
        border-bottom: none;
        margin: 0;
        padding: 0;

        &.logo {
          img {
            width: 100%;
          }
        }
      }
    }
  }
`;

export default OffScreenMenu;
