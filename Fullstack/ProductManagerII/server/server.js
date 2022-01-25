const express = require ('express');
const cors = require('cors');
const app = express();
const PORT = 8000;


//MIDDLEWARE
app.use(cors()); //will accept ANY request from ANYONE, fine for smaller projects
app.use(express.json(), express.urlencoded({extended: true}));
require ('./config/mongoose.config');

const AllProductRoutes = require('./routes/products.routes');
AllProductRoutes(app);

app.listen(PORT, () => console.log(`server locked and loaded on PORT: ${PORT}`));