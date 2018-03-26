'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var parseCreationTimeStamp = require('./utils').parseCreationTimeStamp;

module.exports = function (options, axios) {
  return {
    getAll: function getAll() {
      return axios.get('/Timeline/GetTimelines', {
        headers: {
          'TenantId': options.TenantId,
          'AuthToken': options.AuthToken
        }
      }).then(function (timelines) {
        return timelines.map(parseCreationTimeStamp);
      });
    },
    get: function get(timelineId) {
      return axios.get('/Timeline/GetTimeline', {
        headers: {
          TenantId: options.TenantId,
          AuthToken: options.AuthToken,
          TimelineId: timelineId
        }
      }).then(parseCreationTimeStamp);
    },
    create: function create(data) {
      return axios.put('/Timeline/Create', _extends({
        TenantId: options.TenantId,
        AuthToken: options.AuthToken
      }, data)).then(parseCreationTimeStamp);
    },
    editTitle: function editTitle(id, title) {
      return axios.put('/Timeline/EditTitle', {
        TenantId: options.TenantId,
        AuthToken: options.AuthToken,
        TimelineId: id,
        Title: title
      }).then(parseCreationTimeStamp);
    },
    delete: function _delete(id) {
      return axios.put('/Timeline/Delete', {
        TenantId: options.TenantId,
        AuthToken: options.AuthToken,
        TimelineId: id
      });
    },
    linkEvent: function linkEvent(timelineId, eventId) {
      return axios.put('/Timeline/LinkEvent', {
        TenantId: options.TenantId,
        AuthToken: options.AuthToken,
        TimelineId: timelineId,
        EventId: eventId
      });
    },
    unlinkEvent: function unlinkEvent(timelineId, eventId) {
      return axios.put('/Timeline/UnlinkEvent', {
        TenantId: options.TenantId,
        AuthToken: options.AuthToken,
        TimelineId: timelineId,
        EventId: eventId
      });
    },
    getLinkedEvents: function getLinkedEvents(timelineId) {
      return axios.get('/Timeline/GetEvents', {
        headers: {
          TenantId: options.TenantId,
          AuthToken: options.AuthToken,
          TimelineId: timelineId
        }
      });
    }
  };
};