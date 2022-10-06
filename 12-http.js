const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(
      `<h1>Oopsie doopsie!</h1><p>There seems to be a problem mr.</p><a href='/'>Go back</a>`
    );
  }
});

server.listen(5000);
