'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

module.exports = function (options, axios) {
  return {
    get: function get(timelineEventId) {
      return axios.get('/TimelineEvent/GetTimelineEvent', {
        headers: {
          TenantId: options.TenantId,
          AuthToken: options.AuthToken,
          TimelineEventId: timelineEventId
        }
      });
    },
    create: function create(data) {
      return axios.put('/TimelineEvent/Create', _extends({
        TenantId: options.TenantId,
        AuthToken: options.AuthToken
      }, data));
    },
    editTitle: function editTitle(timelineEventId, title) {
      return axios.put('/TimelineEvent/EditTitle', {
        TenantId: options.TenantId,
        AuthToken: options.AuthToken,
        TimelineEventId: timelineEventId,
        Title: title
      });
    },
    editDescription: function editDescription(timelineEventId, description) {
      return axios.put('/TimelineEvent/EditDescription', {
        TenantId: options.TenantId,
        AuthToken: options.AuthToken,
        TimelineEventId: timelineEventId,
        Description: description
      });
    },
    editLocation: function editLocation(timelineEventId, location) {
      return axios.put('/TimelineEvent/EditLocation', {
        TenantId: options.TenantId,
        AuthToken: options.AuthToken,
        TimelineEventId: timelineEventId,
        Location: location
      });
    },
    editDateTime: function editDateTime(timelineEventId, datetime) {
      return axios.put('/TimelineEvent/EditEventDateTime', {
        TenantId: options.TenantId,
        AuthToken: options.AuthToken,
        TimelineEventId: timelineEventId,
        EventDateTime: datetime
      });
    },
    delete: function _delete(timelineEventId) {
      return axios.put('/TimelineEvent/Delete', {
        TenantId: options.TenantId,
        AuthToken: options.AuthToken,
        TimelineEventId: timelineEventId
      });
    }
  };
};