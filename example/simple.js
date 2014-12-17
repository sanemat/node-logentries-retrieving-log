/*
 * logentries-retrieving-log
 * https://github.com/sanemat/node-logentries-retrieving-log
 *
 * Copyright (c) 2014 sanemat
 * Licensed under the MIT license.
 */

'use strict';

var logentriesRetrievingLog = require('../');
var retriever = logentriesRetrievingLog({accountKey: '__YOUR_KEY__', logAddr: '__LOG_ADDR__'});
retriever.get({limit: 10}, function(err, data){
  data.lines = [
    "145 <45>1 2014-12-16T13:00:45.518543+00:00 heroku api - - Add logentries:tryit add-on by o.gata.ken@gmail.com",
    "137 <45>1 2014-12-16T13:00:45.518543+00:00 heroku api - - Release v11 created by o.gata.ken@gmail.com",
    "129 <45>1 2014-12-16T13:00:46.043594+00:00 heroku web.1 - - State changed from up to starting",
    "131 <45>1 2014-12-16T13:00:48.084480+00:00 heroku web.1 - - Stopping all processes with SIGTERM",
    "124 <45>1 2014-12-16T13:00:49.345190+00:00 heroku web.1 - - Process exited with status 0",
    "155 <45>1 2014-12-16T13:00:51.140262+00:00 heroku web.1 - - Starting process with command `bin/hubot -a slack -n hubot`",
    "134 <190>1 2014-12-16T13:00:56.108557+00:00 app web.1 - - coffeelint@1.7.1 node_modules/coffeelint",
    "117 <190>1 2014-12-16T13:00:56.108575+00:00 app web.1 - - ├── ignore@2.2.15",
    "117 <190>1 2014-12-16T13:00:56.108577+00:00 app web.1 - - ├── resolve@0.6.3",
    "152 <190>1 2014-12-16T13:00:56.108578+00:00 app web.1 - - ├── optimist@0.6.1 (wordwrap@0.0.2, minimist@0.0.10)"
  ]
});

// API Downloads Documentation| Logentries Log Management Tools
// https://logentries.com/doc/api-download/
// Account Key API Documentation| Logentries Log Management
// https://logentries.com/doc/accountkey/
