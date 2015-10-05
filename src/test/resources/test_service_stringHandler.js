var eb = require('vertx-js/bus');
var TestService = require('test-js/test_service-proxy');
var testService = new TestService(eb, 'someaddress');

testService.stringHandler(function(err, res) {
  if (err !== undefined) {
    vertx.eventBus().send("testaddress", "unexpected failure " + err);
  } else if (res != 'foobar') {
    vertx.eventBus().send("testaddress", "unexpected result " + res);
  } else {
    vertx.eventBus().send("testaddress", "ok");
  }
});

