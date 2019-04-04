self.importScripts('sha256.min.js');
self.onmessage = function(e) {
	var timer_worker_timeout = setTimeout(function() {
		console.log('worker started');
		var hash = e.data;
		console.time('recursive_hashing');
		for(var i=0; i<100000; i++){
			hash = sha256(hash);
		}
		console.timeEnd('recursive_hashing');
		self.postMessage(hash);
	}, 500);
}