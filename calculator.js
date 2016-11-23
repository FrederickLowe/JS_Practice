//squareNumber
function squareNumber(num) {
    var number = num;
    return "The result of squaring the number " + number + " is " + Math.pow(number, 2);
}

//halfNumber
function halfNumber(num) {
    var number = num;
    return "Half of " + number + " is " + number / 2;
}

//percentOf
function percentOf(num1, num2) {
    var number1 = num1;
    var number2 = num2;
    var percentage = (number1 / number2) * 100;
    return number1 + " is " + percentage + "% of " + number2;
}

//areaOfCircle
function areaOfCircle(r) {
    var radius = r;
    var area = Math.PI * Math.pow(radius, 2);
    return "The area is " + Math.floor(area);
}

function ultimateFunction(num) {
    var halfNum = halfNumber(n);
    var squaredResult = squareNumber(halfNum);
    var areaResult = areaOfCircle(squaredResult);
    var newPercentage = percentOf(squaredResult, areaResult);
    return newPercentage;
}
