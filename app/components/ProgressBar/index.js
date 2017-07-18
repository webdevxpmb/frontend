import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  margin: 1em 0;
  .progress-info {
    color: #40514E;
    h3 { margin: 0; }
    span { color: #8BEFE5; }
  }
  .max-progress {
    border-radius: 0.5em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 100%;
    height: 0.75rem;
    margin: auto;
    background-color: #40514E;
    .current-progress {
      border-radius: 0.5em;
      height: 0.75rem;
      background-color: #8BEFE5;
    }
  }
`;

/**
 * Global progress bar for any components to use
 *
 * @class ProgressBar
 * @extends {React.Component}
 */
class ProgressBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const current = this.props.currentProgress;
    const max = this.props.maxProgress;
    let persentage = current / max * 100;
    const divStyle = {
      width: persentage + '%',
    };
    return (
      <Bar>
        <div className="progress-info">
          <h4>{this.props.title}: <span>{parseInt(current / max * 100)}%</span> ({current}/{max})</h4>
        </div>
        <div className="max-progress">
          <div className="current-progress" style={divStyle} ></div>
        </div>
      </Bar>
    );
  }
}

// Specifies the default values for props:
ProgressBar.defaultProps = {
  title: 'Progress',
  currentProgress: 0,
  maxProgress: 1,
};

ProgressBar.propTypes = {
  title: React.PropTypes.string.isRequired,
  currentProgress: React.PropTypes.number.isRequired,
  maxProgress: React.PropTypes.number.isRequired,
};

export default ProgressBar;
