import mongoose, { model } from "mongoose";

const Doctor = new mongoose.Schema({
    Doctor_name : {
        type : String,
        required:  true
    },
    Doctor_age : {
        type : Number
    },
    handling_patient : [
        {
            patient : {
                type : mongoose.Schema.ObjectId,
                ref : 'Patient'
            }
        }
    ],
    handled_patient : [
        {
            patient : {
                type : mongoose.Schema.ObjectId,
                ref : 'Patient'
            }
        }
    ]
})

module.exports = mongoose.model('Doctor',Doctor);