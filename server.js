import config, {nodeEnv, logStars} from './config';
import http from 'http';

import express from 'express';
const server = express();

server.set('view engine', 'ejs');

/*try to find better server source code.
http.createServer((req, res) => {
  res.writeHead(500, {'Content-Type': 'text/plain'});
  res.end('index');
}).listen(1337, '127.0.0.1');
*/

server.get(1337,(req, res) => {
    res.render('index');
};



console.log('Server running at http://127.0.0.1:1337/');