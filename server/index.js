const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const ctrl = require('./controller')

// console.log(ctrl)

app.get('/api/movies', ctrl.getAllMovies)
app.post('/api/movies', ctrl.createMovie)
app.put('/api/movies/:id', ctrl.updateMovie)
app.delete('/api/movies/:id', ctrl.deleteMovie)

app.listen(4004, () => console.log("Take us to warp 4004!"))