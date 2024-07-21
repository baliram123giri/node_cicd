const mongoose = require('mongoose')

const ServiceSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
})

const Service = mongoose.model('Service', ServiceSchema)

module.exports = { Service }