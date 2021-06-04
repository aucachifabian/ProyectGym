const mongoose = require('mongoose');
const { Schema } = mongoose;

const PlanSchema = new Schema({

    full : { type: String, required: true },
    basico : { type: String, required: true },
  
})

module.exports = mongoose.models.Plan || mongoose.model('Plan', PlanSchema);
