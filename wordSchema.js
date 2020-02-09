const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let wordSchema = new Schema({
    word : String,
    definitions : [],
    antonyms : [],
    synonyms : [],
    examples : []
})

module.exports = wordSchema;