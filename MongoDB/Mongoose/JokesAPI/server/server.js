const express = require ('express');
const app = express();
const PORT = 8000;

//MIDDLEWARE
app.use(express.json(), express.urlencoded({extended: true}));


// 1. connect mongodb by requiring the file here
require ('./config/mongoose.config');
// 2. create mongoose schema
// 3. use mongoose model to make CRUD functions -> controller
// 4. create routes to execute functions to db
const AllJokeRoutes = require("./routes/jokes.routes");
AllJokeRoutes(app);

//alternately
// require("./routes/jokes.routes")(app);

app.listen(PORT, () => console.log(`server locked and loaded on PORT: ${PORT}`));

/* 
what is going on here?
server.js runs from top to bottom
creates a server first 
runs middleware
connects to db file which connects to a database
then executes function which reads all the routes and passes in the app instance*/