const async = require('async')
const yelp = require('yelp-fusion')
const Bar = require('../models/bar')

exports.index = (req, res) => {

    async.parallel({
      yelp: callback => {
        apiKey = process.env.YELP_apiKey
  
        const searchRequest = {
          term: 'bar',
          location: req.query.location,
          limit: 10
        }
        
        const client = yelp.client(apiKey)
        
        client.search(searchRequest)
        .then(response => {
          const results = response.jsonBody
          const prettyJson = JSON.stringify(results.businesses, null, 4)
          callback(null, prettyJson)
        })
        .catch(e => callback(e, null));
        }
    }, (err, results) => {
      if (err) {
        console.log(err)
        // console.log('Asyncs results error:')
        // console.log(JSON.parse(err.response.body).error.code)      // LOCATION_NOT_FOUND
        if (err.response && JSON.parse(err.response.body).error.code == 'LOCATION_NOT_FOUND') {
          return res.send(err)
        } else {
          return res.send(err.code)
        }
      }
      
      return res.send(results.yelp)
    })

}

exports.addUser = (req, res, next) => {

  async.waterfall([
    callback => {
      // Find bar in DB
      Bar.find({bar_id: req.params.bar_id})
      .then(bar => callback(null, bar))
    },
    (bar, callback) => {
      // If there is no this bar in DB create it, if date isOld empty users array
      const newBar = new Bar({
        _id: req.params.id,
        timestamp: new Date(),
        users: (!Array.isArray(bar) || !bar.length || bar.idOld) ? [...bar.users, req.user._id] : [req.user._id]
      })

      Bar.findByIdAndUpdate({_id: req.params.id}, newBar, { upsert: true, new: true }, (err, thebar) => {
        if (err) return next(err)
        return callback(null, thebar)
      })
    }
  ], (err, results) => {
    // Return response
    res.send(results)

  })

}