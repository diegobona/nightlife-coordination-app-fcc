const User = require('../models/user')
const passport = require('passport')
const { sanitizeBody } = require('express-validator/filter');

exports.index = (req, res, next) => {
    console.log(req.user)
    
    User.findById(req.user._id)
    .populate('bars')
    .then((err, user) => {
        if (err) return next(err)

        res.send(user.bars)
    })

}

exports.githubLogin = passport.authenticate('github')

exports.githubCallback = passport.authenticate('github', { successRedirect: '/', failureRedirect: '/', failureFlash: true })

exports.localLogin = [
    // Sanitize fields (using wildcard).
    sanitizeBody('*').trim().escape(),

    (req, res, next) => {
        passport.authenticate('localLogin', (err, user, info) => {
            if (err) return next(err)
            
            if (info) return res.json(info)

            if (user) {
                req.login(user, function(err) {
                    if (err) return next(err)
                    // res.redirect('/') does not work?!
                    return res.json('loginSuccess')
                })
            }

        })(req, res, next)
    }
]

exports.localRegister = [
    // Sanitize fields (using wildcard).
    sanitizeBody('*').trim().escape(),
    
    (req, res, next) => {
        passport.authenticate('localRegister', (err, user, info) => {
            if (err) return next(err)

            if (info) return res.json(info)

            if (user) {
                req.login(user, err => {
                    if (err) return next(err)
                    // res.redirect('/') does not work?!
                    return res.json('loginSuccess')
                })
            }
        })(req, res, next)
    }
]

exports.logout = (req, res) => {
    req.logout()
    res.redirect('/')
}

exports.auth = (req, res, next) => {
    req.user
    ? res.json({ user: req.user })
    : res.json({ user: false })
}