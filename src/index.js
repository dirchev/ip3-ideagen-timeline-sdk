var timelines = require('./timelines.js')
var axios = require('axios')

var setupAxios = function (options) {
  axios.defaults.baseURL = options.endpoint
  axios.interceptors.response.use(function (response) {
    return JSON.parse(response.data)
  }, function (error) {
    return Promise.reject(error.response.data);
  })
}

class TimelineAPI {
  constructor (options) {
    if (!options.endpoint)
      options.endpoint = 'http://gcu.ideagen-development.com'
    setupAxios(options)
    this.Timelines = timelines(options, axios)
  }
}

module.exports = TimelineAPI
