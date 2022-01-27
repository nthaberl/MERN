const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB_NAME = "authors_db";

//MIDDLEWARE
app.use(cors(), express.json(), express.urlencoded({extended: true}));

//database connection
require("./config/mongoose.config")(DB_NAME)

// connect the routes
require ("./routes/authors.routes")(app);

app.listen(PORT, () => {
    console.log(`server up on port: ${PORT}`)
})