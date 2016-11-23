//greaterNum
function greaterNum(numA, numB) {
    if (numA > numB) {
        return numA;
    } else {
        return numB;
    }
}

//helloWorld
function helloWorld(lang) {
    if (lang == "es") {
        return "Hola, Mundo";
    } else if (lang == "de") {
        return "Hallo, Welt";
    } else {
        return "Hello, World";
    }
}

//assignGrade
function assignGrade(numScore) {
    if (numScore >= 90) {
        return "A";
    } else if (numScore >= 80) {
        return "B";
    } else if (numScore >= 70) {
        return "C";
    } else if (numScore >= 60) {
        return "D";
    } else {
        return "F";
    }
}

//pluralize
function pluralize(noun, num) {
    if (num > 1 || num == 0) {
        return num + " " + noun + "s";
    } else {
        return num + " " + noun;
    }
}
