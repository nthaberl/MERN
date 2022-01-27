const Author = require('../models/authors.models')

module.exports = {
    //READ ALL
    //READ ALL
    findAll: (req, res) => {
        Author.find()
            .then(allAuthors => res.json(allAuthors))
            .catch( err => res.json({message: "error!", error: err}))
    },

    //CREATE
    create: (req, res) => {
        console.log(req.body)
        Author.create(req.body)
        .then( newAuthor => res.json(newAuthor))
        .catch( err => res.status(400).json({message: "error!", error: err})) //backend validation
    },

    //READ ONE
    findOne : (req, res) => {
        console.log(req.params);
        Author.findById(req.params.id)
        .then(author => res.json(author))
        .catch( err => res.json({message: "error!", error: err}))
    },

    //UPDATE
    update : (req, res) => {
        console.log(req.params);
        console.log(req.body)
        Author.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true //returns new object that got updated
        })
        .then( (updatedAuthor) => {
            res.json(updatedAuthor)})
        .catch(err => res.status(400).json({message: "error!", error: err})) //status 400 adds backend validation
    },

    //DELETE
    deleteOne : (req, res) => {
        Author.findByIdAndDelete(req.params.id)
        .then( result => res.json(result))
        .catch(err => res.json({message: "error!", error: err}))
    }
}