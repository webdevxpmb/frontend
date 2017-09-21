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
import TaskItem from 'components/TaskItem';
import Footer from 'components/Footer';
import SectionHeading from 'components/SectionHeading';
import makeSelectTaskPage from './selectors';


import {
  fetchTasks,
  fetchSubmissions,
  fetchUserStatistics,
  submit,
} from './actions';

import {
  Task,
} from './styled';

const Moment = window.moment;

export class TaskPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.fetchTasks();
    this.props.fetchSubmissions();
    this.props.fetchUserStatistics();
  }

  render() {
    let activeTaskItems = (<div className="emptyState">No Tasks Available</div>);
    let overdueTaskItems = (<div className="emptyState">No Tasks Available</div>);

    const tasks = this.props.taskPage.tasks;
    const now = new Moment();

    if (!isEmpty(tasks)) {
      const activeTasks = tasks.filter((value) => {
        const deadline = new Moment(value.end_time);

        if (deadline.diff(now) > 0) {
          return true;
        }

        return false;
      });

      const overdueTasks = tasks.filter((value) => {
        const deadline = new Moment(value.end_time);

        if (deadline.diff(now) > 0) {
          return false;
        }

        return true;
      });

      activeTaskItems = activeTasks.map((value, index) => {
        let itemSubmission = null;
        let itemStatistic = null;

        this.props.taskPage.submissions.forEach((subValue) => {
          if (subValue.task.id === value.id) {
            itemSubmission = subValue;
          }
        });

        this.props.taskPage.statistics.forEach((subValue) => {
          if (subValue.task.id === value.id) {
            itemStatistic = subValue;
          }
        });

        if (itemSubmission) {
          return (
            <TaskItem key={`pmb-task-${index}`} task={value} submission={itemSubmission} submit={this.props.submit} user={this.props.Global.user} />
          );
        }

        if (itemStatistic) {
          return (
            <TaskItem key={`pmb-task-${index}`} task={value} statistic={itemStatistic} user={this.props.Global.user} />
          );
        }

        return (
          <TaskItem key={`pmb-task-${index}`} task={value} submit={this.props.submit} user={this.props.Global.user} />
        );
      });

      overdueTaskItems = overdueTasks.map((value, index) => {
        let itemSubmission = null;
        let itemStatistic = null;

        this.props.taskPage.submissions.forEach((subValue) => {
          if (subValue.task.id === value.id) {
            itemSubmission = subValue;
          }
        });

        this.props.taskPage.statistics.forEach((subValue) => {
          if (subValue.task.id === value.id) {
            itemStatistic = subValue;
          }
        });

        if (itemSubmission) {
          return (
            <TaskItem overdue key={`pmb-task-${index}`} task={value} submission={itemSubmission} submit={this.props.submit} user={this.props.Global.user} />
          );
        }

        if (itemStatistic) {
          return (
            <TaskItem overdue key={`pmb-task-${index}`} task={value} statistic={itemStatistic} user={this.props.Global.user} />
          );
        }

        return (
          <TaskItem overdue key={`pmb-task-${index}`} task={value} submit={this.props.submit} user={this.props.Global.user} />
        );
      });
    }

    return (
      <Task>
        <Helmet
          title="Task"
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
  fetchUserStatistics: PropTypes.func.isRequired,
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
    fetchUserStatistics: () => dispatch(fetchUserStatistics()),
    submit: (data, isNew) => dispatch(submit(data, isNew)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);
