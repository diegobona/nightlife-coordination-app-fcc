// Require Mongoose
const mongoose = require('mongoose')

// Define a schema
const Schema = mongoose.Schema

const BarSchema = new Schema(
    {
      bar_id: {type: String, unique: true},
      timestamp: {type: Date, default: Date.now()},
      users: [{type: Schema.Types.ObjectId, ref: 'User'}]
    }
)

BarSchema.virtual('isOld').get(function() {
    return new Date() - new Date(this.timestamp.getFullYear(), this.timestamp.getMonth(), this.timestamp.getDate()) > 86400000
})

module.exports = mongoose.model('Bar', BarSchema)