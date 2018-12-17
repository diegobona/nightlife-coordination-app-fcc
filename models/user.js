// Require Mongoose
const mongoose = require('mongoose')

// Define a schema
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
      username: { 
        type: String, 
        max: 30,
        trim: true, 
        index: {
          unique: true,
          partialFilterExpression: { username: {$type: 'string'} }
        }
      },
      password: {type: String},
      github_id: {type: String},
      github_username: {type: String},
      bars: [{type: Schema.Types.ObjectId, ref: 'Bar'}]
    }
)

module.exports = mongoose.model('User', UserSchema)