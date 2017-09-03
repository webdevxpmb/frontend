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
import DateString from 'components/DateString';

import {
  Task,
  Bar,
} from './styled';

const Moment = window.moment;

class TaskItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.state = {
      submissionInput: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.submission) {
      if (this.props.submission) {
        if (nextProps.submission.file_link !== this.props.submission.file_link) {
          this.setState({
            submissionInput: 'Submitted!',
          });

          setTimeout(() => {
            this.setState({
              submissionInput: '',
            });
          }, 1000);
        }
      } else if (this.state.submissionInput) {
        this.setState({
          submissionInput: 'Submitted!',
        });

        setTimeout(() => {
          this.setState({
            submissionInput: '',
          });
        }, 1000);
      }
    }
  }

  onChange(event) {
    this.setState({
      submissionInput: event.target.value,
    });
  }

  onSubmit() {
    const isNew = !this.props.submission;

    const data = {
      user: parseInt(this.props.user.user_id, 10),
      task: this.props.task.id,
      file_link: this.state.submissionInput,
    };

    if (!isNew) {
      data.id = this.props.submission.id;
    }

    this.props.submit(data, isNew);
  }

  render() {
    const isEmpty = this.state.submissionInput === '';
    const isValid = this.state.submissionInput.toLowerCase().startsWith('http://') || this.state.submissionInput.toLowerCase().startsWith('https://');

    const deadlineTime = new Moment(this.props.task.end_time);
    const now = new Moment();

    const overdue = deadlineTime.diff(now) <= 0;

    const isSubmitted = this.state.submissionInput === 'Submitted!';
    const isEqualInput = this.props.submission ? this.state.submissionInput === this.props.submission.file_link : false;

    return (
      <Task isEmpty={isEmpty} isValid={isValid} overdue={overdue} isSubmitted={isSubmitted}>
        <Card>
          <div className="taskItem">
            <h1>{this.props.task.name}</h1>
            <h2><span className="icon-event" />Deadline: <DateString date={this.props.task.end_time} /> Server Time</h2>
            <p dangerouslySetInnerHTML={{ __html: this.props.task.description }} />
            {
              this.props.task.attachment_link &&
              <h4>
                <a href={this.props.task.attachment_link} target="_blank">
                  <span className="icon-link" />Task Attachment
                </a>
              </h4>
            }
            {
              this.props.user.role === 'mahasiswa baru' && !this.props.task.is_kenalan &&
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
                {
                  !this.props.overdue &&
                  <h3><span className="icon-send" />Submission Box:</h3>
                }
                {
                  !this.props.overdue &&
                  <div className="box">
                    <input
                      value={this.state.submissionInput}
                      type="text"
                      placeholder="Paste your submission link here (Starts with HTTP or HTTPS)"
                      onChange={this.onChange}
                      disabled={overdue}
                    />
                    <button
                      className="submit"
                      disabled={(!isValid && isEmpty) || (!isValid && !isEmpty) || overdue || isSubmitted || isEqualInput}
                      onClick={this.onSubmit}
                    >
                      <span className="icon-send" /> Submit
                    </button>
                  </div>
                }
              </div>
            }
            {
              this.props.user.role === 'mahasiswa baru' && this.props.task.is_kenalan && this.props.statistic &&
              <div className="progress">
                <div className="entry">
                  <Bar
                    approved={(this.props.statistic.amount_approved_omega / this.props.task.expected_amount_omega) * 100}
                    pending={(this.props.statistic.amount_omega / this.props.task.expected_amount_omega) * 100}
                  >
                    <div className="info">
                      <h3>Progress Omega: <span>{Math.floor((this.props.statistic.amount_approved_omega / this.props.task.expected_amount_omega) * 100)}%</span> ({this.props.statistic.amount_approved_omega}/{this.props.statistic.amount_omega}/{this.props.task.expected_amount_omega})</h3>
                    </div>
                    <div className="max">
                      <div className="pending" />
                      <div className="approved" />
                    </div>
                  </Bar>
                </div>
                <div className="entry">
                  <Bar
                    approved={(this.props.statistic.amount_approved_capung / this.props.task.expected_amount_capung) * 100}
                    pending={(this.props.statistic.amount_capung / this.props.task.expected_amount_capung) * 100}
                  >
                    <div className="info">
                      <h3>Progress Capung: <span>{Math.floor((this.props.statistic.amount_approved_capung / this.props.task.expected_amount_capung) * 100)}%</span> ({this.props.statistic.amount_approved_capung}/{this.props.statistic.amount_capung}/{this.props.task.expected_amount_capung})</h3>
                    </div>
                    <div className="max">
                      <div className="pending" />
                      <div className="approved" />
                    </div>
                  </Bar>
                </div>
                <div className="entry">
                  <Bar
                    approved={(this.props.statistic.amount_approved_orion / this.props.task.expected_amount_orion) * 100}
                    pending={(this.props.statistic.amount_orion / this.props.task.expected_amount_orion) * 100}
                  >
                    <div className="info">
                      <h3>Progress Orion: <span>{Math.floor((this.props.statistic.amount_approved_orion / this.props.task.expected_amount_orion) * 100)}%</span> ({this.props.statistic.amount_approved_orion}/{this.props.statistic.amount_orion}/{this.props.task.expected_amount_orion})</h3>
                    </div>
                    <div className="max">
                      <div className="pending" />
                      <div className="approved" />
                    </div>
                  </Bar>
                </div>
                <div className="entry">
                  <Bar
                    approved={(this.props.statistic.amount_approved_alumni / this.props.task.expected_amount_alumni) * 100}
                    pending={(this.props.statistic.amount_alumni / this.props.task.expected_amount_alumni) * 100}
                  >
                    <div className="info">
                      <h3>Progress 2013 --: <span>{Math.floor((this.props.statistic.amount_approved_alumni / this.props.task.expected_amount_alumni) * 100)}%</span> ({this.props.statistic.amount_approved_alumni}/{this.props.statistic.amount_alumni}/{this.props.task.expected_amount_alumni})</h3>
                    </div>
                    <div className="max">
                      <div className="pending" />
                      <div className="approved" />
                    </div>
                  </Bar>
                </div>
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
  user: React.PropTypes.object.isRequired,
  submission: React.PropTypes.object,
  statistic: React.PropTypes.object,
  submit: React.PropTypes.func,
  overdue: React.PropTypes.bool,
};

export default TaskItem;
