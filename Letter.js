let Letter = function(userLetter, actualLetter) {
    this.actualLetter = actualLetter;
    this.guess = false;
    this.userLetter = userLetter;
    this.placeholder = '';
}

Letter.prototype.display = function () {
    if (this.actualLetter === ' ') {
        this.placeholder = ' ';
    } else if (this.guess === true) {
        this.placeholder = this.actualLetter;
    } else {
        this.placeholder = '_';
    }
};

Letter.prototype.test = function () {
    if (this.userLetter.toLowerCase() === this.actualLetter) {
        this.guess = true;
    } else {
        this.guess = false;
    }
    this.display();
};

module.exports.Letter = Letter;

