const http = require('http');
const port = process.env.PORT || 8080;
console.log('port', port);
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World');
}).listen(port);