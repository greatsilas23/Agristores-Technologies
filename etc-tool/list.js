const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer((req, res) => http.get('/login', (item) => fs.readFile("."+url.parse(req.url, true).pathname, (err, data) => {
if(err) console.log(err)
console.log('mean_interrarival:'.concat('1').concat('mean_service:').concat('1').concat('num_custs').concat('1').concat('num_in_q').concat('1').concat('area_server_status').concat('1').concat('server_utilization').concat('1'))
res.end(data)
return res.end()

})})).listen(4000, () => console.log('listening')) 
