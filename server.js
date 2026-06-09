require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())

// routes
const matchesRouter = require('./routes/matches')
app.use('/matches', matchesRouter)

const stadiumsRouter = require('./routes/stadiums')
app.use('/stadiums', stadiumsRouter)

const teamsRouter = require('./routes/teams')
app.use('/teams', teamsRouter)

// base route
app.get('/', (req, res) => {
    res.json({ message: 'FIFA 2026 API is running' })
})

// error
app.use((req, res) => {
    res.status(404).json({ message: '404: Route not found' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})