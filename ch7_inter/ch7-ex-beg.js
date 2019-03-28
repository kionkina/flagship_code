
var correctCards = 0;
var timeoutID = null;
var seconds = 0;
var quz_length = 10;	

var text =  ['台','对','刚','汉','后','开','宝','长','坏', '欢'];
var term_array = ['臺', '對','剛','漢','後','開','寶','長','壞', '歡'];
var ans_array =   ['台','对','刚','汉','后','开','宝','长','坏', '欢'];

var correctness = [0,0,0,0,0,0,0,0,0,0];


//returns [shuffled arr, shuffled answers]
function shuffle(arr, answers) {
    var ctr = arr.length
    var temp;
    var ans_temp;
    var index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arr[ctr];
        ans_temp = answers[ctr];
        arr[ctr] = arr[index];
        answers[ctr] = answers[index];
        arr[index] = temp;
        answers[index] = ans_temp;
    }
}

$( init );

function countTime()
{
    seconds = seconds + 1;

    timeoutID = setTimeout("countTime()",1000);
}


function getTimeSpent()
{
    var mins, secs, msg;

    mins = 0;

    mins = parseInt(seconds / 60);

    secs = seconds % 60;

    //msg = mins > 0 ? mins + " minutes and " + secs + " seconds" : secs + " seconds";
	
	if (mins>0){
		msg = addZero(mins) + ":" + addZero(secs);
		}else{
		
		msg = "00:" + addZero(secs);
		}
	
    document.getElementById("timer2").innerHTML = msg;

    seconds = 0;

    return msg;
}

function init() {


shuffle(term_array, ans_array);
	
var terms = document.getElementById("terms");

for (var i=0; i<term_array.length; i++){
	
	terms.innerHTML += "<tr>";
	terms.innerHTML += "<td style='text-align: right'  width='20px'><a id='incorrect_" + i + "' class='mark_ex6' href='#'>&#10008;</a><a  id='correct_" + i  + "' class='mark_correct_ex6' href='#'>&#10004;</a></td><td> <div class='e5_width font_kai'>" + "<font color='#484848'>" + (i+1) +  "</font>&nbsp;&nbsp;&nbsp; " +  term_array[i] + "</div></td></tr>"; 
	
}

	
  // Hide the success message
  $('#successMessage').hide();
  $('#successMessage').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );

  // Reset the game
  correctCards = 0;
  $('#cardPile').html( '' );
  $('#cardSlots').html( '' );
  $('#DROP').html('');
    
    

    
 
for ( var i=0; i<correctness.length; i++ ) {
    $('<div></div>').attr('id',"card_drop" + i).attr('style', 'background-color: lightgrey; box-shadow: none;').appendTo( '#cardPile' );
		}
 

    
 




function addZero(digit){
    var zpad = digit + '';
    if (digit < 10) {
        zpad = "0" + zpad;
    }
    return zpad;
}

// real time Timer
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
	
	var secs;
	var minutes;
	
	secs = seconds % 60;
	minutes = parseInt(seconds/ 60);
    
    // Output the result in an element with id="timer"
    document.getElementById("timer").innerHTML = addZero(minutes) + ":" + addZero(secs);
	
}, 1000);

countTime();