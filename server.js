
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
import apiRouter from './api';

import express from 'express';
const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index');
});

server.use('/api', apiRouter);
server.use(express.static('public'));


server.listen(config.port, () => {
  console.info('Express on port ', config.port);
});