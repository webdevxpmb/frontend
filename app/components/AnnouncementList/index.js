/**
*
* AnnouncementList
*
*/

import React from 'react';
import Card from 'components//Card';

import {
  Announcement,
} from './styled';

class AnnouncementList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.state = {
      currentPage: 0,
    };

    this.setCurrentPage = this.setCurrentPage.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }


  setCurrentPage(index) {
    this.setState({
      currentPage: index,
    });
  }

  next() {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  }

  prev() {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  }


  render() {
    return (
      <Card>
        <Announcement>
        </Announcement>
      </Card>
    );
  }
}

AnnouncementList.propTypes = {

};

export default AnnouncementList;
