'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var timelines = require('./timelines.js');
var timelineEvents = require('./timeline-events.js');
var axios = require('axios');

var setupAxios = function setupAxios(options) {
  axios.defaults.baseURL = options.endpoint;
  axios.interceptors.response.use(function (response) {
    if (typeof response.data === 'string') {
      return JSON.parse(response.data);
    } else {
      return response.data;
    }
  }, function (error) {
    return Promise.reject(error.response ? error.response.data : error);
  });
};

var TimelineAPI = function TimelineAPI(options) {
  _classCallCheck(this, TimelineAPI);

  if (!options.endpoint) options.endpoint = 'https://gcu.ideagen-development.com';
  setupAxios(options);
  this.Timelines = timelines(options, axios);
  this.TimelineEvents = timelineEvents(options, axios);
};

module.exports = TimelineAPI;