var http = require('http');
var fs = require('fs');
var url = require('url');


var server = http.createServer();
server.on('request', doRequest);
server.listen(9999);


function doRequest(req, res) {
        var path = url.parse(req.url);
        switch(path.pathname){

        case '/':
                fs.readFile('../02.html', 'UTF-8', doRead);
                function doRead(err, data) {
                        res.setHeader('Content-Type','text/html');
                        res.write(data);
                        res.end();
                }
                break;

        case '/helo':
                res.setHeader('Content-Type','text/plain');
                res.end('HELO!');
                break;

        default:
                res.setHeader('Content-Type','text/html');
                res.end('ERROR! - NO PAGE-');
                break;
        }
}
console.log('Server running at http://127.0.0.1:9999/');
