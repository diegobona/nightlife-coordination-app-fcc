//Set up mongoose connection
const mongoose = require('mongoose')
const constants = require('./constants')

// Remove warning with Promise
mongoose.Promise = global.Promise;

try {
  mongoose.set('useCreateIndex', true);
  mongoose.connect(constants.MONGO_URL, { useNewUrlParser: true });
} catch (err) {
  console.error(err)
  mongoose.createConnection(constants.MONGO_URL);
}

const db = mongoose.connection
    // .once('open', () => {
    //     console.log(`MongoDB is connected`);
    // })
	.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports = db