const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, world!\n");
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed\n");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
