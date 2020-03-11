const http = require("http")
const fs = require("fs")
const port = process.env.PORT || 3000

function serveStaticFile(response, path, contentType, responseCode = 200) {
  fs.readFile(__dirname + path, (err, data) => {
    if (err) {
      response.writeHead(500, { "Content-Type": "text/plain" })
      return response.end("500 - Internal Error")
    }
    response.writeHead(responsecode, { "Content-type": contentType })
    response.end(data)
  })
}

const server = http.createServer((request, response) => {
  // Lower case, remove query string, and training slash from request URI.
  const path = request.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase()
  switch (path) {
    case "":
      response.writeHead(200, { "Content-Type": "text/plain" })
      response.end("Homepage")
      break
    case "/about":
      response.writeHead(200, { "content-Type": "text/plain" })
      response.end("About")
      break
    default:
      response.writeHead(404, { "content-Type": "text/plain" })
      response.end("Not Found")
      break
  }
})

server.listen(port, () =>
  console.log(`Server started on port ${port}; ` + "Press CTRL-C to terminate.")
)

// function logger(place) {
//   console.log("Served " + place)
//   // Use logger(path) elsewhere?
// }

