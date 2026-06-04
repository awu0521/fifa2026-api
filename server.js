require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())

// test route
app.get('/', (req, res) => {
    res.json({ message: 'FIFA 2026 API is running!' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

app.use((req, res) => {
    res.status(404).json({ message: '404: Route not found' })
})