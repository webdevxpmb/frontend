import request, { API_PREFIX } from 'request';
import auth from './auth';

const user = auth.loggedIn();

if (user) {
  request.set('Authorization', `JWT ${user.token}`);
}

export function dateTime() {
  return request.get(`${API_PREFIX}/date-time/`);
}

export function getUserProfile() {
  return request.get(`${API_PREFIX}/user-profile/`);
}

export function setUserProfile(data) {
  return request.put(`${API_PREFIX}/user-profile/`).send(data);
}

export function getTasks() {
  return request.get(`${API_PREFIX}/task/`);
}

export function getSubmissions() {
  return request.get(`${API_PREFIX}/submission/`);
}

export function postSubmission(data) {
  return request.post(`${API_PREFIX}/submission/`).send(data);
}

export function putSubmission(params, data) {
  return request.put(`${API_PREFIX}/submission/${params}/`).send(data);
}

export function getEvents() {
  return request.get(`${API_PREFIX}/event/`);
}

export function getEventStatistics() {
  return request.get(`${API_PREFIX}/event-statistic/`);
}
