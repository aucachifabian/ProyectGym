const mongoose      = require('mongoose');
const { Schema }    = mongoose;

const CoachSchema = new Schema({
    name    : {type : String, require : true},
    surname : {type : String, require : true},
    photo   : {type : String, require :true},
    email   : {type : String, require :true},
    birth_date : {type : Date, require :true},
});

module.exports = mongoose.models.Coach || mongoose.model('Coach', CoachSchema);