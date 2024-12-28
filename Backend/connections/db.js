// const mongoose = require('mongoose')

// exports.connectDb = async()=>{
//     mongoose.connect(process.env.URI)
//     .then(()=>{
//         console.log("DB connected")
//     })

// }
// import postgres from "postgres"

// let sql = postgres('postgresql://easy_doctor_user:oIkLVx6QXxaulVG4Kl9aftCKozXjXBdr@dpg-ctluvs5ds78s73c8sn9g-a.oregon-postgres.render.com/easy_doctor?ssl=true',{
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