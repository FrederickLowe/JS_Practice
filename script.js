//The Fortune Teller
function tellFortune(career, place, companion, kids) {
    var numOfChildren = kids;
    var partner = companion;
    var geo = place;
    var job = career;

    return "You will be a " + job + " in " + geo + ", and married to " + partner + " with " + numOfChildren + " kids.";
}

//The Age Calculator
function calculateAge(birth1, futureYear1) {
    var birth = birth1;
    var futureYear = futureYear1;
    var ageInFuture1 = futureYear - birth;
    var ageInFuture2 = futureYear - birth - 1;
    return "I will be either " + ageInFuture1 + " or " + ageInFuture2 + " in " + futureYear + ".";
}

//The Lifetime Supply Calculator
function calculateSupply(age, amount) {
    var currentAge = age;
    var maxAge = 80;
    var estimatedAmount = amount;
    var restOfLife = (maxAge - currentAge) * (estimatedAmount * 365);
    return "You will need " + restOfLife + " to last you until the ripe old age of " + maxAge + ".";
}

//The Geometrizer
function calcCircumfrence(r) {
    var radius = r;
    var circumf = 2 * Math.PI * radius;
    return "The circumference is " + circumf;
}

function calcArea(r){
  var radius = r;
  var area = Math.PI * Math.pow(radius, 2);
  return "The area is " + area;
}

//The Temperature Converter
function celsiusToFahrenheit(celsius){
  var cels = celsius;
  var fahr = (cels * 9 / 5) + 32;
  return cels + "°C is " + fahr + "°F.";
}

function fahrenheitToCelsius(fahrenheit){
  var fahr = fahrenheit;
  var cels = (fahr - 32) * 5 / 9;
  return fahr + "°F is " + cels + "°C.";
}
