// example 1

// const express = require("express");
// const app = express();

// // req.method === "GET" && req.url === "/"
// // Route 1
// app.get("/", (req, res) => {
//   res.type("text/plain").send("Hello, World!");
// });

// // Route 2
// app.get("/json", (req, res) => {
//   res.json({ message: "This is a JSON response" });
// });

// // Middleware
// app.use((req, res) => {
//   res.status(404).type("text/plain").send("Route not found");
// });

// // Start server
// app.listen(4000, () => {
//   console.log("Express Server running at http://localhost:4000");
// });

// Example 2
const express = require("express");
const app = express();

// Middleware
app.use((req, res, next) => {
  console.log("app.use middleware 1");
  console.log(`Request received: ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware or route handler
});

// Route 1:
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head><title>HTML Response</title></head>
      <body>
        <h1>Hello, World!</h1>
        <p>This is an HTML response.</p>
      </body>
    </html>
  `);
});

// Route 2
app.get("/css", (req, res) => {
  res.type("text/css"); // Set Content-Type
  res.send(`body { background-color: lightblue; font-family: Arial; }`);
});

// Route 3
app.get("/js", (req, res) => {
  res.type("application/javascript");
  res.send(`console.log('Hello from the JavaScript response!');`);
});

// Route 4: JSON Response
app.get("/json", (req, res) => {
  res.json({ message: "Hello, JSON response!" });
});

app.get("/error", (req, res, next) => {
  const error = new Error("Something went wrong on the /error route!");
  error.status = 500; // Optional: Set a custom status code
  next(error); // Pass the error to the error-handling middleware
});

// Middleware to handle 404 errors
app.use((req, res, next) => {
  console.log("app.use middleware 2");
  res.status(404).send("Route not found");
});

// Middleware for centralized error handling
app.use((err, req, res, next) => {
  console.log("app.use middleware error 3");
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal Server Error");
});

// Start the server
app.listen(4000, () => {
  console.log("Express Server running at http://localhost:4000");
});
