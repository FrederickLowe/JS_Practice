//recipe
var recipe = {
  title: "oatmeal",
  servings: 1,
  ingredients: ['oats', 'raisins', 'butter', 'brown sugar']
};

console.log(recipe.title);
console.log('Serves: ' + recipe.servings);
console.log('Ingredients: ');
for (var i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}

//reading list
var books = [{
    title: 'Gatsby',
    author: 'Fitz',
    alreadyRead: true
}, {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    alreadyRead: false
}];

for (var i = 0; i < books.length; i++) {
    console.log(books[i].title + " by " + books[i].author);
}

for (var i = 0; i < books.length; i++) {
    if (books[i].alreadyRead) {
        console.log('You already read ' + books[i].title);
    } else {
        console.log('You still need to read ' + books[i].title + ' by ' + books[i].author)
    }
}

//database
var movie = {
    title: 'Taxi Driver',
    duration: 200,
    cast: ['Robert De Niro', ' Jodie Foster']
}

function movieInfo(m) {
    console.log(m.title + ' last for ' + m.duration + '. ' + 'Stars: ' + m.cast + '.');
}

movieInfo(movie);

//cashRegister
var cartForParty = {
    banana: 1.25,
    handkerchief: .99,
    Tshirt: 25.01,
    apple: 0.60,
    nalgene: 10.34,
    proteinShake: 22.36
};

function cashRegister(c) {
    var total = 0;
    var i = 0;
    for (key in c) {
        total += parseFloat(Object.values(c)[i]);
        i++;
    }
    return total;
}

console.log(cashRegister(cartForParty));
