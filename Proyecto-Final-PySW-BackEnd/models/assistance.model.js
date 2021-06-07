const mongoose      = require('mongoose');
const { Schema }    = mongoose;

const Arrangement   = require('./arrangement.model');
const Student       = require('./student.model');

const AssistanceSchema = new Schema({
    day         : {type  : Date, require : true},
    students    : [{type : Schema.Types.ObjectId, ref : Student }],
});

module.exports = mongoose.models.Assistance || mongoose.model('Assistance', AssistanceSchema);