/**
*
* AnnouncementList
*
*/

import React from 'react';
import styled from 'styled-components';

import AnnouncementItem from '../AnnouncementItem';

const Announcement = styled.div`
  .item {
    margin: 2em;
  }
`;

class AnnouncementList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Announcement>
        {this.props.items.map(item =>
          <AnnouncementItem
            className="item"
            header={item.header}
            article={item.article}
            publisher={item.publisher}
            date={item.date}
            time={item.time}
            countComment={item.countComment}
          />
        )}
      </Announcement>
    );
  }
}

AnnouncementList.propTypes = {

};

export default AnnouncementList;
