let Letter = require('./Letter.js');
Letter = Letter.Letter;
let wordList = ['instantiation', 'immutability', 'mutability', 'functional programming', 'prototype', 'prototype chain', 'pure function', 'impure function', 'imperative programming', 'declarative programming', 'object oriented programming', 'observables', 'reactive programming', 'functional reactive programming', 'recursion'];

let Word = function (currentWord) {
    this.letterArr = [];
    this.currentWord = currentWord;
    this.numLetters = 0;
};

Word.prototype.wordBuilder = function () {
    this.currentWord.split('');
    for (let i = 0; i < this.currentWord.length; i++) {
        if (this.currentWord[i] !== ' ') {
            this.numLetters++;
        }
        this.letterArr.push(new Letter('', this.currentWord[i]));
    }
};

module.exports.Word = Word;
module.exports.wordList = wordList;




