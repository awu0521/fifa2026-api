const teams = [
    // Group A
    { id: 1, name: "Mexico", shortName: "MEX", group: "A" },
    { id: 2, name: "South Africa", shortName: "RSA", group: "A" },
    { id: 3, name: "South Korea", shortName: "KOR", group: "A" },
    { id: 4, name: "Czechia", shortName: "CZE", group: "A" },
    //Group B
    { id: 5, name: "Canada", shortName: "CAN", group: "B" },
    { id: 6, name: "Bosnia and Herzegovina", shortName: "BIH", group: "B" },
    { id: 7, name: "Qatar", shortName: "QAT", group: "B" },
    { id: 8, name: "Switzerland", shortName: "SUI", group: "B" },
    //Group C
    { id: 9, name: "Brazil", shortName: "BRA", group: "C" },
    { id: 10, name: "Morocco", shortName: "MAR", group: "C" },
    { id: 11, name: "Haiti", shortName: "HAI", group: "C" },
    { id: 12, name: "Scotland", shortName: "SCO", group: "C" },
    // Group D
    { id: 13, name: "United States", shortName: "USA", group: "D" },
    { id: 14, name: "Paraguay", shortName: "PAR", group: "D" },
    { id: 15, name: "Australia", shortName: "AUS", group: "D" },
    { id: 16, name: "Turkey", shortName: "TUR", group: "D" },
    // Group E
    { id: 17, name: "Germany", shortName: "GER", group: "E" },
    { id: 18, name: "Curacao", shortName: "CUW", group: "E" },
    { id: 19, name: "Ivory Coast", shortName: "CIV", group: "E" },
    { id: 20, name: "Ecuador", shortName: "ECU", group: "E" },
    //Group F
    { id: 21, name: "Netherlands", shortName: "NED", group: "F" },
    { id: 22, name: "Japan", shortName: "JPN", group: "F" },
    { id: 23, name: "Sweden", shortName: "SWE", group: "F" },
    { id: 24, name: "Tunisia", shortName: "TUN", group: "F" },
    // Group G
    { id: 25, name: "Belgium", shortName: "BEL", group: "G" },
    { id: 26, name: "Egypt", shortName: "EGY", group: "G" },
    { id: 27, name: "Iran", shortName: "IRN", group: "G" },
    { id: 28, name: "New Zealand", shortName: "NZL", group: "G" },
    //Group H
    { id: 29, name: "Spain", shortName: "ESP", group: "H" },
    { id: 30, name: "Cape Verde", shortName: "CPV", group: "H" },
    { id: 31, name: "Saudi Arabia", shortName: "KSA", group: "H" },
    { id: 32, name: "Uruguay", shortName: "URU", group: "H" },
    //Group I
    { id: 33, name: "France", shortName: "FRA", group: "I" },
    { id: 34, name: "Senegal", shortName: "SEN", group: "I" },
    { id: 35, name: "Iraq", shortName: "IRQ", group: "I" },
    { id: 36, name: "Norway", shortName: "NOR", group: "I" },
    //Group J
    { id: 37, name: "Argentina", shortName: "ARG", group: "J" },
    { id: 38, name: "Algeria", shortName: "ALG", group: "J" },
    { id: 39, name: "Austria", shortName: "AUT", group: "J" },
    { id: 40, name: "Jordan", shortName: "JOR", group: "J" },
    //Group K
    { id: 41, name: "Portugal", shortName: "POR", group: "K" },
    { id: 42, name: "DR Congo", shortName: "COD", group: "K" },
    { id: 43, name: "Uzbekistan", shortName: "UZB", group: "K" },
    { id: 44, name: "Colombia", shortName: "COL", group: "K" },
    //Group L
    { id: 45, name: "England", shortName: "ENG", group: "L" },
    { id: 46, name: "Croatia", shortName: "CRO", group: "L" },
    { id: 47, name: "Ghana", shortName: "GHA", group: "L" },
    { id: 48, name: "Panama", shortName: "PAN", group: "L" }
]

//all teams
const getAllTeams = (req, res) => {
    try {
        res.json(teams)
    } catch (error) {
        res.status(500).json({ message: 'Could not get all the teams', error: error.message })
    }
}

//by id
const getTeamById = (req, res) => {
    try {
        const team = teams.find(t => t.id === parseInt(req.params.id))
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
        const filtered = teams.filter(t => t.group.toLowerCase() === req.params.group.toLowerCase())
        if (filtered.length === 0) {
            return res.status(404).json({ message: 'No teams in that group' })
        }
        res.json(filtered)
    } catch (error) {
        res.status(500).json({ message: 'Sorry something went wrong', error: error.message })
    }
}

module.exports = { getAllTeams, getTeamById, getTeamsByGroup }