import request, { API_PREFIX } from 'request';
import auth from './auth';

const user = auth.loggedIn();

if (user) {
  request.set('Authorization', `JWT ${user.token}`);
}

export function serverTime() {
  return request.get(`${API_PREFIX}/server-time/`);
}

export function getUserProfile(params) {
  return request.get(`${API_PREFIX}/user-profile/${params}/`);
}

export function setUserProfile(params, data) {
  return request.put(`${API_PREFIX}/user-profile/${params}/`).send(data);
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

export function getAnnouncements() {
  return request.get(`${API_PREFIX}/announcement/`);
}

export function getAnnouncementContent(params) {
  return request.get(`${API_PREFIX}/announcement/${params}/`);
}

export function generateToken() {
  return request.get(`${API_PREFIX}/generate-token/`);
}

export function getKenalan() {
  return request.get(`${API_PREFIX}/kenalan/`);
}

export function putKenalan(params, data) {
  return request.put(`${API_PREFIX}/kenalan/${params}/`).send(data);
}

export function createKenalan(data) {
  return request.post(`${API_PREFIX}/create-kenalan/`).send(data);
}

export function putDetailKenalan(params, data) {
  return request.put(`${API_PREFIX}/detail-kenalan/${params}/`).send(data);
}

export function getElementWords() {
  return request.get(`${API_PREFIX}/element-word/`);
}

export function postElementWords(data) {
  return request.post(`${API_PREFIX}/element-word/`).send(data);
}

export function getUserStatistic() {
  return request.get(`${API_PREFIX}/user-statistic/`);
}

export function createKenalanNonSSO() {
  return request.get(`${API_PREFIX}/create-kenalan-non-sso/`);
}
