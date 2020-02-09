const mongoose = require('mongoose');

const wordSchema = require('./Schema.js');
const listOfJsons = require('./appendAllData.js');

const dbname = "dictionary";
const username = "Utkal97";
const password = "utkal97";
const ConnectString = `mongodb+srv://${username}:${password}@onlineclass-azzct.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(
    ConnectString, 
    { useNewUrlParser: true })
        .then( async () => {
            console.log("connected to MongoDB");
            for(let i=0;i<26;i++) {
                let data = listOfJsons[i];
                let ch = String.fromCharCode(65+i);
                console.time(`Upload time for letter ${ch}`);
                for(let word in data) {
                    let defns = [];
                    let egs = [];

                    for(let ind in data[word]['MEANINGS']) {
                        defns.push(data[word]['MEANINGS'][ind][1]);
                        egs.push(...data[word]["MEANINGS"][ind][3]);
                    }
                    var Words = mongoose.model('Words', wordSchema, ch);
                    const wordObj = new Words({
                                    word : word.toLowerCase(),
                                    definitions : defns,
                                    antonyms : data[word]['ANTONYMS'],
                                    synonyms : data[word]['SYNONYMS'],
                                    examples : egs
                                });
                    const savedWord = await wordObj.save();
                }
                console.timeEnd(`Upload time for letter ${ch}`);
            }
        })
        .then( () => {
            console.log("Uploads are completed.");
            mongoose.connection.close()
                .then(() => console.log("connection to MongoDB is closed."))
                .catch((err) => console.log(`couldn't close the connection due to ERROR : ${err}`));
        })
        .catch( (err) => console.log(err));