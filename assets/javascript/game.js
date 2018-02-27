// .ready the DOM
$(document).ready(function() {
   
    //Put variable to have row 6 display random number (use Math.random) 
    //randomNumber must be bewtee 19 and 120 
var randomNumber = Math.floor(Math.random() *101+19)

//call on the div from row 6 in html to display a random number from randomNumber var
$("#number").text(randomNumber);

// Make variables for each jewel to be randomly assigned a number
//use math.random for each jewel variable and have it be a number between 1 and 12 
var jewel1 = Math.floor(Math.random() *11+1)
var jewel2 = Math.floor(Math.random() *11+1)
var jewel3 = Math.floor(Math.random() *11+1)
var jewel4 = Math.floor(Math.random()*11+1)

//The player will have to guess the answer.

//function here- call on the DOM to recognize when you click on a gem and log the amount 

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

	var counter = 0;
	var wins = 0;
	var losses = 0;
	$('#win').text(wins);
	$('#loss').text(losses);
	
	newCrystals();
	newGame();

	function newCrystals () {
		var numbers = []
			while(numbers.length < 4){
			  var randomnumber = Math.ceil(Math.random()*12)
			  var found = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomnumber){
					found = true; break
				}
			  }
			  if(!found)numbers[numbers.length]=randomnumber;
			}
		console.log(numbers);		

		for (i = 0; i < numbers.length; i++) {
			var imageCrystal = $('<img>');
			imageCrystal.attr('data-num', numbers[i]);
			imageCrystal.attr('src', crystals[i]);
			imageCrystal.attr('alt', 'crystals');
			imageCrystal.addClass('crystalImage')
			$('#crystals').append(imageCrystal);
		}
	}

	function newGame() {

		counter = 0;
		$('#yourScore').text(counter);

		function randomIntFromInterval(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);
			}

		var numberToGuess = randomIntFromInterval(19,120);

		$('.value').text(numberToGuess);


		$('.crystalImage').on('click', function(){
		    counter = counter + parseInt($(this).data('num'));
		   
		    $('#yourScore').text(counter);

		    if (counter == numberToGuess){
		      $('#status').text('You won!!!!');
		      wins ++;
		      $('#win').text(wins);
		      console.log(wins)
		      $('#crystals').empty();
		      newCrystals();
		      newGame();
		        
		    } else if ( counter > numberToGuess){
		        $('#status').text('You lost!')
		        losses ++;
		        $('#loss').text(losses);
		        console.log(losses)
		        $('#crystals').empty();
		        newCrystals();
		        newGame();
		    }
		});
	}

});