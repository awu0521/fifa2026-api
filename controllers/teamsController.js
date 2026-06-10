const mockData = require('../data/mockData.json')

//all teams
const getAllTeams = (req, res) => {
    try {
        res.json(mockData.teams)
    } catch (error) {
        res.status(500).json({ message: 'Could not get all the teams', error: error.message })
    }
}

//by id
const getTeamById = (req, res) => {
    try {
        const team = mockData.teams.find(t => t.id === parseInt(req.params.id))
        if (!team) {
            return res.status(404).json({ message: 'Team is not in the fifa 2026!' })
        }
        res.json(team)
    } catch (error) {
        res.status(500).json({ message: 'Could not find team', error: error.message })
    }
}

//teams by group
const getTeamsByGroup = (req, res) => {
    try {
        const filtered = mockData.teams.filter(t => t.group.toLowerCase() === req.params.group.toLowerCase())
        if (filtered.length === 0) {
            return res.status(404).json({ message: 'No teams in that group' })
        }
        res.json(filtered)
    } catch (error) {
        res.status(500).json({ message: 'Sorry something went wrong', error: error.message })
    }
}

module.exports = { getAllTeams, getTeamById, getTeamsByGroup }