const JokeController = require('../controllers/jokes.controllers');
console.log("this is the joke controller", JokeController);
const { findAllJokes, findSingleJoke } = require('../controllers/jokes.controllers')
module.exports = app => {
    app.get('/api/hello', (req, res) => {
        res.json({message: "hello"})
    })
    app.get('/api/jokes', findAllJokes); //destructured controller
    app.get('/api/jokes/:id', findSingleJoke); //destructured controller
    app.put('/api/jokes/:id', JokeController.updateExistingJoke);
    app.post('/api/jokes', JokeController.createNewJoke);
    app.delete('/api/jokes/:id', JokeController.deleteExistingJoke);
}
//these routes follow RESTful conventions
