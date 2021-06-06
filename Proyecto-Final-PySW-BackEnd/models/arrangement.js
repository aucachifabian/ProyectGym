const mongoose = require('mongoose');
const { Schema } = mongoose;

const PlanSchema = new Schema({
    type : {   type: String, required:true },
    price : { type: Number, required:true },
    amountDay: { type :Number, required:true}
})


module.exports = mongoose.models.Arrangement || mongoose.model('Arrangement', PlanSchema);
