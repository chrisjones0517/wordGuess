let inquirer = require('inquirer');
let chalk = require('chalk');
let Word = require('./Word.js');
let WordObj = Word.Word;
let wordList = Word.wordList;
let guesses = 10;
let thisWord;
let correctLetters;
let letterFound;
let placeholder = '';
let newWord = true;

shuffle(wordList);
let wordIndex = 0;

play();
function play() {

    if (newWord) {
        correctLetters = 0;
        thisWord = new WordObj(wordList[wordIndex]);
        thisWord.wordBuilder();
        newWord = false;
    }

    placeholder = '';
    for (let i = 0; i < thisWord.letterArr.length; i++) {
        thisWord.letterArr[i].test();
        placeholder += thisWord.letterArr[i].placeholder + ' ';
    }

    inquirer.prompt([
        {
            type: 'input',
            name: 'begin',
            message: placeholder + '\nGuess a letter!'
        }
    ]).then(answers => {
        
        placeholder = '';
        letterFound = false;
        for (let i = 0; i < thisWord.letterArr.length; i++) {
            
            if (!thisWord.letterArr[i].guess) {
                thisWord.letterArr[i].userLetter = answers.begin;
                thisWord.letterArr[i].test();

                if (thisWord.letterArr[i].guess) {
                    letterFound = true;
                    correctLetters++;
                }
            }

            thisWord.letterArr[i].test();
            placeholder += thisWord.letterArr[i].placeholder + ' ';
        }

        if (letterFound) {
            console.log(chalk.green('CORRECT!!!'));
            
        } else {
            guesses--;
            console.log(chalk.red('INCORRECT!!!'));
            console.log(`${guesses} guesses remaining!!!`);
            if (guesses === 0) {
                console.log(chalk.yellow('GAME OVER'));
                return;
            }
        }
        
        if (correctLetters === thisWord.numLetters) {
            console.log('You got it right! Next word!');
            wordIndex++;
            correctLetters = 0;
            placeholder = '';
            newWord = true;
        }

        if (wordIndex === wordList.length) {
            console.log(chalk.magenta('YOU WIN!!!'));
            return;
        }
        play();
    });
}

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

