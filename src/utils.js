var moment = require('moment')

var parseCreationTimeStamp = function (item) {
  const timeString = item.CreationTimeStamp
  const epochTicks = 621355968000000000
  const ticksPerMilisecond = 10000
  const time = parseInt(timeString, 10)

  const isoString = moment((time - epochTicks) / ticksPerMilisecond).toISOString()

  return {
    ...item,
    CreationTimeStamp: isoString
  }
}

module.exports = {
  parseCreationTimeStamp
}
