'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var moment = require('moment');

var parseCreationTimeStamp = function parseCreationTimeStamp(item) {
  var timeString = item.CreationTimeStamp;
  var epochTicks = 621355968000000000;
  var ticksPerMilisecond = 10000;
  var time = parseInt(timeString, 10);

  var isoString = moment((time - epochTicks) / ticksPerMilisecond).toISOString();

  return _extends({}, item, {
    CreationTimeStamp: isoString
  });
};

module.exports = {
  parseCreationTimeStamp: parseCreationTimeStamp
};