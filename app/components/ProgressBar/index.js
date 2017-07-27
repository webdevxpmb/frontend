import React from 'react';

import {
  Bar,
} from './styled';

/**
 * Global progress bar for any components to use
 *
 * @class ProgressBar
 * @extends {React.Component}
 */
class ProgressBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const current = this.props.current;
    const max = this.props.max;
    const percentage = Math.floor((current / max) * 100);

    return (
      <Bar percentage={percentage}>
        <div className="info">
          <h3>{this.props.title}: <span>{percentage}%</span> ({current}/{max})</h3>
        </div>
        <div className="max">
          <div className="current" />
        </div>
      </Bar>
    );
  }
}

// Specifies the default values for props:
ProgressBar.defaultProps = {
  title: 'Progress',
};

ProgressBar.propTypes = {
  title: React.PropTypes.string.isRequired,
  current: React.PropTypes.number.isRequired,
  max: React.PropTypes.number.isRequired,
};

export default ProgressBar;
