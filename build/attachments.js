'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var parseCreationTimeStamp = require('./utils').parseCreationTimeStamp;
var sa = require('superagent');

module.exports = function (options, axios) {
  return {
    create: function create(data) {
      return axios.put('/TimelineEventAttachment/Create', _extends({
        TenantId: options.TenantId,
        AuthToken: options.AuthToken
      }, data)).then(parseCreationTimeStamp);
    },
    editTitle: function editTitle(attachmentId, title) {
      return axios.put('/TimelineEventAttachment/EditTitle', {
        TenantId: options.TenantId,
        AuthToken: options.AuthToken,
        AttachmentId: attachmentId,
        Title: title
      }).then(parseCreationTimeStamp);
    },
    delete: function _delete(attachmentId) {
      return axios.put('/TimelineEventAttachment/Delete', {
        TenantId: options.TenantId,
        AuthToken: options.AuthToken,
        AttachmentId: attachmentId
      });
    },
    get: function get(attachmentId) {
      return axios.get('/TimelineEventAttachment/GetAttachment', {
        headers: {
          TenantId: options.TenantId,
          AuthToken: options.AuthToken,
          AttachmentId: attachmentId
        }
      });
    },
    generateUploadLink: function generateUploadLink(attachmentId) {
      return axios.get('/TimelineEventAttachment/GenerateUploadPresignedUrl', {
        headers: {
          TenantId: options.TenantId,
          AuthToken: options.AuthToken,
          AttachmentId: attachmentId
        }
      });
    },
    generateGetLink: function generateGetLink(attachmentId) {
      return axios.get('/TimelineEventAttachment/GenerateGetPresignedUrl', {
        headers: {
          TenantId: options.TenantId,
          AuthToken: options.AuthToken,
          AttachmentId: attachmentId
        }
      });
    },
    upload: function upload(link, file) {
      return new Promise(function (resolve, reject) {
        sa.put(link).send(file).end(function (err, res) {
          if (err) return reject(err);
          resolve(res);
        });
      });
    }
  };
};