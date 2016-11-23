var wordLetters = ['f', 'o', 'x'];
var guessedLetters = [];

//guessLetter
function guessLetter(gL) {
    for (var i = 0; i < wordLetters; i++) {
        if (wordLetters[i] == gL) {
            guessedLetters.push(gL);
        }
    }
    return guessedLetters;
}

//console.log(guessLetter('f'));
