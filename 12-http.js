const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to home page");
    return;
  }

  if (req.url === "/about") {
    res.end("here is our short history");
    return;
  }
  res.end(`<h1>oops!</h1>
    <p>cant find the page</p>
    <a href="/">back home </a>`);
});
server.listen(4000);
