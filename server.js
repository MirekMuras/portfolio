
/*import http from 'http';

import express from 'express';
const server = express();

//server.set('view engine', 'ejs');

//try to find better server source code.
http.createServer((req, res) => {
  res.writeHead(500, {'Content-Type': 'text/plain'});
  res.end('index');
}).listen(1337, '127.0.0.1');



console.log('Server running at http://127.0.0.1:1337/');*/

import config from './config';

import express from 'express';
const server = express();

server.get('/', (req, res) => {
  res.send("hello");
});

server.get('/about.html', (req, res) => {
  res.send("The about page");
});

server.listen(config.port, () => {
  console.info('Express on port ', config.port);
});