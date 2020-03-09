const http = require("http")
const port = process.env.PORT || 3000

const server = http.createServer((request, response) => {
  // Lower case, remove query string, and training slash from request URI.
  const path = request.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
  switch(path) {
    case '':
      response.writeHead(200, { 'Content-Type': 'text/plain' })
      response.end('Homepage')
      break
    case '/about':
      // TODO
      break
  }
})

server.listen(port, () =>
  console.log(`Server started on port ${port}; ` + "Press CTRL-C to terminate.")
)
