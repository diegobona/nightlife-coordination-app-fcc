const User = require('../models/user')
const passport = require('passport')

exports.index = (req, res, next) => {
    
    User.findById(req.user._id)
    .populate('bars')
    .then((err, user) => {
        if (err) return next(err)

        res.send(user.bars)
    })

}

exports.githubLogin = passport.authenticate('github')

exports.githubCallback = passport.authenticate('github', { successRedirect: '/', failureRedirect: '/', failureFlash: true})

exports.localLogin = (req, res, next) => {
    
}

exports.localRegister = (req, res, next) => {
    
}

exports.auth = (req, res, next) => {
    req.user
    ? res.json({ user: req.user })
    : res.json({ user: false })
}