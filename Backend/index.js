import portfinder from 'portfinder'
import dotenv from 'dotenv'
// import createDb from './connections/createtable.js';
import express from 'express'
import cookieParser from 'cookie-parser';
import { connectDB } from './connections/db.js';
const app = express();
dotenv.config();
cookieParser()
portfinder.setBasePort(3000);    
portfinder.setHighestPort(65535); 

connectDB();

app.get('/',(req,res)=>{
    res.send('hello abhishek')
})

portfinder.getPortPromise() 
.then((port) => {
    app.listen(port,()=>{
        console.log(`listening on port :: `, port)
    })
})
.catch((err) => {
    console.log("no ports available this time")
});