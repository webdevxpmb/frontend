/**
*
* EventList
*
*/

import React from 'react';
import styled from 'styled-components';
import EventItem from 'components/EventItem';

const Event = styled.div`
  h4 {
    font-family: 'Montserrat';
    font-weight: 700;
  }

  .pagination {
    margin: auto;
    text-align: center;
  }
  .pagination button {
    padding: 1em;
    border-radius: ${(props) => props.theme.borderRadius};
    &.active {
      background: ${(props) => props.theme.blueGradient};
      color: white;
    }
  }
`;

class EventList extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
    const eventItems = [];
    const pagination = [];
    // const posts = this.props.posts.posts;
    const maxPostPerPage = 5;
    let postsRendered = 0;

    for (let i = this.state.currentPage * maxPostPerPage; i < 50; i += 1) {
      if (postsRendered < maxPostPerPage) {
        // const post = posts[i];

        eventItems.push(
          <EventItem
            key={i}
            className="item"
            title="BESOK EVAL WLEEEE!!"
            startTime="11.00 AM"
            endTime="11.00 PM"
            date={`${i}-September-2017`}
            location="Pacil"
            detail="LET'S ROCKKKK !!!! LET'S ROCKKKK !!!! LET'S ROCKKKK !!!! LET'S ROCKKKK !!!! LET'S ROCKKKK !!!! LET'S ROCKKKK !!!!LET'S ROCKKKK !!!!LET'S ROCKKKK !!!!LET'S ROCKKKK !!!!"
          />
        );
      }
      postsRendered += 1;
    }

    for (let i = 0; i < 50 / maxPostPerPage; i += 1) {
      const index = i;
      pagination.push(
        <button key={i} className={index === this.state.currentPage ? 'active' : ''} onClick={() => this.setCurrentPage(index)}>
          {i >= 0 && i + 1}
        </button>
      );
    }

    return (
      <Event>
        {eventItems}
        <div className="pagination">
          {pagination}
        </div>
      </Event>
    );
  }
}

EventList.propTypes = {

};

export default EventList;
