const parseCreationTimeStamp = require('./utils').parseCreationTimeStamp
var sa = require('superagent')

module.exports = function (options, axios) {
  return {
    create: function (data) {
      return axios.put(
        '/TimelineEventAttachment/Create',
        {
          TenantId: options.TenantId,
          AuthToken: options.AuthToken,
          ...data
        }
      ).then(parseCreationTimeStamp)
    },
    editTitle: function (attachmentId, title) {
      return axios.put(
        '/TimelineEventAttachment/EditTitle',
        {
          TenantId: options.TenantId,
          AuthToken: options.AuthToken,
          AttachmentId: attachmentId,
          Title: title
        }
      ).then(parseCreationTimeStamp)
    },
    delete: function (attachmentId) {
      return axios.put(
        '/TimelineEventAttachment/Delete',
        {
          TenantId: options.TenantId,
          AuthToken: options.AuthToken,
          AttachmentId: attachmentId,
        }
      )
    },
    get: function (attachmentId) {
      return axios.get(
        '/TimelineEventAttachment/GetAttachment',
        {
          headers: {
            TenantId: options.TenantId,
            AuthToken: options.AuthToken,
            AttachmentId: attachmentId
          }
        }
      )
    },
    generateUploadLink: function (attachmentId) {
      return axios.get(
        '/TimelineEventAttachment/GenerateUploadPresignedUrl',
        {
          headers: {
            TenantId: options.TenantId,
            AuthToken: options.AuthToken,
            AttachmentId: attachmentId
          }
        }
      )
    },
    generateGetLink: function (attachmentId) {
      return axios.get(
        '/TimelineEventAttachment/GenerateGetPresignedUrl',
        {
          headers: {
            TenantId: options.TenantId,
            AuthToken: options.AuthToken,
            AttachmentId: attachmentId,
          }
        }
      )
    },
    upload: function (link, file) {
      return new Promise(function (resolve, reject) {
        sa.put(link).send(file).end(function (err, res) {
          if (err) return reject(err)
          resolve(res)
        })
      })
    }
  }
}
