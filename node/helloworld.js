var http = require('http');

var server = http.createServer();
server.on('request', doRequest);
server.listen(9999);


function doRequest(req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello World!');
        res.end();
}

console.log('Server running at http://127.0.0.1:9999/');
