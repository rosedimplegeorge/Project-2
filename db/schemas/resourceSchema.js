const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
    id: Number,
    description: String
})

module.exports = resourceSchema