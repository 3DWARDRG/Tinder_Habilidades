const client = require('./connection.js')
const express = require('express');
const app = express();


app.listen(3301, ()=>{
    console.log("Server is now listening at port 3001");
})

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get('/users', (req, res)=>{
    console.log("Dfsdfd")
    client.query(`SELECT * FROM "Usuarios"."Usuario"`, (err, result)=>{
        if(!err){
            console.log("asdassadsa")
            res.send(result.rows);
        }
    });
    client.end;
})

app.post('/users', (req, res)=> {
    const user = req.body;
    let insertQuery = `INSERT INTO "Usuarios"."Usuario"("Nombre", "Contraseña", "Numero de identidad", "Email", "Celular", "Tarifa") 
    VALUES ('pollito', 'asdasdasd', 123455678, 'arroz@ejemplos.com', 1234567891, 10000);`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

client.connect();


// client.connect((err) => {
//     if (err) {
//       console.error('connection error', err.stack);
//     } else {
//       console.log('connected');
//     }
//   });