const express = require('express');
const router = express.Router();
const { getAllTeams, getTeamById, getTeamsByGroup } = require('../controllers/teamsController');

// GET /teams
router.get('/', getAllTeams);

// GET /teams/group/A
router.get('/group/:group', getTeamsByGroup);

// GET /teams/[enter id]
router.get('/:id', getTeamById);

module.exports = router;