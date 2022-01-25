const mongoose = require('mongoose');
const DB_NAME = "products_db";

mongoose.connect('mongodb://localhost/' + DB_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`established a connection to ${DB_NAME}`))
    .catch(errorObject => console.log('uh-oh, something went wrong when connecting to the database', errorObject))