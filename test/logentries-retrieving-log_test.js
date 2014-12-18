'use strict';

var LogentriesRetrievingLog = require('../');
var assert = require('power-assert');
var nock = require('nock');

describe('logentriesRetrievingLog', function () {
  var retriever;

  before(function(done){
    retriever = LogentriesRetrievingLog({ accountKey: '__YOUR_KEY__', logAddr: '__LOG_ADDR__' });
    done();
  });

  it('should retrieve logs length', function (done) {
    // https://pull.logentries.com/__YOUR_KEY__/__LOG_ADDR__/?limit=10
    nock('https://pull.logentries.com')
      .get('/__YOUR_KEY__/__LOG_ADDR__/?limit=10')
      .replyWithFile(200, __dirname + '/logentries-com-retrieved-logs.txt');
    retriever.getLogs({limit: 10}, function(err, response, body){
      assert.equal(body.trim().split("\n").length, 10);
      done();
    });
  });

  it('should retrieve logs contents', function (done) {
    // https://pull.logentries.com/__YOUR_KEY__/__LOG_ADDR__/?limit=10
    nock('https://pull.logentries.com')
      .get('/__YOUR_KEY__/__LOG_ADDR__/?limit=10')
      .replyWithFile(200, __dirname + '/logentries-com-retrieved-logs.txt');
    retriever.getLogs({limit: 10}, function(err, response, body){
      assert.equal(
        body.trim().split("\n")[3],
        "131 <45>1 2014-12-16T13:00:48.084480+00:00 heroku web.1 - - Stopping all processes with SIGTERM"
      );
      done();
    });
  });
});
