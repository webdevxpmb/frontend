/*
 *
 * EventPage actions
 *
 */

import {
  FETCH_EVENTS,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_FAILED,
  FETCH_EVENT_STATISTICS,
  FETCH_EVENT_STATISTICS_SUCCESS,
  FETCH_EVENT_STATISTICS_FAILED,
} from './constants';

export function fetchEvents() {
  return {
    type: FETCH_EVENTS,
  };
}

export function fetchEventsSuccess(data) {
  return {
    type: FETCH_EVENTS_SUCCESS,
    events: data,
  };
}

export function fetchEventsFailed() {
  return {
    type: FETCH_EVENTS_FAILED,
  };
}

export function fetchEventStatistics() {
  return {
    type: FETCH_EVENT_STATISTICS,
  };
}

export function fetchEventStatisticsSuccess(data) {
  return {
    type: FETCH_EVENT_STATISTICS_SUCCESS,
    eventStatistics: data,
  };
}

export function fetchEventStatisticsFailed() {
  return {
    type: FETCH_EVENT_STATISTICS_FAILED,
  };
}
