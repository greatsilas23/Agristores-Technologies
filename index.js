const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer((req, res) => {
	fs.readFile("." + url.parse(req.url, true).pathname + req.params, (err, data) => {
		if(err) throw err
		res.end(data)
	})
}).listen(4001)
