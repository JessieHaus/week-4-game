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

//Wins and losses tally 
//first set up variable for userTotal, and then var for wins and losses
//make each one equal 0 and then add functions below to have number change with clicks 
var userTotal = 0;
var wins = 0;
var losses =0;


// 
$("#wins").text(wins);
$("#losses").text(losses);

//add wins to the userTotal var
function winner(){
    wins++;
    $("#wins").text(wins);
    reset();
}

//add losses to userTotal
function lost(){
    losses++
    $("#losses").text(losses);
    reset()
}

//assign numbers to each jewel button

$('#jewel1').on("click", function(){
    userTotal = userTotal + jewel1;
    $('#score').text(userTotal); 
          //sets win/lose conditions
        if (userTotal == randomNumber){
          winner();
        }
        else if ( userTotal > randomNumber){
          lost();
        }   
  })  
  $('#jewel2').on("click", function(){
    userTotal = userTotal + jewel1;
    $('#score').text(userTotal); 
          //sets win/lose conditions
        if (userTotal == randomNumber){
          winner();
        }
        else if ( userTotal > randomNumber){
          lost();
        }   
  })  
  $('#jewel3').on("click", function(){
    userTotal = userTotal + jewel1;
    $('#score').text(userTotal); 
          //sets win/lose conditions
        if (userTotal == randomNumber){
          winner();
        }
        else if ( userTotal > randomNumber){
          lost();
        }   
  })  
  $('#jewel4').on("click", function(){
    userTotal = userTotal + jewel1;
    $('#score').text(userTotal); 
          //sets win/lose conditions
        if (userTotal == randomNumber){
          winner();
        }
        else if ( userTotal > randomNumber){
          lost();
        }   
  });
}); 

