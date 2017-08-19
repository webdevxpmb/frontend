/*
 *
 * AnnouncementPage actions
 *
 */

import {
  FETCH_ANNOUNCEMENTS,
  FETCH_ANNOUNCEMENTS_SUCCESS,
  FETCH_ANNOUNCEMENTS_FAILED,
  FETCH_ANNOUNCEMENT_CONTENT,
  FETCH_ANNOUNCEMENT_CONTENT_SUCCESS,
  FETCH_ANNOUNCEMENT_CONTENT_FAILED,
} from './constants';

export function fetchAnnouncements() {
  return {
    type: FETCH_ANNOUNCEMENTS,
  };
}

export function fetchAnnouncementsSuccess(announcements) {
  return {
    type: FETCH_ANNOUNCEMENTS_SUCCESS,
    announcements,
  };
}

export function fetchAnnouncementsFailed() {
  return {
    type: FETCH_ANNOUNCEMENTS_FAILED,
  };
}

export function fetchAnnouncementContent() {
  return {
    type: FETCH_ANNOUNCEMENT_CONTENT,
  };
}

export function fetchAnnouncementContentSuccess(announcement) {
  return {
    type: FETCH_ANNOUNCEMENT_CONTENT_SUCCESS,
    announcement,
  };
}

export function fetchAnnouncementContentFailed() {
  return {
    type: FETCH_ANNOUNCEMENT_CONTENT_FAILED,
  };
}
