/* eslint new-cap: 0 no-plusplus: 0 */
/*
 *
 * DateModule
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { isEmpty } from 'lodash';

import DateString from 'components/DateString';

import {
  Dates,
  SpecialDate,
} from './styled';

const moment = window.moment;

export class DateModule extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    const now = moment();

    this.state = {
      today: now.toObject(),
      active: now.toObject(),
      context: {},
    };

    this.getDaysInMonth = this.getDaysInMonth.bind(this);
    this.injectImportantDates = this.injectImportantDates.bind(this);
    this.getContainerizedDaysInMonth = this.getContainerizedDaysInMonth.bind(this);
    this.setPrevMonth = this.setPrevMonth.bind(this);
    this.setNextMonth = this.setNextMonth.bind(this);
    this.handleContextClick = this.handleContextClick.bind(this);
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
      ['Mon'],
      ['Tue'],
      ['Wed'],
      ['Thu'],
      ['Fri'],
      ['Sat'],
      ['Sun'],
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
    const activeYear = active.year();
    const activeOffset = active.day() - 1;


    // this.props.days.map((value) => {
    //   const valMoment = new moment(value);

    //   if (valMoment.month() === activeMonth && valMoment.year() === activeYear) {
    //     if (typeof daysArray[(valMoment.date() + activeOffset) - 1] === 'object') {
    //       daysArray[(valMoment.date() + activeOffset) - 1].actions.push(value);
    //     } else {
    //       daysArray[(valMoment.date() + activeOffset) - 1] = {
    //         date: valMoment.date(),
    //         actions: [value],
    //       };
    //     }
    //   }

    //   return true;
    // });

    this.props.importantDates.forEach((value) => {
      const valMoment = new moment(value.end_time);

      if (valMoment.month() === activeMonth && valMoment.year() === activeYear) {
        if (typeof daysArray[(valMoment.date() + activeOffset) - 1] === 'object') {
          daysArray[(valMoment.date() + activeOffset) - 1].actions.push(value);
        } else {
          daysArray[(valMoment.date() + activeOffset) - 1] = {
            date: value.end_time,
            actions: [value],
          };
        }
      }
    });

    return daysArray;
  }

  handleContextClick(context) {
    this.setState({
      ...this.state,
      context,
    });
  }

  render() {
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

    const daysToRender = this.getContainerizedDaysInMonth();
    const active = new moment(this.state.active);

    const currentMonth = monthNames[active.month()];
    const currentYear = active.year();

    const calender = daysToRender.map((value, index) => {
      const dayItems = value.map((innerVal, innerIndex) => {
        if (innerIndex === 0) {
          return (<h1 key={`innerIndex-${innerIndex}`}>{innerVal}</h1>);
        } else if (innerVal === 'skip') {
          return (<button className="date" key={`innerIndex-${innerIndex}`} disabled />);
        } else if (typeof innerVal === 'object') {
          return (<SpecialDate onClick={() => this.handleContextClick(innerVal)} color="darkBlue" key={`innerIndex-${innerIndex}`}>{new moment(innerVal.date).date()}</SpecialDate>);
        }

        return (<button className="date" key={`innerIndex-${innerIndex}`}>{innerVal}</button>);
      });

      return (<div key={`index-${index}`} className="days">{dayItems}</div>);
    });

    let contextItems = (<span>none</span>);

    if (!isEmpty(this.state.context)) {
      contextItems = this.state.context.actions.map((value, index) => (
        <div key={`context-item-${index}`} className="activity">
          <h2>{value.name}</h2>
          <button
            onClick={() => {
              if ('is_kenalan' in value) {
                this.props.push('/task');
              } else if ('location' in value) {
                this.props.push('/event');
              }
            }}
          >
            <span className="icon-send" />
            {
              // 'is_kenalan' in value ? 'View Tasks' : 'location' in value ? 'View Event' : 'Go'
              () => {
                if ('is_kenalan' in value) {
                  this.props.push('/task');
                } else if ('location' in value) {
                  this.props.push('/event');
                }
              }
            }
          </button>
        </div>
      ));
    }

    return (
      <Dates>
        <div className="navigation">
          <button onClick={this.setPrevMonth}><span className="icon-left" /></button>
          <h1>{currentMonth}, {currentYear}</h1>
          <button onClick={this.setNextMonth}><span className="icon-right" /></button>
        </div>
        <div className="dateContent">
          {calender}
        </div>
        {!isEmpty(this.state.context) &&
          <div className="dateContext">
            <h1>Activity on <DateString date={this.state.context.date} notime /></h1>
            <button onClick={() => this.handleContextClick({})} className="close"><span className="icon-close" /></button>
            {contextItems}
          </div>
        }
      </Dates>
    );
  }
}

DateModule.propTypes = {
  push: PropTypes.func.isRequired,
  // days: PropTypes.array,
  importantDates: PropTypes.array,
};


function mapDispatchToProps(dispatch) {
  return {
    push: (url) => dispatch(push(url)),
  };
}

export default connect(null, mapDispatchToProps)(DateModule);
