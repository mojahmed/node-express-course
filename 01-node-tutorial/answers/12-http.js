

const http = require('http');

// Create HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, {'Content-Type': 'text/plain'});


  if (req.url === '/') {
    res.end('Welcome to the homepage!');
  } else if (req.url === '/about') {
    res.end('Welcome to the about page!');
  } else {
    res.end('Page not found in here!');
  }
});


const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});


