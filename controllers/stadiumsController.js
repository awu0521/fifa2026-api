//fetches and processes stadium data

const stadiums = [
    // USA
    { id: 1, name: "MetLife Stadium", city: "New York", country: "USA", capacity: 82500 },
    { id: 2, name: "SoFi Stadium", city: "Los Angeles", country: "USA", capacity: 70240 },
    { id: 3, name: "Rose Bowl", city: "Los Angeles", country: "USA", capacity: 88565 },
    { id: 4, name: "AT&T Stadium", city: "Dallas", country: "USA", capacity: 80000 },
    { id: 5, name: "NRG Stadium", city: "Houston", country: "USA", capacity: 72220 },
    { id: 6, name: "Arrowhead Stadium", city: "Kansas City", country: "USA", capacity: 76416 },
    { id: 7, name: "Levi's Stadium", city: "San Francisco", country: "USA", capacity: 68500 },
    { id: 8, name: "Empower Field", city: "Denver", country: "USA", capacity: 76125 },
    { id: 9, name: "Hard Rock Stadium", city: "Miami", country: "USA", capacity: 65326 },
    { id: 10, name: "Lincoln Financial Field", city: "Philadelphia", country: "USA", capacity: 69796 },
    { id: 11, name: "Gillette Stadium", city: "Boston", country: "USA", capacity: 65878 },
    // Canada
    { id: 12, name: "BC Place", city: "Vancouver", country: "Canada", capacity: 54500 },
    { id: 13, name: "BMO Field", city: "Toronto", country: "Canada", capacity: 45736 },
    // Mexico
    { id: 14, name: "Azteca Stadium", city: "Mexico City", country: "Mexico", capacity: 87523 },
    { id: 15, name: "Estadio Akron", city: "Guadalajara", country: "Mexico", capacity: 49850 },
    { id: 16, name: "Estadio BBVA", city: "Monterrey", country: "Mexico", capacity: 53500 }
]

// get all stadiums
const getAllStadiums = (req, res) => {
    try {
        res.json(stadiums)
    } catch (error) {
        res.status(500).json({ message: 'Could not get all stadiums', error: error.message })
    }
}

// get stadium by id
const getStadiumById = (req, res) => {
    try {
        const stadium = stadiums.find(s => s.id === parseInt(req.params.id))
        if (!stadium) {
            return res.status(404).json({ message: 'Stadium is not in the world cup!' })
        }
        res.json(stadium)
    } catch (error) {
        res.status(500).json({ message: 'Could not find stadium by id', error: error.message })
    }
}

// get stadiums by country
const getStadiumsByCountry = (req, res) => {
    try {
        const filtered = stadiums.filter(s => s.country.toLowerCase() === req.params.country.toLowerCase())
        if (filtered.length === 0) {
            return res.status(404).json({ message: 'That country is not a fifa 2026 host!' })
        }
        res.json(filtered)
    } catch (error) {
        res.status(500).json({ message: 'Could not find stadium by country', error: error.message })
    }
}

module.exports = { getAllStadiums, getStadiumById, getStadiumsByCountry }