const mongoose      = require('mongoose');
const { Schema }    = mongoose;

const Student       = require('./student.model');

const Day_AssistanceSchema = new Schema({
    day        : { type  : Date, require : true },
    student    : [{ type : Schema.Types.ObjectId, ref : Student, required : false }],
});

module.exports = mongoose.models.day_assistence || mongoose.model('Day_Assistance', Day_AssistanceSchema);