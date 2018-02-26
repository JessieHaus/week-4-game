//Put variables here(number 1-100 popup)()

var numbers = ["1","2","3","4","5","6","7", "8", "9", "10", "11", "12", "13"]//have the random number here between 1 and 100 in an array
var randomNumber = numbers[Math.floor(Math.random() * numbers.length)]; //this is the random number that pops up that user has to add up to to win 

//The player will have to guess the answer.

//function here- call on the DOM to recognize when you click on a gem and log the amount 
document.onkeydown = function (event) {

// The player will be shown a random number at the start of the game.
   
// There will be four crystals displayed as buttons on the page.

 // When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

 // Your game will hide this amount until the player clicks a crystal.

 // When they do click one, update the player's score counter.

// The player wins if their total score matches the random number from the beginning of the game.

 // The player loses if their score goes above the random number.

 // The game restarts whenever the player wins or loses.

 // When the game begins again, the player should see a new random number.
 // Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.


// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.


// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.
        