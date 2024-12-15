// Example 1:

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/") {
//     // Plain text response
//     // data process
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello, World!");
//   } else if (req.method === "GET" && req.url === "/json") {
//     // JSON response
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ message: "This is a JSON response" }));
//   } else {
//     // 404 response for unmatched routes
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Route not found");
//   }
// });

// server.listen(3000, () => {
//   console.log("HTTP Server running at http://localhost:3000");
// });

// example 2
const http = require("http");
const url = require("url");

// Middleware function
const logger = (req) => {
  console.log(`Request received: ${req.method} ${req.url}`);
};

const handleError = (
  res,
  message = "Something went wrong",
  statusCode = 500
) => {
  res.writeHead(statusCode, { "Content-Type": "text/plain" });
  res.end(message);
};

const server = http.createServer((req, res) => {
  logger(req);

  const parsedUrl = url.parse(req.url, true);

  if (req.method === "GET" && parsedUrl.pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <!DOCTYPE html>
      <html>
        <head><title>HTML Response</title></head>
        <body>
          <h1>Hello, World!</h1>
          <p>This is an HTML response.</p>
        </body>
      </html>
    `);
  } else if (req.method === "GET" && parsedUrl.pathname === "/css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(`body { background-color: lightblue; font-family: Arial; }`);
  } else if (req.method === "GET" && parsedUrl.pathname === "/js") {
    res.writeHead(200, { "Content-Type": "application/javascript" });
    res.end(`console.log('Hello from the JavaScript response!');`);
  } else if (req.method === "GET" && parsedUrl.pathname === "/json") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello, JSON response!" }));
  } else {
    handleError(res, "Route not found", 404);
  }
});

// Start the server
server.listen(3000, () => {
  console.log("HTTP Server running at http://localhost:3000");
});
