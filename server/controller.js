const movies = require('./db.json')
let globalId = 11

module.exports = {
    getAllMovies: (req, res) => {
        res.status(200).send(movies)
    }, 
    createMovie: (req, res) => {
        // console.log(req.body)
        const {title, rating, imageURL} = req.body
        const newMovie = {
            title,
            rating: +rating,
            imageURL,
            id: globalId
        }

        movies.push(newMovie)
        // console.log(movies)
        res.status(200).send(movies)
        globalId++
    },
    updateMovie: (req, res) => {
        // console.log(req.body)
        // console.log(req.params)
        const {id} = req.params
        const {type} = req.body

        let index = movies.findIndex((elem) => +elem.id === +id)
        console.log(movies[index], type)
        if(movies[index].rating === 5 && type === 'plus'){
            res.status(400).send("Cannot go above 5")
        } else if( movies[index].rating === 1 && type === "minus"){
            res.status(400).send('Cannot go below 1')
        } else if(type === 'plus'){
            movies[index].rating++
            res.status(200).send(movies)
        } else if(type === 'minus'){
            movies[index].rating--
            res.status(200).send(movies)
        } else {
            res.status(400).send('Something went wrong')
        }
    },
    deleteMovie: (req, res) => {
        const {id} = req.params

        let index = movies.findIndex((elem) => +elem.id === +id)

        movies.splice(index, 1)

        res.status(200).send(movies)
    }
}