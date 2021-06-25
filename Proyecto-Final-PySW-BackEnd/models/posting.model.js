const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostingSchema = new Schema({
    messageF: { type: String, required: true },

});

module.exports = mongoose.models.posting || mongoose.model('Posting', PostingSchema);