var http = require("http");
var url = require("url");

function start(route, handle) {
  var server = http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		
    route(handle, pathname, response);
  });

  server.listen(8080);
  console.log("server has started.");
}

exports.start = start;
