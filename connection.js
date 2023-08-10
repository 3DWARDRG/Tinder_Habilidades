const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "mybaseAdmin_0",
    database: "Tinder H."
})

module.exports = client

