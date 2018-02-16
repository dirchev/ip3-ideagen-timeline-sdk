module.exports = function () {
  this.requests = []
}

module.exports.prototype.put = function (route, data, config) {
  this.requests.push({
    method: 'PUT',
    route,
    data,
    config
  })
}

module.exports.prototype.get = function (route, config) {
  this.requests.push({
    method: 'GET',
    route,
    config
  })
}
