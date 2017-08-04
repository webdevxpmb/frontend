/**
*
* DateString
*
*/

import React from 'react';

const moment = window.moment;

class DateString extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const date = new moment(this.props.date);

    const dayNames = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];

    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return (
      <span>
        {`${dayNames[date.day() - 1]}, ${date.date()} ${monthNames[date.month()]} ${date.year()} ${this.props.notime ? '' : `- ${date.hour() > 9 ? date.hour() : `0${date.hour()}`}:${date.minute() > 9 ? date.minute() : `0${date.minute()}`}`}`}
      </span>
    );
  }
}

DateString.propTypes = {
  date: React.PropTypes.string.isRequired,
  notime: React.PropTypes.bool,
};

export default DateString;
