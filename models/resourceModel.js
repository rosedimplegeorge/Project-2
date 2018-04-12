const mongoose = require('mongoose')
const resourceSchema = require('../db/schemas/resourceSchema')

const Resource = mongoose.model('resource', resourceSchema)

module.exports = Resource