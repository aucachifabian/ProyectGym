const mongoose = require('mongoose');
const { Schema } = mongoose;
const CoachSchema = new Schema({
    Name : {type : String, require: true},
    Surname:{type : String, require: true},
    Birth_date : { type:Date, require:true},
    Photo : { type: String, require:true}
})

module.exports = mongoose.models.Coach || mongoose.model('Coach', CoachSchema);