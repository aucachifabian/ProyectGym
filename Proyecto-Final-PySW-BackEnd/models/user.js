const mongoose = require('mongoose');
const { Schema } = mongoose;
const student = require('./student');
const coach = require('./coach');
const UserSchema = new Schema({
   Type_user:{type:String, required:true},
   Username:{type:String , required:true},
   Password:{type:String, required:true},
   owner: {student: { type: Schema.Types.ObjectId, ref: student  , required: false },
            coach: { type: Schema.Types.ObjectId, ref: coach  , required: false }
           }
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);