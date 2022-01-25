const ProductController = require('../controllers/products.controllers');
console.log("this is the product controller", ProductController);
const { findAllProducts, findSingleProducts, createNewProduct } = require('../controllers/products.controllers')
module.exports = app => {
    app.get('/api/hello', (req, res) => {
        res.json({message: "hello"})
    })
    app.get('/api/products', findAllProducts); //destructured controllers
    app.get('/api/products/:id', findSingleProducts); 
    app.post('/api/products', createNewProduct);
}
//these routes follow RESTful conventions