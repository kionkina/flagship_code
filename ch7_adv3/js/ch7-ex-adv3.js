
var correctCards = 0;
var timeoutID = null;
var seconds = 0;
var quz_length = 10;	


var term_array = ['筆', '藝','膚','辭','舉','遲','奮','難'];
var ans_key =    {'筆': 1, '藝':2,'膚':3,'辭':4,'舉':5,'遲':6,'奮':7,'難':8};


var correctness = [0,0,0,0,0,0,0,0];

$( init );

function shuffle(arr) {
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
    
        arr[ctr] = arr[index];
       
        arr[index] = temp;
 
    }
}


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


shuffle(term_array);
	
var terms = document.getElementById("terms1");
var terms2 = document.getElementById("terms2");

for (var i=0; i<term_array.length/2; i++){
	
	terms1.innerHTML += "<tr><td style='text-align: right'  width='20px'><a  class='mark_ex6' href='#'>&#10008;</a><a  class='mark_correct_ex6' href='#'>&#10004;</a></td><td> <div class='e5_width font_kai'>" + "<font color='#484848'>" + (i+1) +  "</font>&nbsp;&nbsp;&nbsp; " +  term_array[i] +"</div></td><td><input type='text' class='answer_input' maxlength='2' id='" + i + "'></input></td></tr>";
		
}
	
for (var i=term_array.length/2; i<term_array.length; i++){
	
	terms2.innerHTML += "<tr><td style='text-align: right'  width='20px'><a class='mark_ex6' href='#'>&#10008;</a><a class='mark_correct_ex6' href='#'>&#10004;</a></td><td> <div class='e5_width font_kai'>" + "<font color='#484848'>" + (i+1) +  "</font>&nbsp;&nbsp;&nbsp; " +  term_array[i]  + 
	 "</div></td><td><input type='text' class='answer_input' maxlength='2' ></input></td></tr>";
		
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
		 console.log(ans_key[term_array[i]]);
		 if (current_answer == ans_key[term_array[i]]){
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
