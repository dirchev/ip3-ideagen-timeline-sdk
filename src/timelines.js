module.exports = function (options, axios) {
  return {
    getAll: function () {
      return axios.get(
        '/Timeline/GetTimelines',
        {
          headers: {
            'TenantId': options.TenantId,
            'AuthToken': options.AuthToken
          }
        }
      )
    },
    get: function (timelineId) {
      return axios.get(
        '/Timeline/GetTimeline',
        {
          headers: {
            TenantId: options.TenantId,
            AuthToken: options.AuthToken,
            TimelineId: timelineId
          }
        }
      )
    },
    create: function (data) {
      return axios.put(
        '/Timeline/Create',
        {
          TenantId: options.TenantId,
          AuthToken: options.AuthToken,
          ...data
        }
      )
    },
    editTitle: function (id, title) {
      return axios.put(
        '/Timeline/EditTitle',
        {
          TenantId: options.TenantId,
          AuthToken: options.AuthToken,
          TimelineId: id,
          Title: title
        }
      )
    },
    delete: function (id) {
      return axios.put(
        '/Timeline/Delete',
        {
          TenantId: options.TenantId,
          AuthToken: options.AuthToken,
          TimelineId: id,
        }
      )
    },
    linkEvent: function (timelineId, eventId) {
      return axios.put(
        '/Timeline/LinkEvent',
        {
          TenantId: options.TenantId,
          AuthToken: options.AuthToken,
          TimelineId: timelineId,
          EventId: eventId,
        }
      )
    },
    unlinkEvent: function (timelineId, eventId) {
      return axios.put(
        '/Timeline/UnlinkEvent',
        {
          TenantId: options.TenantId,
          AuthToken: options.AuthToken,
          TimelineId: timelineId,
          EventId: eventId,
        }
      )
    },
    getLinkedEvents: function (timelineId) {
      return axios.get(
        '/Timeline/GetEvents',
        {
          headers: {
            TenantId: options.TenantId,
            AuthToken: options.AuthToken,
            TimelineId: timelineId
          }
        }
      )
    }
  }
}
