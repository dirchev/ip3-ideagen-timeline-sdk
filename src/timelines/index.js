var qs = require('querystring').stringify

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
    edit: function (id, data) {
      return axios.put(
        '/Timeline/EditTitle',
        {
          TenantId: options.TenantId,
          AuthToken: options.AuthToken,
          TimelineId: id,
          ...data
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
    }
  }
}
