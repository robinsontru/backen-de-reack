import express from "express";
import cors from "cors";
import db from "./database/db.js";
import blogsRouters from "./routers/routes.js";


const app = express()
app.use(cors())
app.use(express.json())
app.use('/blogs',blogsRouters)
try {
    await db.authenticate()
    console.log('**conexion exitosa**');
} catch (error) {
    console.log(`**eror de conexion**`);
}
app.get('/',(req,res)=>{
    res.send('hola mundo')
})
app.listen(8000,()=>{
    console.log('el servidor esta escucahdo el puerto http://localhost:8000');
})