const express = require('express');
const router = express.Router();
const barController = require('../controllers/barController');

/* Authentication */
const isLogged = (req, res, next) => {
    if (req.isAuthenticated()) return next()
        res.redirect('/')
}

const isLoggedOut = (req, res, next) => {
    if (req.isUnauthenticated()) return next()
    res.redirect('/')
}

/* GET bars listing. */
router.get('/', barController.index);

/* POST bars listing. */
router.post('/:id', isLogged, barController.addUser);

module.exports = router