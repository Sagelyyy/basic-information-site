const http = require('http');
const url = require('url');
const fs = require('fs');

const page404 = fs.readFileSync("404.html", "utf8", (err, data) => {
    if (err) throw err;
    return data
})

http.createServer((req, res) => {
    let q = url.parse(req.url, true)
    let filename = "." + q.pathname

    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(400, { 'Content-Type': 'text/html' })
            res.write(page404)
            return res.end()
        }
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        return res.end()
    })
}).listen(8080)