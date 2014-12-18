/*
 * logentries-retrieving-log
 * https://github.com/sanemat/node-logentries-retrieving-log
 *
 * Copyright (c) 2014 sanemat
 * Licensed under the MIT license.
 */

var request = require('request');
var fmt = require('util').format;

function LogentriesRetriever(credentials) {
  'use strict';

  if (!(this instanceof LogentriesRetriever)) {
    return new LogentriesRetriever(credentials);
  }
  credentials = credentials || {};
  // TODO: Normarize keys
  this.accountKey = credentials.accountKey || '';
  this.logAddr = credentials.logAddr || '';
}

LogentriesRetriever.prototype.getLogs = function(params, callback) {
  var data = {};
  data.lines = new Array(10);
  callback(null, data);
};

module.exports = LogentriesRetriever;
