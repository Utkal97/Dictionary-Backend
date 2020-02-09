const Router = require('express').Router();
const { getRandomWord } = require('./getRequest');

Router.get('/', function(req, res) {
    getRandomWord(res);
});

module.exports = Router;