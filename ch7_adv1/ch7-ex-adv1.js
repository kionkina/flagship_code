var choices = ["筆","婆","遲","塵","麵","街","森","腿","協","鼻"];

var answers = [1,0,1,1,1,0,0,0,1,0]

//0: simplified and traditional are the smae
//1: has simplified form

var total_correct = 0;

for (var i=0; i< answers.length; i++){
    if (answers[i] == 1){
        total_correct += 1;
    }
}

// JavaScript Document

    var timeoutID = null;
    var seconds = 0;
    var score = 100;
    var msg;

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



var game = document.getElementById('game');

game.innerHTML= "";


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

//create table
var game_table = "<table id='terms'>";

for (var i=0; i<choices.length; i++){
if (i % 5 == 0){
    game_table += "<tr>"
}
game_table += "<td state=-1 clicked=" + false + ">" + choices[i] + "<div class='check' id='check_" + i +"'></div></td>";
if (i % 5 == 4){
    game_table += "</tr>"
}    
};
game_table += "</table>";
game.innerHTML += game_table;

//add event listener to all terms
var all_terms = document.getElementById('terms').getElementsByTagName('td');
for (var i=0; i < all_terms.length;i++){
    var t = all_terms[i];
     t.addEventListener('click', manage_clicks);
    }
  
    countTime();
}


                                           
function manage_clicks(e){
    //console.log(this.getAttribute("state"));
    
    //go from neutral to has simplified form
    if (this.getAttribute('state') == -1) {
         this.setAttribute('state', 1);
         this.setAttribute('style', 'color: mediumseagreen ');
    }
     
    //go from simplified to same 
    else if(this.getAttribute('state') == 1) { 
        this.setAttribute('state', 0);
        this.setAttribute('style', 'color: steelblue');
    }
    
    //go from same to simplified
    else{
         this.setAttribute('state', 1);
         this.setAttribute('style', 'color: mediumseagreen');
    }
};


function result(){
    
  var correct = 0; //for score   
  var all_terms = document.getElementById('terms').getElementsByTagName('td');
  for (var i=0; i < all_terms.length;i++){
    var t = all_terms[i];
    var chosen = t.getAttribute('state');
    var correct_answer = answers[choices.indexOf(t.innerHTML[0])];
    //console.log(chosen);
    //console.log(correct_answer);
    var id = 'check_' + i;
    var mark = document.getElementById(id);
    //do nothing if it's not an answer and it wasn't chosen.
    if (chosen == correct_answer){
            mark.innerHTML += "✓";  
            mark.style.color = 'green';
            mark.style.visibility = 'visible';
            correct += 1;
    }
      else {
            mark.innerHTML += "x";
            mark.style.color = 'red';
            mark.style.visibility = 'visible';   
      }
}
    //only add text if it's empty
    if (this.document.getElementById("sco").innerHTML == ""){
           getTimeSpent();
         //console.log("total_correct: " + total_correct);
           correct = Math.round((correct/answers.length)* 100);
         this.document.getElementById("sco").innerHTML += "Score: " + correct + " %";  
 }
    document.getElementById('check_div').innerHTML = '<button type="button" id="start_redo" value="Redo" font-size:36px;height:50px; width:170px onclick="start()"> Redo </button>';
    for (var i=0; i < all_terms.length;i++){
        all_terms[i].removeEventListener('click', manage_clicks);
    }
  
   
}   

