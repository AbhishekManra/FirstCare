// const mongoose = require('mongoose')

// exports.connectDb = async()=>{
//     mongoose.connect(process.env.URI)
//     .then(()=>{
//         console.log("DB connected")
//     })

// }
// import postgres from "postgres"

// let sql = postgres(process.env.POSTGRES_URI,{
//     transform: postgres.camel
// })

// export default sql;

import mongoose from "mongoose";
export const connectDB = ()=>{mongoose.connect('mongodb://localhost:27017/AmurtaramDb')
    .then(()=>{
        console.log("Database connected")
    }).catch(err=>{
        console.log(err)
    })
}