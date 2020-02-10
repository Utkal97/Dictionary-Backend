const router = require('express').Router();
const { getWordInfo, getSpecificInfo } = require('./getRequest.js');

router.get('/:word/definitions', async function(req, res) {
    const reqWord = req.params.word;
    try {
        const ans = await getSpecificInfo(reqWord, 'definitions');
        res.send(ans);
    }
    catch(err) {
        res.status(400).send(err);
    }
});

router.get('/:word/antonyms', async function(req, res) {
    const reqWord = req.params.word;
    try {
        const ans = await getSpecificInfo(reqWord, 'antonyms');
        res.send(ans);
    }
    catch(err) {
        res.status(400).send(err);
    }
});

router.get('/:word/synonyms', async function(req, res) {
    const reqWord = req.params.word;
    try {
        const ans = await getSpecificInfo(reqWord, 'synonyms');
        res.send(ans);
    }
    catch(err) {
        res.status(400).send(err);
    }
});

router.get('/:word/examples', async function(req, res) {
    const reqWord = req.params.word;
    try {
        const ans = await getSpecificInfo(reqWord, 'examples');
        res.send(ans);
    }
    catch(err) {
        res.status(400).send(err);
    }
});

router.get('/:word/allInfo', async function(req, res) {
    const reqWord = req.params.word;
    try {
        const ans = await getWordInfo(reqWord);
        res.send(ans);
    }
    catch(err) {
        res.send(400).send(err);
    }
})

module.exports = router;