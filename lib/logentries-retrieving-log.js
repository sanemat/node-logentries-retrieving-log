/*
 * logentries-retrieving-log
 * https://github.com/sanemat/node-logentries-retrieving-log
 *
 * Copyright (c) 2014 sanemat
 * Licensed under the MIT license.
 */

var request = require('request');
var fmt = require('util').format;
var trimmer = require('trimmer');

function LogentriesRetriever(credentials) {
  'use strict';

  if (!(this instanceof LogentriesRetriever)) {
    return new LogentriesRetriever(credentials);
  }
  credentials = credentials || {};
  this.accountKey = this._normalizeCredential(credentials.accountKey) || '';
  this.logAddr = this._normalizeCredential(credentials.logAddr) || '';
  this.apiHost = this._normalizeCredential(credentials.apiHost) || 'https://pull.logentries.com';
}

LogentriesRetriever.prototype._normalizeCredential = function(key) {
  if (typeof key === 'string' || key instanceof String) {
    return trimmer(key, '/');
  } else {
    return key;
  }

};

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
