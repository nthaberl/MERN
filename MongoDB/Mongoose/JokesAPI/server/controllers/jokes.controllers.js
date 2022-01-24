//CRUD
//controller is importing the model

const Joke = require('../models/jokes.models')

//platform shows different functions per route
//however we can make each route an object
//methods are coming from mongoose library
//all queries are promises
//mongoose helps with our functions to access mongoDB a little easier
//req.body is object from form and everything inside is string by default

module.exports = {
    //READ ALL
    findAllJokes : (req, res) => {
        Joke.find()
        //what we return here is what we receive in REACT
        //if the promise is successful, returns an array which is default, here we return an object
        .then(allJokes => res.json({ jokes: allJokes, message: "success!"}))
        .catch(err => res.json({message: "hmmm .. something went wrong", error: err}));
    },

    //READ ONE
    findSingleJoke : (req, res) => {
        // /api/jokes/:id
        //alternately Joke.findbyId(req.params.id) more explicit
        Joke.findOne({ _id: req.params.id }) //better to find by id so you can get specific item, i.e find by name will pull first item matching search parameter not any specific one
        .then(singleJoke => res.json({ joke: singleJoke }))
        .catch ( err => res.json({ message: 'hmmm .. something went wrong', error: err}));
    },

    //CREATE
    createNewJoke : (req, res) => {
        //can also do Joke.create({ setup: req.body.setup, punchline: req.body.punchline})
        Joke.create(req.body)
        .then(newlyCreatedJoke => res.json({joke: newlyCreatedJoke}))
        .catch(err => res.json({ message: 'hmmm.. something went wrong', error: err}));
    },

    updateExistingJoke : (req, res) => {
        // /api/jokes/:id
        //search for ONE, and THEN updating
        //first param is search query, second is body update, optional 3rd parameter which is a validator and returns new object
        // Joke.findOneAndUpdate(
        //     { _id: req.params.id },
        //     req.body,
        //     { new: true, runValidators: true}
        // )
        Joke.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true})
        .then(updatedJoke => res.json({ joke: updatedJoke}))
        .catch(err => res.json({ message: 'hmmmm.. something went wrong', error: err}));
    },

    deleteExistingJoke : (req, res) => {
        // /api/jokes/:id
        // Joke.deleteOne({_id: req.params.id})
        Joke.findByIdAndDelete(req.params.id)
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: 'hmmm... something went wrong', error: err}));
    }
}