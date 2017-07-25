/* eslint new-cap: 0 no-plusplus: 0 */
/*
 *
 * DateModule
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const moment = window.moment;

export class DateModule extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    const now = moment();

    this.state = {
      today: now.toObject(),
      active: now.toObject(),
    };

    this.getDaysInMonth = this.getDaysInMonth.bind(this);
    this.injectImportantDates = this.injectImportantDates.bind(this);
    this.getContainerizedDaysInMonth = this.getContainerizedDaysInMonth.bind(this);
    this.setPrevMonth = this.setPrevMonth.bind(this);
    this.setNextMonth = this.setNextMonth.bind(this);
  }

  componentDidMount() {
    this.setNextMonth();
  }

  getDaysInMonth() {
    const daysArray = [];
    const mutable = new moment(this.state.active);
    mutable.date(1);

    const offset = mutable.day();

    for (let i = 0; i < offset - 1; i++) {
      daysArray.push('skip');
    }

    for (let i = 0; i < mutable.daysInMonth(); i++) {
      daysArray.push(i + 1);
    }

    return daysArray;
  }

  getContainerizedDaysInMonth() {
    const daysArray = this.injectImportantDates();

    const container = [
      ['Sen'],
      ['Sel'],
      ['Rab'],
      ['Kam'],
      ['Jum'],
      ['Sab'],
      ['Min'],
    ];

    daysArray.map((value, index) => {
      container[index % 7].push(value);

      return true;
    });

    return container;
  }

  setPrevMonth() {
    const mutable = new moment(this.state.active);
    mutable.month(mutable.month() - 1);

    this.setState({
      ...this.state,
      active: mutable.toObject(),
    });
  }

  setNextMonth() {
    const mutable = new moment(this.state.active);
    mutable.month(mutable.month() + 1);

    this.setState({
      ...this.state,
      active: mutable.toObject(),
    });
  }

  injectImportantDates() {
    const daysArray = this.getDaysInMonth();
    const active = new moment(this.state.active);
    active.date(1);
    const activeMonth = active.month();
    const activeOffset = active.day() - 1;


    this.props.days.map((value) => {
      const valMoment = new moment(value);

      if (valMoment.month() === activeMonth) {
        if (typeof daysArray[(valMoment.date() + activeOffset) - 1] === 'object') {
          daysArray[(valMoment.date() + activeOffset) - 1].actions.push(value);
        } else {
          daysArray[(valMoment.date() + activeOffset) - 1] = {
            date: valMoment.date(),
            actions: [value],
          };
        }
      }

      return true;
    });

    return daysArray;
  }

  render() {
    const daysToRender = this.getContainerizedDaysInMonth();

    const calender = daysToRender.map((value, index) => {
      const dayItems = value.map((innerVal, innerIndex) => {
        if (innerIndex === 0) {
          return (<h1 key={`innerIndex-${innerIndex}`}>{innerVal}</h1>);
        } else if (innerVal === 'skip') {
          return (<h2 key={`innerIndex-${innerIndex}`}>e</h2>);
        } else if (typeof innerVal === 'object') {
          return (<h2 key={`innerIndex-${innerIndex}`}>{innerVal.date}</h2>);
        }

        return (<h2 key={`innerIndex-${innerIndex}`}>{innerVal}</h2>);
      });

      return (<div key={`index-${index}`}>{dayItems}</div>);
    });

    return (
      <div>
        {calender}
      </div>
    );
  }
}

DateModule.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  days: PropTypes.array,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(DateModule);
