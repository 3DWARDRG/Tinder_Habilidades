import  pg  from "pg";
const { Client } = pg;

export const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "mybaseAdmin_0",
    database: "Tinder H."
})

// module.exports = client

