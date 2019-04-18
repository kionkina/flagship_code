
var correctCards = 0;
var timeoutID = null;
var seconds = 0;
var quz_length = 10;	


var term_array = ['臺', '對','剛','漢','後','開','寶','長','壞', '歡'];
var simplified_array = ['台','对','刚','汉','后','开','宝','长','坏', '欢'];
var ans_array =   [0,1,2,3,4,5,6,7,8,9];

var correctness = [0,0,0,0,0,0,0,0,0,0];


//returns [shuffled arr, shuffled answers]
function shuffle(arr1, arr2, answers) {
    var ctr = arr1.length
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
        temp = arr1[ctr];
        ans_temp = answers[ctr];
		temp2 = arr2[ctr];
		arr2[ctr] = arr2[index];
		arr2[index] = temp2;
        arr1[ctr] = arr1[index];
        answers[ctr] = answers[index];
        arr1[index] = temp;
        answers[index] = ans_temp;
    }
}

$( init );

function countTime()
{
    seconds = seconds + 1;

    timeoutID = setTimeout("countTime()",1000);
}


function addZero(digit){
    var zpad = digit + '';
    if (digit < 10) {
        zpad = "0" + zpad;
    }
    return zpad;
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


shuffle(term_array, simplified_array, ans_array);
	
var terms = document.getElementById("terms1");
var terms2 = document.getElementById("terms2");

for (var i=0; i<term_array.length/2; i++){
	
	terms1.innerHTML += "<tr><td style='text-align: right'  width='10px'><a  class='mark_ex6' href='#'>&#10008;</a><a  class='mark_correct_ex6' href='#'>&#10004;</a></td><td> <div class='e5_width font_kai'>" + "<font color='#484848'>" + (i+1) +  "</font>&nbsp;&nbsp;&nbsp; " +  term_array[i] + 
	"(" + simplified_array[i]+")"	+"</div></td><td><input type='text' class='answer_input' id='" + i + "'></input></td></tr>";
		
}
	
for (var i=term_array.length/2; i<term_array.length; i++){
	
	terms2.innerHTML += "<tr><td style='text-align: right'  width='10px'><a class='mark_ex6' href='#'>&#10008;</a><a class='mark_correct_ex6' href='#'>&#10004;</a></td><td> <div class='e5_width font_kai'>" + "<font color='#484848'>" + (i+1) +  "</font>&nbsp;&nbsp;&nbsp; " +  term_array[i]  + 
	"(" + simplified_array[i]+")" + "</div></td><td><input type='text' class='answer_input'></input></td></tr>";
		
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
}


 function result(){
	 var score = 0;
	 var all_answers = document.getElementsByClassName('answer_input');
	 console.log(all_answers);
	 for (var i=0; i< all_answers.length; i++){
		 var current_answer = parseInt(all_answers[i].value);
		 console.log(current_answer);
		 console.log(ans_array[i]);
		 if (current_answer == ans_array[i]){
			 score += 1;
			document.getElementsByClassName('mark_correct_ex6')[i].style.visibility = "visible";
			  document.getElementsByClassName('mark_ex6')[i].style.display="inline !important";
		 }
		 else {
			 document.getElementsByClassName('mark_ex6')[i].style.visibility= "visible";
			 
		
		 }	 
		
	 }
	
	 getTimeSpent();
	 score = Math.round((score/term_array.length)*100);
	document.getElementById("sco").innerHTML = score+" %";
	
	 
	 
 }
