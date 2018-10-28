const express = require('express')
const router = express.Router()
const barsController = require('../controllers/barsControllers')

/* GET bars listing. */
router.get('/', barsController.index);

/* POST bars listing. */
router.post('/:id', barsController.addUser)

module.exports = router