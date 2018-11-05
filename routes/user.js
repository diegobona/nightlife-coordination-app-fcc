const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

/* Authentication */
const isLogged = (req, res, next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/')
}

const isLoggedOut = (req, res, next) => {
    if (req.isUnauthenticated()) return next()
    res.redirect('/')
}

/* GET users listing. */
router.get('/', isLogged, userController.index)

router.get('/auth/github', isLoggedOut, userController.githubLogin)

router.get('/auth/github/callback', userController.githubCallback)

router.get('/auth', userController.auth)

router.get('/auth/logout', isLogged, userController.logout)

module.exports = router