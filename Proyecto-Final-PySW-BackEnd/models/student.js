const mongoose = require('mongoose');
const { Schema } = mongoose;
const arrangement = require('./arrangement')
const coach = require('./coach');
//const payment = require('./payment');
//const payment = require('./payment');
const StudentSchema = new Schema({
    Surname: { type: String, required: true },
    Name: { type: String, required: true },
    DNI: { type: String, required: true },
    Birth_Date: { type: Date, required: true },
    Phone: { type: String, required: true },
    Address: { type: String, required: true },
    Emai: { type: String, required: true },
    Start_date: { type: Date, required: true },
    End_date: {  type:Date, required : true},//fecha ultimo pago + 30
    //Payment : [{ type : Schema.Types.ObjectId, ref: payment}],
    Arrangement: { type: Schema.Types.ObjectId, ref: arrangement, required: true },
    Coach: { type: Schema.Types.ObjectId, ref: coach, required: true }
})

module.exports = mongoose.models.Student || mongoose.model('Student', StudentSchema);
