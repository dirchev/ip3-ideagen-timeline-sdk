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
      )
    },
    create: function (data) {
      return axios.put(
        '/TimelineEvent/Create',
        {
          TenantId: options.TenantId,
          AuthToken: options.AuthToken,
          ...data
        }
      )
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
      )
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
      )
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
      )
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
      )
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
    }
  }
}
