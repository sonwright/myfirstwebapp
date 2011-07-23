var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(request, response) {
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " receieved.");
		
		request.setEncoding("utf8");
		
		request.addListener("data", function(postDataChunk) {
			postData +=postDataChunk;
			console.log(" ------------------------------------------- ");
			console.log("Received POST data chunk '" + postDataChunk + "'.");
			console.log(" ------------------------------------------- ");
		});
		
		request.addListener("end", function() {
			console.log("End -------");
			route (handle, pathname, response, postData);
		});
	
	}

  http.createServer(onRequest).listen(8888);
  console.log("server has started.");
}

exports.start = start;
