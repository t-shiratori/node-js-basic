var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', doRequest);
server.listen(9999);

function doRequest(req, res) {
        fs.readFile('../01.html', 'UTF-8', doRead);

        function doRead(err, data) {
                res.setHeader('Content-Type','text/html');
                res.write(data);
                res.end();
        }
}

console.log('Server running at http://127.0.0.1:9999/');
