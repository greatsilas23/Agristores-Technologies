<<<<<<< HEAD
<<<<<<< HEAD
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
=======
/* Date created: 12th


   Date modified: 17th
*/





const http = require('http')
const url = require('url')

const bodyParser = require('body-parser')











http.createServer("."+ bodyParser.parse(url.params, true).pathname, (req, res) => {
 res.end('Hello')
}).listen(4000)



     

>>>>>>> d4a44fdcf0ed3b402a5a51450008ad6832470434
=======
import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately


registerRootComponent(App);
>>>>>>> 9bdd65401a0b6140b6cb88c749e28d4b317f4afc
