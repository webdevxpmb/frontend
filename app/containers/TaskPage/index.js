/*
 *
 * TaskPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { isEmpty } from 'lodash';
import { createStructuredSelector } from 'reselect';
import makeSelectGlobal from 'globalSelectors';
import makeSelectTaskPage from './selectors';

import TaskItem from 'components/TaskItem';
import Footer from 'components/Footer';
import SectionHeading from 'components/SectionHeading';

import {
  fetchTasks,
  fetchSubmissions,
  submit,
} from './actions';

import {
  Task,
} from './styled';

const moment = window.moment;

export class TaskPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.fetchTasks();
    this.props.fetchSubmissions();
  }

  render() {
    let activeTaskItems = null;
    let overdueTaskItems = null;

    let tasks = this.props.taskPage.tasks;
    const now = new moment();

    if (!isEmpty(tasks)) {
      const activeTasks = tasks.filter((value) => {
        const deadline = new moment(value.end_time);

        if (deadline.diff(now) > 0) {
          return true;
        }

        return false;
      });

      const overdueTasks = tasks.filter((value) => {
        const deadline = new moment(value.end_time);

        if (deadline.diff(now) > 0) {
          return false;
        }

        return true;
      });

      activeTaskItems = activeTasks.map((value, index) => {
        let itemSubmission = null;

        if (this.props.taskPage.submissions) {
          this.props.taskPage.submissions.forEach((subValue) => {
            if (subValue.task.id === value.id) {
              itemSubmission = subValue;
            }
          });

          return (
            <TaskItem key={`pmb-task-${index}`} task={value} submission={itemSubmission} submit={this.props.submit} user={this.props.Global.user} />
          );
        }

        return (
          <TaskItem key={`pmb-task-${index}`} task={value} />
        );
      });

      overdueTaskItems = overdueTasks.map((value, index) => {
        let itemSubmission = null;

        if (this.props.taskPage.submissions) {
          this.props.taskPage.submissions.forEach((subValue) => {
            if (subValue.task.id === value.id) {
              itemSubmission = subValue;
            }
          });

          return (
            <TaskItem key={`pmb-task-${index}`} task={value} submission={itemSubmission} submit={this.props.submit} user={this.props.Global.user} />
          );
        }

        return (
          <TaskItem key={`pmb-task-${index}`} task={value} />
        );
      });
    }

    return (
      <Task>
        <Helmet
          title="TaskPage"
          meta={[
            { name: 'description', content: 'Description of TaskPage' },
          ]}
        />
        <div className="taskPageContent">
          <div className="taskList">
            <SectionHeading>
              <h1>Active Tasks</h1>
            </SectionHeading>
            {activeTaskItems}
            <SectionHeading>
              <h1>Finished Tasks</h1>
            </SectionHeading>
            {overdueTaskItems}
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </Task>
    );
  }
}

TaskPage.propTypes = {
  fetchTasks: PropTypes.func.isRequired,
  fetchSubmissions: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  Global: PropTypes.object.isRequired,
  taskPage: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Global: makeSelectGlobal(),
  taskPage: makeSelectTaskPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchTasks: () => dispatch(fetchTasks()),
    fetchSubmissions: () => dispatch(fetchSubmissions()),
    submit: (data, isNew) => dispatch(submit(data, isNew)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);
