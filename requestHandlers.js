function start() {
	console.log("Request handler 'start' was called.");
	
	function sleep(ms) {
		var startTime = new Date().getTime(); //get current time
		while (new Date().getTime() < startTime + ms); //hog cpu
	}
	sleep (10000);
	return "Hello Start";
}

function upload() {
	console.log("Request handler 'upload' was called.");
	return "Hello Upload";
}

exports.start = start;
exports.upload = upload;