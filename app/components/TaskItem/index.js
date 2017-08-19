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
                <h3><span className="icon-send" />Submission Box:</h3>
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
              </div>
            }
            {
              this.props.user.role === 'mahasiswa baru' && this.props.task.is_kenalan &&
              <div className="progress">
                <div className="entry">
                  <ProgressBar title="Progress Omega" current={10} max={this.props.task.expected_amount_omega} />
                </div>
                <div className="entry">
                  <ProgressBar title="Progress Capung" current={10} max={this.props.task.expected_amount_capung} />
                </div>
                <div className="entry">
                  <ProgressBar title="Progress Orion" current={10} max={this.props.task.expected_amount_orion} />
                </div>
                <div className="entry">
                  <ProgressBar title="Progress Alumni" current={5} max={this.props.task.expected_amount_alumni} />
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
  submission: React.PropTypes.object,
  submit: React.PropTypes.func,
  user: React.PropTypes.object,
};

export default TaskItem;
