/* 
1.import/REQUIRE mongoose */

const mongoose = require('mongoose');
const DB_NAME = "jokes_db"

mongoose.connect('mongodb://localhost/' + DB_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`established a connection to ${DB_NAME}`))
    .catch(errorObject => console.log('something went wrong :(', errorObject))