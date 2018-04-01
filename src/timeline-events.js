const parseCreationTimeStamp = require('./utils').parseCreationTimeStamp

module.exports = function (options, axios) {
  return {
    get: function (timelineEventId) {
      return axios.get(
        '/TimelineEvent/GetTimelineEvent',
        {
          headers: {
            TenantId: options.TenantId,
            AuthToken: options.AuthToken,
            TimelineEventId: timelineEventId,
          }
        }
      ).then(parseCreationTimeStamp)
    },
    create: function (data) {
      return axios.put(
        '/TimelineEvent/Create',
        {
          TenantId: options.TenantId,
          AuthToken: options.AuthToken,
          ...data
        }
      ).then(parseCreationTimeStamp)
    },
    editTitle: function (timelineEventId, title) {
      return axios.put(
        '/TimelineEvent/EditTitle',
        {
          TenantId: options.TenantId,
          AuthToken: options.AuthToken,
          TimelineEventId: timelineEventId,
          Title: title
        }
      ).then(parseCreationTimeStamp)
    },
    editDescription: function (timelineEventId, description) {
      return axios.put(
        '/TimelineEvent/EditDescription',
        {
          TenantId: options.TenantId,
          AuthToken: options.AuthToken,
          TimelineEventId: timelineEventId,
          Description: description
        }
      ).then(parseCreationTimeStamp)
    },
    editLocation: function (timelineEventId, location) {
      return axios.put(
        '/TimelineEvent/EditLocation',
        {
          TenantId: options.TenantId,
          AuthToken: options.AuthToken,
          TimelineEventId: timelineEventId,
          Location: location
        }
      ).then(parseCreationTimeStamp)
    },
    editDateTime: function (timelineEventId, datetime) {
      return axios.put(
        '/TimelineEvent/EditEventDateTime',
        {
          TenantId: options.TenantId,
          AuthToken: options.AuthToken,
          TimelineEventId: timelineEventId,
          EventDateTime: datetime
        }
      ).then(parseCreationTimeStamp)
    },
    delete: function (timelineEventId) {
      return axios.put(
        '/TimelineEvent/Delete',
        {
          TenantId: options.TenantId,
          AuthToken: options.AuthToken,
          TimelineEventId: timelineEventId,
        }
      )
    },
    linkEvent: function (timelineEventId, linkedToTimelineEventId) {
      return axios.put(
        '/TimelineEvent/LinkEvents',
        {
          TenantId: options.TenantId,
          AuthToken: options.AuthToken,
          TimelineEventId: timelineEventId,
          LinkedToTimelineEventId: linkedToTimelineEventId,
        }
      )
    },
    unlinkEvent: function (timelineEventId, unlinkedFromTimelineEventId) {
      return axios.put(
        '/TimelineEvent/UnlinkEvents',
        {
          TenantId: options.TenantId,
          AuthToken: options.AuthToken,
          TimelineEventId: timelineEventId,
          UnlinkedFromTimelineEventId: unlinkedFromTimelineEventId,
        }
      )
    },
    getLinkedEvents: function (timelineEventId) {
      return axios.get(
        '/TimelineEvent/GetLinkedTimelineEvents',
        {
          headers: {
            TenantId: options.TenantId,
            AuthToken: options.AuthToken,
            TimelineEventId: timelineEventId
          }
        }
      )
    }
  }
}
