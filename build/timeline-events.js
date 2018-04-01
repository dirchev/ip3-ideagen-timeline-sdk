'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var parseCreationTimeStamp = require('./utils').parseCreationTimeStamp;

module.exports = function (options, axios) {
  return {
    get: function get(timelineEventId) {
      return axios.get('/TimelineEvent/GetTimelineEvent', {
        headers: {
          TenantId: options.TenantId,
          AuthToken: options.AuthToken,
          TimelineEventId: timelineEventId
        }
      }).then(parseCreationTimeStamp);
    },
    create: function create(data) {
      return axios.put('/TimelineEvent/Create', _extends({
        TenantId: options.TenantId,
        AuthToken: options.AuthToken
      }, data)).then(parseCreationTimeStamp);
    },
    editTitle: function editTitle(timelineEventId, title) {
      return axios.put('/TimelineEvent/EditTitle', {
        TenantId: options.TenantId,
        AuthToken: options.AuthToken,
        TimelineEventId: timelineEventId,
        Title: title
      }).then(parseCreationTimeStamp);
    },
    editDescription: function editDescription(timelineEventId, description) {
      return axios.put('/TimelineEvent/EditDescription', {
        TenantId: options.TenantId,
        AuthToken: options.AuthToken,
        TimelineEventId: timelineEventId,
        Description: description
      }).then(parseCreationTimeStamp);
    },
    editLocation: function editLocation(timelineEventId, location) {
      return axios.put('/TimelineEvent/EditLocation', {
        TenantId: options.TenantId,
        AuthToken: options.AuthToken,
        TimelineEventId: timelineEventId,
        Location: location
      }).then(parseCreationTimeStamp);
    },
    editDateTime: function editDateTime(timelineEventId, datetime) {
      return axios.put('/TimelineEvent/EditEventDateTime', {
        TenantId: options.TenantId,
        AuthToken: options.AuthToken,
        TimelineEventId: timelineEventId,
        EventDateTime: datetime
      }).then(parseCreationTimeStamp);
    },
    delete: function _delete(timelineEventId) {
      return axios.put('/TimelineEvent/Delete', {
        TenantId: options.TenantId,
        AuthToken: options.AuthToken,
        TimelineEventId: timelineEventId
      });
    },
    linkEvent: function linkEvent(timelineEventId, linkedToTimelineEventId) {
      return axios.put('/TimelineEvent/LinkEvents', {
        TenantId: options.TenantId,
        AuthToken: options.AuthToken,
        TimelineEventId: timelineEventId,
        LinkedToTimelineEventId: linkedToTimelineEventId
      });
    },
    unlinkEvent: function unlinkEvent(timelineEventId, unlinkedFromTimelineEventId) {
      return axios.put('/TimelineEvent/UnlinkEvents', {
        TenantId: options.TenantId,
        AuthToken: options.AuthToken,
        TimelineEventId: timelineEventId,
        UnlinkedFromTimelineEventId: unlinkedFromTimelineEventId
      });
    },
    getLinkedEvents: function getLinkedEvents(timelineEventId) {
      return axios.get('/TimelineEvent/GetLinkedTimelineEvents', {
        headers: {
          TenantId: options.TenantId,
          AuthToken: options.AuthToken,
          TimelineEventId: timelineEventId
        }
      });
    }
  };
};