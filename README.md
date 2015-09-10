# logentries-retrieving-log
[![NPM version][npm-image]][npm-url] [![Travis-CI Status][travis-image]][travis-url] [![Appveyor Status][appveyor-image]][appveyor-url] [![Daviddm Status][daviddm-image]][daviddm-url]

Retrieve logs from `logentries.com`. Unofficial.


## Install

```bash
$ npm install --save logentries-retrieving-log
```


## Usage

```javascript
var LogentriesRetrievingLog = require('logentries-retrieving-log');
var retriever = new LogentriesRetrievingLog({accountKey: '__YOUR_KEY__', logAddr: '__LOG_ADDR__'});
retriever.getLogs({limit: 10}, function(err, response, body){
  body.split("\n");
  //#=> [
  //  "145 <45>1 2014-12-16T13:00:45.518543+00:00 heroku api - - Add logentries:tryit add-on by o.gata.ken@gmail.com",
  //  "137 <45>1 2014-12-16T13:00:45.518543+00:00 heroku api - - Release v11 created by o.gata.ken@gmail.com",
  //  "129 <45>1 2014-12-16T13:00:46.043594+00:00 heroku web.1 - - State changed from up to starting",
  //  "131 <45>1 2014-12-16T13:00:48.084480+00:00 heroku web.1 - - Stopping all processes with SIGTERM",
  //  "124 <45>1 2014-12-16T13:00:49.345190+00:00 heroku web.1 - - Process exited with status 0",
  //  "155 <45>1 2014-12-16T13:00:51.140262+00:00 heroku web.1 - - Starting process with command `bin/hubot -a slack -n hubot`",
  //  "134 <190>1 2014-12-16T13:00:56.108557+00:00 app web.1 - - coffeelint@1.7.1 node_modules/coffeelint",
  //  "117 <190>1 2014-12-16T13:00:56.108575+00:00 app web.1 - - ├── ignore@2.2.15",
  //  "117 <190>1 2014-12-16T13:00:56.108577+00:00 app web.1 - - ├── resolve@0.6.3",
  //  "152 <190>1 2014-12-16T13:00:56.108578+00:00 app web.1 - - ├── optimist@0.6.1 (wordwrap@0.0.2, minimist@0.0.10)",
  //  ""
  // ]
});
```

## API

### LogentriesRetrievingLog.getLogs([options])

You can set `start`, `end`, `filter` and `limit`. See below logentries' document.

## Documentation for Logentries

* [API Downloads Documentation](https://logentries.com/doc/api-download/)
* [Account Key API Documentation](https://logentries.com/doc/accountkey/)


## Contributing

Welcome.


## License

Copyright (c) 2014 sanemat. Licensed under the MIT license.


[travis-url]: https://travis-ci.org/sanemat/node-logentries-retrieving-log
[travis-image]: https://img.shields.io/travis/sanemat/node-logentries-retrieving-log/master.svg?style=flat-square&label=travis
[appveyor-url]: https://ci.appveyor.com/project/sanemat/node-logentries-retrieving-log/branch/master
[appveyor-image]: https://img.shields.io/appveyor/ci/sanemat/node-logentries-retrieving-log/master.svg?style=flat-square&label=appveyor
[npm-url]: https://npmjs.org/package/logentries-retrieving-log
[npm-image]: https://img.shields.io/npm/v/logentries-retrieving-log.svg?style=flat-square
[daviddm-url]: https://david-dm.org/sanemat/node-logentries-retrieving-log
[daviddm-image]: https://img.shields.io/david/sanemat/node-logentries-retrieving-log.svg?style=flat-square
