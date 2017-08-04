/**
*
* EventItem
*
*/

import React from 'react';

import Card from 'components/Card';
import DateString from 'components/DateString';
import ProgressBar from 'components/ProgressBar';

import {
  EventCard,
  Bar,
} from './style';

const moment = window.moment;

class EventItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const now = new moment();
    const start = new moment(this.props.event.start_time);

    const overdue = start.diff(now) <= 0;

    let percentage = 0;
    let onTimePercentage = 0;
    let latePercentage = 0;
    let permissionPercentage = 0;
    let absentPercentage = 0;

    if (this.props.eventStatistic) {
      percentage = Math.round((this.props.eventStatistic.attendee / this.props.event.expected_attendee) * 100);
      onTimePercentage = Math.round((this.props.eventStatistic.on_time / this.props.eventStatistic.attendee) * 100);
      latePercentage = Math.round((this.props.eventStatistic.late / this.props.eventStatistic.attendee) * 100);
      permissionPercentage = Math.round((this.props.eventStatistic.permission / this.props.eventStatistic.attendee) * 100);
      absentPercentage = Math.round((this.props.eventStatistic.absent / this.props.eventStatistic.attendee) * 100);
    }

    return (
      <EventCard overdue={overdue}>
        <Card>
          <div className="eventItem">
            <h1>{this.props.event.name}</h1>
            <h2><span className="icon-event" />At {this.props.event.location}.  From <DateString date={this.props.event.start_time} /> until <DateString date={this.props.event.end_time} /></h2>
            <p dangerouslySetInnerHTML={{ __html: this.props.event.description }}></p>
            {
              this.props.event.attachment_link &&
              <h6>
                <a href={this.props.event.attachment_link} target="_blank">
                  <span className="icon-send" />Event Attachment
                </a>
              </h6>
            }
            {
              overdue && this.props.eventStatistic &&
              <div className="progress">
                <div className="entry">
                  <Bar
                    onTime={Math.round((this.props.eventStatistic.on_time / this.props.event.expected_attendee) * 100)}
                    late={Math.round(((this.props.eventStatistic.on_time + this.props.eventStatistic.late) / this.props.event.expected_attendee) * 100)}
                    permission={Math.round(((this.props.eventStatistic.on_time + this.props.eventStatistic.late + this.props.eventStatistic.permission) / this.props.event.expected_attendee) * 100)}
                    absent={Math.round(((this.props.eventStatistic.on_time + this.props.eventStatistic.late + this.props.eventStatistic.permission + this.props.eventStatistic.absent) / this.props.event.expected_attendee) * 100)}
                  >
                    <div className="info">
                      <h3>Attendance: <span>{percentage}%</span> ({this.props.eventStatistic.attendee}/{this.props.event.expected_attendee})</h3>
                    </div>
                    <div className="max">
                      <div className="onTime" />
                      <div className="late" />
                      <div className="permission" />
                      <div className="absent" />
                    </div>
                    <div className="labels">
                      <div className="label">
                        <div className="onTimeLabel" />
                        <h4>On Time: <span>{onTimePercentage}%</span> ({this.props.eventStatistic.on_time})</h4>
                      </div>
                      <div className="label">
                        <div className="lateLabel" />
                        <h4>Late: <span>{latePercentage}%</span> ({this.props.eventStatistic.late})</h4>
                      </div>
                      <div className="label">
                        <div className="permissionLabel" />
                        <h4>Absent with Permission: <span>{permissionPercentage}%</span> ({this.props.eventStatistic.permission})</h4>
                      </div>
                      <div className="label">
                        <div className="absentLabel" />
                        <h4>Absent: <span>{absentPercentage}%</span> ({this.props.eventStatistic.absent})</h4>
                      </div>
                    </div>
                  </Bar>
                </div>
              </div>
            }
            {
              overdue && !this.props.eventStatistic &&
              <h5>No event statistics yet, still counting and awaiting updates.</h5>
            }
          </div>
        </Card>
      </EventCard>
    );
  }
}

EventItem.propTypes = {
  event: React.PropTypes.object.isRequired,
  eventStatistic: React.PropTypes.object,
};

export default EventItem;
