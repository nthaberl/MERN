const AuthorCollection = require('../controllers/authors.controllers')
const { findAll, findOne, create, update, deleteOne } = require('../controllers/authors.controllers') //deconstructing the functions out of the controller

module.exports = app => {
    app.get('/api/authors', findAll); //read all
    app.get('/api/authors/:id', findOne); //read one
    app.post('/api/authors/', create); // create
    app.put('/api/authors/:id', update); // update
    app.delete('/api/authors/:id', deleteOne); //delete
}