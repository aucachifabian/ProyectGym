const mongoose    = require('mongoose');
const { Schema }  = mongoose;

const Arrangement = require('./arrangement.model');

const RoutineSchema = new Schema({
   day         : {type : String, required  : true},
   repetition  : {type : String, required  : true},
   description : {type : String, required  : true},
   arrangement : {type : Schema.Types.ObjectId, ref: Arrangement, required : true}
});

module.exports = mongoose.models.Routine || mongoose.model('Routine', RoutineSchema);