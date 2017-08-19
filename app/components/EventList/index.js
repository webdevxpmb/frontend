/**
*
* EventList
*
*/

import React from 'react';
import { isEmpty } from 'lodash';

import EventItem from 'components/EventItem';
import SectionHeading from 'components/SectionHeading';

import {
  Event,
} from './styled';

const Moment = window.moment;

class EventList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let activeEventsItem = (<div className="emptyState">No Events Available</div>);
    let overdueEventsItem = (<div className="emptyState">No Events Available</div>);

    const events = this.props.events;
    const now = new Moment();

    if (!isEmpty(events)) {
      const activeEvents = events.filter((value) => {
        const deadline = new Moment(value.start_time);

        if (deadline.diff(now) > 0) {
          return true;
        }

        return false;
      });

      const overdueEvents = events.filter((value) => {
        const deadline = new Moment(value.start_time);

        if (deadline.diff(now) > 0) {
          return false;
        }

        return true;
      });

      activeEventsItem = activeEvents.map((value, index) =>
        // let itemSubmission = null;

        // if (this.props.taskPage.submissions) {
        //   this.props.taskPage.submissions.forEach((subValue) => {
        //     if (subValue.task.id === value.id) {
        //       itemSubmission = subValue;
        //     }
        //   });

        //   return (
        //     <TaskItem key={`pmb-task-${index}`} task={value} submission={itemSubmission} submit={this.props.submit} user={this.props.Global.user} />
        //   );
        // }

        <EventItem
          key={`pmb-events-${index}`}
          event={value}
        />
      );

      overdueEventsItem = overdueEvents.map((value, index) => {
        let eventStatistic = null;

        if (this.props.eventStatistics) {
          this.props.eventStatistics.forEach((subValue) => {
            if (subValue.event.id === value.id) {
              eventStatistic = subValue;
            }
          });

          return (
            <EventItem
              key={`pmb-task-${index}`}
              event={value}
              eventStatistic={eventStatistic}
            />
          );
        }

        return (
          <EventItem
            key={`pmb-events-${index}`}
            event={value}
          />
        );
      });
    }

    return (
      <Event>
        <SectionHeading>
          Upcoming PMB Events
        </SectionHeading>
        {activeEventsItem}
        <SectionHeading>
          Past PMB Events
        </SectionHeading>
        {overdueEventsItem}
      </Event>
    );
  }
}

EventList.propTypes = {
  events: React.PropTypes.array,
  eventStatistics: React.PropTypes.array,
};

export default EventList;
