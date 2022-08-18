const http = require('http')
const fs = require('fs')
const url = require('url')
const Client = require('pg')
const assert = require('assert')
const client = new Client({
	user: 'postgres',
	host: 'localhost',
	port: '5432',
	database: 'mydb'
})
http.createServer((req, res) => {
	fs.readFile("." + url.parse(req.url, true).pathname + req.params, (err, data) => {
		if(err) throw err
		res.end(data)

	})
}).listen(4001)
