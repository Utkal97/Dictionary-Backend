const mongoose = require('mongoose');
const wordSchema = require('../wordSchema.js');

function getInfo(word, info, res) {
    const collection = word[0].toUpperCase();
    console.log(`${info} requested for ${word}. Searching in collection-${collection}`);
    const wordModel = mongoose.model('word', wordSchema, collection);
    wordModel
        .findOne({word : word})
        .select(`${info} -_id`)
        .then( (doc) => res.send(doc[info]))
        .catch( (err) => {return err})
} 

function getRandom(res) {
    const coll = String.fromCharCode(65 + Math.floor(Math.random() * 25));
    // console.log(`Giving off any word starting with Letter : ${coll}`);
    const collection = mongoose.model('collection', wordSchema, coll);
    collection.countDocuments().exec( function(err, count) {
        var randomCount = Math.floor(Math.random() * count);
        collection.findOne().skip(randomCount).select('-_id -__v').exec(
            function(err, result) {
                if(err)
                    res.send(err);
                else
                    res.json(result);
            }
        );
    });
}
module.exports.getWordInfo = getInfo;
module.exports.getRandomWord = getRandom;