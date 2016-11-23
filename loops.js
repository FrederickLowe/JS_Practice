//reporter
for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}

//multiplication
for (var i = 0; i <= 10; i++) {
    var result = i * 9;
    console.log(i + " * 9 = " + result);
    for (var j = 10; j >= 0; j--) {
        var resultA = i * j;
        console.log(i + " * " + j + " = " + resultA);
    }
}

for (var multiplier = 0; multiplier <= 10; multiplier++) {
 for (var i = 0; i <= 10; i++) {
   var result = multiplier * i;
   console.log(multiplier + ' * ' + i + ' = ' + result);
 }
}

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

for(var i = 60; i <= 100; i++){
  console.log("For " + i + ", you got a " + assignGrade(i) + ".");
}
