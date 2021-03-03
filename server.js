const express = require("express")
const path = require('path')
const { db } = require("./Develop/db/db")

const app = express()
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.use(express.static('./Develop/public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'))
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'))
})

app.get('/api/notes', (req, res) => {
    res.json(db)
})

app.post("/api/notes", (req, res) => {
    console.log(req.body)
    res.json(req.body)
})

app.listen(3001, () => {
    console.log(`API server now on port 3001!`)
})