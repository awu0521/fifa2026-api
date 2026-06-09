const express  = require('express')
const router = express.Router()

const stadiumsController = require('../controllers/stadiumsController')

const getAllStadiums = stadiumsController.getAllStadiums
const getStadiumCountry = stadiumsController.getStadiumsByCountry
const getStadiumById = stadiumsController.getStadiumById


// GET /matches
router.get('/', getAllStadiums)

// GET /matches/live
router.get('/country/:country', getStadiumCountry)

// GET /matches/:id
router.get('/:id', getStadiumById)

module.exports = router