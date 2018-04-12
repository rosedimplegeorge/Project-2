const mongoose = require('mongoose');
const techStackSchema = require('./techStackSchema')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName : String,
    email : String, 
    yrs_Of_Exp : Number,
    techStacks :[techStackSchema]
})

module.exports = userSchema