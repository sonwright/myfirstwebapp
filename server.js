var http = require("http");
var url = require("url");

function start(route, handle) {
  var server = http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		
    response.writeHead(200, {"Content-type": "text/html"});
		var content = route(handle, pathname);
		response.write(content);
    //response.write("Hello World\n");
    response.end();
  });

  server.listen(8080);
  console.log("server has started.");
}

exports.start = start;
