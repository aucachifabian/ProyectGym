const mongoose = require('mongoose');
const { Schema } = mongoose;
const arrangement = require('./arrangement');
const student = require('./student');


const PaymentSchema = new Schema({
    Student: { type: Schema.Types.ObjectId, ref: student, required: true }, //FALTA EL SHEMA STUDENT
    Arrangement: { type: Schema.Types.ObjectId, ref: arrangement, required: true },
    Pay_mode : {type:String, required:true},
    Pay_day : {type: Date , required:true}
})
module.exports = mongoose.models.Payment || mongoose.model('Payment', PaymentSchema); 