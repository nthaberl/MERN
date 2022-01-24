//import mongoose
const mongoose = require('mongoose');

//the schema - the rules that the entries in the database must follow
const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String
})

//the model- this is what we use to make actual queries to the DB
const Joke = mongoose.model("Joke", JokeSchema);

//export the model
module.exports = Joke;