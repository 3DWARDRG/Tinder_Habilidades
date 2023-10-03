import app from './app.js';
import 'dotenv/config'

app.listen(process.env.PORT, ()=>{
    console.log(`Server is now listening at port ${process.env.PORT}`);
})



