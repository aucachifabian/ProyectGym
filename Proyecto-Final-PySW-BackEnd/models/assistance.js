const mongoose = require('mongoose');
const { Schema } = mongoose;
const arrangement = require('./arrangement');
const student = require('./student');

const AssistanceSchema = new Schema({
    Day : {type : Date, require: true},
    Arrangement : { type : arrangement, require:true },
    Students : [{type : Schema.Types.ObjectId, ref: student }]
})

module.exports = mongoose.models.Assistance || mongoose.model('Assistance', AssistanceSchema);