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
        {`${dayNames[date.day()]}, ${date.date()} ${monthNames[date.month()]} ${date.year()} - ${date.hour() > 9 ? date.hour() : `0${date.hour()}`}:${date.minute() > 9 ? date.minute() : `0${date.minute()}`}`}
      </span>
    );
  }
}

DateString.propTypes = {
  date: React.PropTypes.string.isRequired,
};

export default DateString;
