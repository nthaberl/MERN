const Product = require('../models/products.models')

module.exports = {
    //READ ALL
    findAllProducts : (req, res) => {
        Product.find()
        //what we return here is what we receive in REACT
        //if the promise is successful, returns an array which is default, here we return an object
        .then(allProducts => res.json({ products: allProducts, message: "success!"}))
        .catch(err => res.json({message: "hmmm .. something went wrong", error: err}));
    },

    //READ ONE
    findSingleProducts : (req, res) => {
        // /api/products/:id
        //alternately Product.findbyId(req.params.id) more explicit
        Product.findOne({ _id: req.params.id }) //better to find by id so you can get specific item, i.e find by name will pull first item matching search parameter not any specific one
        .then(singleProduct => res.json({ product: singleProduct }))
        .catch ( err => res.json({ message: 'hmmm .. something went wrong', error: err}));
    },

    //CREATE
    createNewProduct : (req, res) => {
        Product.create(req.body)
        .then(newlyCreatedProduct => res.json({Product: newlyCreatedProduct}))
        .catch(err => res.json({ message: 'hmmm.. something went wrong', error: err}));
    },

    //UPDATE
    updateExistingProduct : (req, res) => {
        Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true})
        .then(updatedProduct => res.json({product: updatedProduct}))
        .catch( err => res.json({ message: 'hmmm.. something went wrong', error: err}))
    },

    //DELETE
    deleteExistingProduct : (req, res) => {
        Product.findByIdAndDelete(req.params.id)
        .then(result => res.json({result: result}))
        .catch( err => res.json({ message: 'hmmm.. something went wrong', error: err}))
    }
}