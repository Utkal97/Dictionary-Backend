const mongoose = require('mongoose');
const wordSchema = new mongoose.Schema( {
    word : String,
    definitions : {
        type : [String],
        default : []
    },
    antonyms : {
        type : [String],
        default : []
    },
    synonyms : {
        type : [String],
        default : []
    },
    examples : {
        type : [String],
        default : []
    }
});

module.exports = wordSchema;
