var games = ["Dragon Quest Builders", "Resident Evil 5", "Guardian Force", "Armed Police Batrider", "Mad World"];
for(var i = 0; i < games.length; i++){
  if(i + 1 == 1){
    console.log("My " + (i + 1) + "st choice is " + games[i]);
  } else if (i + 1 == 2){
    console.log("My " + (i + 1) + "nd choice is " + games[i]);
  } else if(i + 1 == 3){
    console.log("My " + (i + 1) + "rd choice is " + games[i]);
  }else{
    console.log("My " + (i + 1) + "th choice is " + games[i]);
  }
}
