'use strict';

var LogentriesRetrievingLog = require('../');
var assert = require('power-assert');

describe('logentriesRetrievingLog', function () {
  var retriever;

  before(function(done){
    retriever = LogentriesRetrievingLog({ accountKey: '__YOUR_KEY__', logAddr: '__LOG_ADDR__' });
    done();
  });

  it('should be awesome', function () {
    assert(logentriesRetrievingLog() == 'awesome');
  });

});
