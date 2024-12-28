import mongoose from "mongoose";

const Patient = new mongoose.Schema({
    patient_name : {
        type : String,
        required:  true
    },
    patient_age : {
        type : Number
    },
    patient_disease : {
        type  : String
    },
    handling_doctor : [
        {
            doctor : {
                type : mongoose.Schema.ObjectId,
                ref : 'Doctor'
            }
        }
        ]
})

module.exports = mongoose.model('Patient',Patient);