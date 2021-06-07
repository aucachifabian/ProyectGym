const mongoose = require('mongoose');
const { Schema } = mongoose;

const Arrangement = require('./arrangement.model');
const Student = require('./student.model');

const PaymentSchema = new Schema({
    student     : { type : Schema.Types.ObjectId, ref : Student, required : true },
    arrangement : { type : Schema.Types.ObjectId, ref : Arrangement, required : true },
    pay_mode    : { type : String, required : true},
    pay_day     : { type : Date, required : true},
    price       : { type : Number, required : true},
});

module.exports = mongoose.models.Payment || mongoose.model('Payment', PaymentSchema); 