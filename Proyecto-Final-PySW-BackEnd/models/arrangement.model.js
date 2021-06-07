const mongoose      = require('mongoose');
const { Schema }    = mongoose;

const PlanSchema = new Schema({
    type    : { type : String, required : true },
    price   : { type : Number, required : true },
    amount_day  : { type : Number, required : true},
});


module.exports = mongoose.models.Arrangement || mongoose.model('Arrangement', PlanSchema);
