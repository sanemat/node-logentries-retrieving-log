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
  this.apiHost = credentials.apiHost || 'https://pull.logentries.com';
}

LogentriesRetriever.prototype.getLogs = function(params, callback) {
  if (typeof params === 'function'){
    callback = params;
    params = {};
  }
  params = params || {};

  var requestUrl = fmt('%s/%s/%s/', this.apiHost, this.accountKey, this.logAddr);
  request({url: requestUrl, qs: params}, function(err, response, body){
    if (err || response.statusCode !== 200){
      err = err || 'response.statusCode not eq 200';
      callback(err, response, body);
      return;
    }
    callback(null, response, body);
  });
};

module.exports = LogentriesRetriever;
