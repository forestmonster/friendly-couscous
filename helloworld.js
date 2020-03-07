const http = require("http")
const port = process.env.PORT || 3000

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" })
  response.end("Hello world!")
})

server.listen(port, () =>
  console.log(`Server started on port ${port}; ` + "Press CTRL-C to terminate.")
)
