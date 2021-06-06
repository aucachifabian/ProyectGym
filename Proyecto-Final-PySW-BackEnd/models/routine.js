const { Schema } = mongoose;
const arrangement = require('./arrangement');
const RoutineSchema = new Schema({
   Repetitions:{type:String, required:true},
   Description:{type:String , required:true},
   Arrangement: { type: Schema.Types.ObjectId, ref: arrangement , required: true }
})

module.exports = mongoose.models.Routine || mongoose.model('Routine', RoutineSchema);