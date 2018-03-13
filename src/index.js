var timelines = require('./timelines.js')
var timelineEvents = require('./timeline-events.js')
var axios = require('axios')

var setupAxios = function (options) {
  axios.defaults.baseURL = options.endpoint
  axios.interceptors.response.use(function (response) {
    if (typeof response.data === 'string') {
      var data
      try {
        data = JSON.parse(response.data) // in case of double quoted JSON
      } catch (e) {
        data = {message: response.data} // in case of string response
      }
    } else {
      return response.data
    }
  }, function (error) {
    return Promise.reject(error.response ? error.response.data : error)
  })
}

class TimelineAPI {
  constructor (options) {
    if (!options.endpoint)
      options.endpoint = 'https://gcu.ideagen-development.com'
    setupAxios(options)
    this.Timelines = timelines(options, axios)
    this.TimelineEvents = timelineEvents(options, axios)
  }
}

module.exports = TimelineAPI
