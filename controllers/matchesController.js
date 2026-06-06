//fetches and processes match data

const mockData = require('../data/mockData.json')

// get all matches
const getAllMatches = (req, res) => {
    try {
        res.json(mockData.matches)
    } catch (error) {
        res.status(500).json({ message: '404: cannot get all matches', error: error.message })
    }
}

// get live matches only
const getLiveMatches = (req, res) => {
    try {
        const liveMatches = mockData.matches.filter(match => match.status === 'IN_PLAY')
        res.json(liveMatches)
    } catch (error) {
        res.status(500).json({ message: '404: cannot get all live matches', error: error.message })
    }
}

// get single match by id
const getMatchById = (req, res) => {
    try {
        const match = mockData.matches.find(match => match.id === parseInt(req.params.id))
        if (!match) {
            return res.status(404).json({ message: 'Match not found with id' })
        }
        res.json(match)
    } catch (error) {
        res.status(500).json({ message: '404: cannot get match by id', error: error.message })
    }
}

module.exports = { getAllMatches, getLiveMatches, getMatchById }