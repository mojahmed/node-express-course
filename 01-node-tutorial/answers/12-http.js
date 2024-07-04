// 12-http.js

const http = require('http');

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Determine the request URL and send different responses based on it
  if (req.url === '/') {
    res.end('Welcome to the homepage!');
  } else if (req.url === '/about') {
    res.end('Welcome to the about page!');
  } else {
    res.end('Page not found!');
  }
});

// Listen on port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
