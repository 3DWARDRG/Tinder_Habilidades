import  pg  from "pg";
const { Client } = pg;

export const client = new Client({
    host: "localhost",
    user: "example",
    port: 0000,
    password: "example",
    database: "Tinder H."
})

// module.exports = client

