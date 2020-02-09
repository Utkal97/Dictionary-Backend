const router = require('express').Router();
const {getWordInfo} = require('./getRequest.js');

router.get('/:word/definitions', function(req, res) {
    const reqWord = req.params.word;
    getWordInfo(reqWord, 'definitions', res);
});

router.get('/:word/antonyms', function(req, res) {
    const reqWord = req.params.word;
    getWordInfo(reqWord, 'antonyms', res);
});

router.get('/:word/synonyms', function(req, res) {
    const reqWord = req.params.word;
    getWordInfo(reqWord, 'synonyms', res);
});

router.get('/:word/examples', function(req, res) {
    const reqWord = req.params.word;
    getWordInfo(reqWord, 'examples', res);
});

module.exports = router;