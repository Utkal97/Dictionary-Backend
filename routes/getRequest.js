const mongoose = require('mongoose');
const wordSchema = require('../wordSchema.js');

async function getSpecificInfo(word, info) {
    const collection = word[0].toUpperCase();
    console.log(`${info} requested for ${word}. Searching in collection-${collection}`);
    const wordModel = mongoose.model('word', wordSchema, collection);
    try {
        const doc = await wordModel
                    .findOne({word : word})
                    .select(`${info} -_id`);

        if(doc === null)
            throw { status: 404 };
        return doc;
    }
    catch(err) {
        throw err;
    }
} 

async function getWordInfo(word) {
    const collection = word[0].toUpperCase();
    console.log(`Whole information for word ${word} is being given.`);
    const wordModel = mongoose.model('word', wordSchema, collection);
    try {
        const doc = await wordModel
                    .findOne({word : word})
                    .select(`-_id`);

        if(doc === null)
            throw { status : 404 };
        return doc;
    }
    catch(err) {
        throw err;
    }
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

module.exports.getSpecificInfo = getSpecificInfo;
module.exports.getWordInfo = getWordInfo;
module.exports.getRandomWord = getRandom;