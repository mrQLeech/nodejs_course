var http = require ('http');
var app = require('./app');

http.createServer(app.handelRequest).listen(44444);