const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dbConfig = require("./db.config.js")
const Sequelize = require("sequelize")
const db = require("./app/models")
const {Client} = require('pg')
db.sequelize.sync()

const client = new Client({
	host: 'localhost',
	user: 'postgresql',
	password: 'secret',
	database: 'demo',
	port: '5432'
})
client.connect(port, (err) => {
	if (err) {
		console.error(err)
	} else {
		console.log(`connected`)	
	}
})
const app = express()
const port = process.env.port || 4000
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
})
var myCorsOptions = {
    origin: "http://localhost:19006"
}
app.use(cors(myCorsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use()
app.get("/", (req, res) => {
    res.json({  message: "Welcome to Agristores-technologies" })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

