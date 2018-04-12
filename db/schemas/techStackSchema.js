const mongoose = require('mongoose');
const resourceSchema = require('./resourceSchema')
const Schema = mongoose.Schema;

const techStackSchema = new Schema({
    title: String,
    description: String, 
    expertise: Number,
    resources :[resourceSchema]
})

module.exports = techStackSchema