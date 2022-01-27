const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "{PATH} must be present!"],
        minlength: [3, "{PATH} must have at least 3 characters!"]
    }
}, {timestamps: true})

//make authorschema an export
const Author = mongoose.model("Author", AuthorSchema)
module.exports = Author;