let listOfJsons = [];
for(let i=0; i<26; i++) {
    const ch = String.fromCharCode(i+65);
    const fileData = require(`./Data/D${ch}`);
    listOfJsons.push(fileData);
}
module.exports = listOfJsons;