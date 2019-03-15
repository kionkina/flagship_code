
  
function countTime()
{
    seconds = seconds + 1;
    timeoutID = setTimeout("countTime()", 1000);
}

function getTimeSpent()
{
    var mins, secs;
    mins = 0;
    mins = parseInt(seconds / 60);
    secs = seconds % 60;

	if (mins>0){
		msg = addZero(mins) + ":" + addZero(secs);
		}else{
		msg = "00:" + addZero(secs);
		}
    document.getElementById("timer2").innerHTML = msg;
    document.getElementById("timer2").style.display = "inline";
	
	 //alert("You finished "+msg);
	//document.getElementById("timer").style.visibility = "hidden";
	document.getElementById("timer").style.display = "none";
	
    seconds = 0;
    return msg;
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
    document.getElementById("timer").innerHTML = addZero(minutes) + ":" + addZero(secs);
}, 1000);


//might need shuffle
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
        ans_temp = answers[ctr];
        arr[ctr] = arr[index];
        answers[ctr] = answers[index];
        arr[index] = temp;
        answers[index] = ans_temp;
    }
    return arr;
}


//start function runs when user hit start button
//timer starts running
function result(){
    
    //only add text if it's empty
    if (this.document.getElementById("sco").innerHTML == ""){
           getTimeSpent();
         //console.log("total_correct: " + total_correct);
           correct = Math.round((correct/answers.length)* 100);
         this.document.getElementById("sco").innerHTML += "Score: " + correct + " %";  
 }
    document.getElementById('check_div').innerHTML = '<button type="button" id="start_redo" value="Redo" font-size:36px;height:50px; width:170px onclick="start()"> Redo </button>';
 
    //add in other things that you need to reset
   
}   


function start(){

choices = shuffle(choices);
clearInterval();
clearTimeout(timeoutID);
//reset time
timeoutID = null;
seconds = 0;
score = 100;
msg = "";


document.getElementById("timer").style.display = "inline";   
document.getElementById("timer2").style.display = "none";   
    

document.getElementById("sco").innerHTML = "";


    if (document.getElementById("start_redo")){
document.getElementById("start_redo").remove(); 
}


//reset check div
var check_div = document.getElementById("check_div");
//console.log(check_div);
if (check_div.innerHTML == ""){
    check_div.innerHTML += "<input type='button' id='btn_check' name='done' value='Check' onclick='result()'> ";
}

//remove old table if exists
if (game.innerHTML != ""){
    game.innerHTML = "";
}

//STUFF
    
    countTime();
}
   


