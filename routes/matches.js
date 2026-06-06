const express  = require('express')
const router = express.Router()

const matchesController = require('../controllers/matchesController')

const getAllMatches = matchesController.getAllMatches
const getLiveMatches = matchesController.getLiveMatches
const getMatchById = matchesController.getMatchById


// GET /matches
router.get('/', getAllMatches)

// GET /matches/live
router.get('/live', getLiveMatches)

// GET /matches/:id
router.get('/:id', getMatchById)

module.exports = router