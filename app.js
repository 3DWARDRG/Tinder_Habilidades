import express from 'express';
import routes from './src/routes/routes.js'

const app = express()

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(routes)

export default app;