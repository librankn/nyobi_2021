'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain; chaset=utf-8',
  });
  res.write(req.headers['user-agent']);
  res.end();
});
