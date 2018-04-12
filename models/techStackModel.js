const mongoose = require('mongoose')
const techStackSchema = require('../db/schemas/techStackSchema')

const TechStack = mongoose.model('techStack', techStackSchema)

module.exports = TechStack
