// First Task "Feet To Mile"
function feetToMile(feet){
    var mile = feet/5280;
    return mile;

} 

var userMile = feetToMile(30);
console.log(userMile);



// Second Task "Wood Calculator"
function woodCalculator(chair, table, bed){
    var chairWoodNeed = chair * 1;
    var tableWoodNeed =  table * 3;
    var bedWoodNeed = bed * 5;
    var totalWoodNeed = chairWoodNeed + tableWoodNeed + bedWoodNeed;
    return totalWoodNeed;
}
var woodNeed = woodCalculator(10, 20, 30);
console.log(woodNeed);



// Third Task "Brick Calculator"
function brickCalculator(numbers){
    var oneToTen = 10;
    var elevenToTwenty;
    var twentyoneToContinue;

    if (numbers <=0){
    return "negative"}
    else{
      if(numbers <= 10){
          oneToTen = numbers;
          return oneToTen * 15 * 1000;
      }
      else if ((numbers > 10) &&  (numbers <= 20)){
          elevenToTwenty = numbers - oneToTen;
          return((oneToTen * 15 * 1000) + (elevenToTwenty * 12 * 1000));
      }
      else if (numbers > 20){
          elevenToTwenty = 10;
          twentyoneToContinue = numbers - 20;
          return((oneToTen * 15 * 1000) + (elevenToTwenty *12 * 1000) + (twentyoneToContinue *10 *1000));
      }


    }

}
var totalBricksNeed = brickCalculator(21);
console.log(totalBricksNeed);




// Fourth Task "Tiny Friend"
function tinyFriend(names){
    var smallest = names[0];
    for(var i = 0; i < names.length; i++){

        var currentName = names[i];
        if (currentName.length < smallest.length){
            smallest = currentName;
       

        }

    }
    return smallest;
}

var smallName = tinyFriend(["Lima", "Farjana", "Nupur", "Taj"]);
console.log(smallName);
