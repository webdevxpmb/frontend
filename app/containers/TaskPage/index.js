/*
 *
 * TaskPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectTaskPage from './selectors';

import TaskItem from 'components/TaskItem';
import Footer from 'components/Footer';
import SectionHeading from 'components/SectionHeading';

import {
  Task,
} from './styled';

export class TaskPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let taskItems = null;

    if (this.props.taskPage.tasks) {
      taskItems = this.props.taskPage.tasks.map((value, index) => {
        let itemSubmission = null;

        if (this.props.taskPage.submissions) {
          this.props.taskPage.submissions.forEach((subValue) => {
            if (subValue.task === value.id) {
              itemSubmission = subValue;
            }
          });

          return (
            <TaskItem task={value} submission={itemSubmission} />
          );
        }

        return (
          <TaskItem task={value} />
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
          <SectionHeading>
            <h1>My Tasks</h1>
          </SectionHeading>
          <div className="taskList">
            {taskItems}
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
  dispatch: PropTypes.func.isRequired,
  taskPage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  taskPage: makeSelectTaskPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);
