const express = require("express")
const app = express()
const path = require('path')

app.use(express.static('./Develop/public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'))
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'))
})

app.listen(3001, () => {
    console.log(`API server now on port 3001!`)
})