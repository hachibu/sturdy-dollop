var createTag = require('../create-tag'),
    shell     = require('shelljs');

var sh = createTag(result => shell.exec(result, { silent: true }));

module.exports = sh;