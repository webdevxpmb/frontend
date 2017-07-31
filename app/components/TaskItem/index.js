/**
*
* TaskItem

  props shape

  task: {
    id: 1,
    name: 'Kenalan (50% dari Kuota minimum)',
    description: 'tugas',
    start_time: '2017-07-13T01:00:00+07:00',
    end_time: '2017-07-31T12:00:00+07:00',
    is_kenalan: true,
    expected_amount: 100,
    created_at: '2017-07-27T15:32:45.939294',
    updated_at: '2017-07-27T15:34:38.327088',
  },
  submission: { OPTIONAL
    id: 0,
    user: 19,
    task: 1,
    file_link: 'https://drive.google.com/drive/u/0/my-drive',
  },
*
*/

import React from 'react';

import Card from 'components/Card';
import ProgressBar from 'components/ProgressBar';
import DateString from 'components/DateString';

import {
  Task,
} from './styled';


class TaskItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Task>
        <Card>
          <div className="taskItem">
            <h1>{this.props.task.name}</h1>
            <h2><span className="icon-event" />Deadline: <DateString date={this.props.task.end_time} /> Server Time</h2>
            <p>{this.props.task.description}</p>
            {
              !this.props.task.is_kenalan &&
              <div className="submission">
                <h3><span className="icon-task" />Current Submission:</h3>
                <div className="current">
                  {
                    this.props.submission &&
                    <a href={this.props.submission.file_link} target="_blank">
                      Click Here
                    </a>
                  }
                  {
                    !this.props.submission &&
                    'No submission has been submited'
                  }
                </div>
                <h3><span className="icon-send" />Submission Box:</h3>
                <div className="box">
                  <input
                    type="text"
                    placeholder="Paste your submission link here (Starts with HTTP or HTTPS)"
                  />
                  <button
                    className="submit"
                  >
                    <span className="icon-send" /> Submit
                  </button>
                </div>
              </div>
            }
            {
              this.props.task.is_kenalan &&
              <div className="progress">
                <ProgressBar title="Percentage" current={65} max={this.props.task.expected_amount} />
              </div>
            }
          </div>
        </Card>
      </Task>
    );
  }
}

TaskItem.propTypes = {
  task: React.PropTypes.object.isRequired,
  submission: React.PropTypes.object,
};

export default TaskItem;
