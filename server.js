var http = require("http");
var url = require("url");

function start(route) {
  var server = http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		
		route(pathname);
		
    response.writeHead(200, {"Content-type": "text/html"});
    response.write("Hello World\n");
    response.end();
  });

  server.listen(8080);
  console.log("server has started.");
}

exports.start = start;
