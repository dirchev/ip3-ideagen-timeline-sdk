var timelines = require('./timelines.js')
var attachments = require('./attachments.js')
var timelineEvents = require('./timeline-events.js')
var axios = require('axios')

var setupAxios = function (options) {
  axios.defaults.baseURL = options.endpoint
  axios.interceptors.response.use(function (response) {
    var data
    if (typeof response.data === 'string') {
      try {
        data = JSON.parse(response.data) // in case of double quoted JSON
      } catch (e) {
        data = {result: response.data} // in case of string response
      }
    } else {
      data = response.data
    }
    return data
  }, function (error) {
    return Promise.reject(error.response ? error.response.data : error)
  })
}

class TimelineAPI {
  constructor (options) {
    if (!options.endpoint)
      options.endpoint = 'https://gcu.ideagen-development.com'
    setupAxios(options)
    if (options.debug) {
      require('axios-debug')(axios)
    }
    this.Timelines = timelines(options, axios)
    this.TimelineEvents = timelineEvents(options, axios)
    this.Attachments = attachments(options, axios)
  }
}

module.exports = TimelineAPI
