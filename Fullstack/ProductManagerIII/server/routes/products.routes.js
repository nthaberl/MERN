const ProductController = require('../controllers/products.controllers');
console.log("this is the product controller", ProductController);
const { findAllProducts, findSingleProducts, createNewProduct, updateExistingProduct, deleteExistingProduct } = require('../controllers/products.controllers')
module.exports = app => {
    app.get('/api/hello', (req, res) => {
        res.json({message: "hello"})
    })
    app.get('/api/products', findAllProducts); //destructured controllers
    app.get('/api/products/:id', findSingleProducts); 
    app.post('/api/products/', createNewProduct);
    app.put('/api/products/:id', updateExistingProduct);
    app.delete('/api/products/:id', deleteExistingProduct);
}
//these routes follow RESTful conventions