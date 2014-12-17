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

  it('should retrieve logs', function (done) {
    // https://pull.logentries.com/__YOUR_KEY__/__LOG_ADDR__/?limet=10
    nock('https://pull.logentries.com')
      .get('/__YOUR_KEY__/__LOG_ADDR__/?limet=10')
      .replyWithFile(200, __dirname + '/logentries-com-retrieved-logs.txt');
    retriever.get({limit: 10}, function(err, data){
      assert.equal(data.lines.length, 10);
      done();
    });
  });
});
