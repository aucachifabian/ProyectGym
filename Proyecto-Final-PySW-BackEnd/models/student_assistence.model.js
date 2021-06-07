const mongoose    = require('mongoose');
const { Schema }  = mongoose;

const Student       = require('./student.model');
const Assistence    = require('./assistance.model');

const StudentAssistenceSchema = new Schema({
   id_student       : { type : Schema.Types.ObjectId, ref : Student, required : true },
   id_assistance    : { type : Schema.Types.ObjectId, ref : Assistence, required : true },
});

module.exports = mongoose.models.User || mongoose.model('StudentAssistence', StudentAssistenceSchema);