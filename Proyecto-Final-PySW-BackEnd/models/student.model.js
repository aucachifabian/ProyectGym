const mongoose      = require('mongoose');
const { Schema }    = mongoose;

const Arrangement   = require('./arrangement.model');
const Coach         = require('./coach.model');
const Routine       = require('./routine.model');

const StudentSchema = new Schema({
    surname : { type : String, required : true },
    name    : { type : String, required : true },
    dni     : { type : String, required : true, unique : true },
    phone   : { type : String, required : true },
    email   : { type : String, required : true, unique : true },
    birth_date  : { type : Date, required : true },
    address     : { type : String, required : true },
    start_date  : { type : Date, required : true },
    end_date    : { type : Date, required : true},
    arrangement : { type: Schema.Types.ObjectId, ref: Arrangement, required : true },
    coach       : { type: Schema.Types.ObjectId, ref: Coach, required : true },
    routine     : [{ type : Schema.Types.ObjectId, ref: Routine, required : true}],
});

module.exports = mongoose.models.Student || mongoose.model('Student', StudentSchema);
