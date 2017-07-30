/**
*
* EventItem
*
*/

import React from 'react';
import Card from 'components/Card';
import ProgressBar from 'components/ProgressBar';
import EventCard from './style';


class EventItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };

    this.toggleDetail = this.toggleDetail.bind(this);
  }

  toggleDetail(currentCondition) {
    this.setState({
      toggle: !currentCondition,
    });
  }

  render() {
    return (
      <Card>
        <EventCard>
          <h1>{this.props.title}</h1>
          <h2><span className="icon-event" /> Tempat dan Waktu: {this.props.date}, {this.props.startTime} - {this.props.endTime}, {this.props.location}</h2>
          <ProgressBar
            title="Kehadiran"
            current="300"
            max="350"
          />
          <button className="toggle-detail" onClick={() => this.toggleDetail(this.state.toggle)}>
            <span className={this.state.toggle ? 'icon-up' : 'icon-down'} />
          </button>
          <div className={this.state.toggle ? 'active' : 'passive'} dangerouslySetInnerHTML={{ __html: this.props.detail }}></div>
        </EventCard>
      </Card>
    );
  }
}

EventItem.propTypes = {
  title: React.PropTypes.string,
  date: React.PropTypes.string,
  startTime: React.PropTypes.string,
  endTime: React.PropTypes.string,
  location: React.PropTypes.string,
  detail: React.PropTypes.string,
};

export default EventItem;
