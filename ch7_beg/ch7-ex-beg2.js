
var correctCards = 0;
var timeoutID = null;
var seconds = 0;
var quz_length = 10;	

var text =  ['开','宝','长','坏', '欢'];
var term_array = ['開','寶','長','壞', '歡'];
var ans_array =   ['开','宝','长','坏', '欢'];

var correctness = [0,0,0,0,0];


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
			$('<div> </div>').data( 'term', ans_array[i] ).attr('id',i).data('holding', false).appendTo( '#cardSlots' ).droppable( {
			accept: '#cardPile div',
			hoverClass: 'hovered',
			drop: handleCardDrop
    } );
        
}

    
 
		for ( var i=0; i<correctness.length; i++ ) {
    $('<div></div>').attr('id',"card_drop" + i).attr('style', 'background-color: lightgrey; box-shadow: none;').appendTo( '#cardPile' ).droppable( {
            accept:'#cardPile div',
			hoverClass: 'hovered',
            revert: 'invalid',
            drop: handleCardDrop2
});
        }
 

    
    
    for ( var i=0; i<correctness.length; i++ ) {
       $('<div>' + text[i] + '</div>').data( 'term', text[i] ).data('id', i).attr( 'id', 'card'+ (i+1)).attr('style', 'top:-18px;left:-110px').data('answerStack', null).appendTo('#card_drop' + i).draggable( { 
      cursor: 'move',
      revert: true,
	  drag: handleCardDrag,
    } );
    
    }
        




}
	

//dropping at cardpile slots
function handleCardDrop2(event, ui){
  
   //indicating that its last answer slot is now empty
    if (ui.draggable.data('answerStack') != null){
    var oldSlot = ui.draggable.data('answerStack');
    $(oldSlot).data('holding',false);
	console.log(oldSlot[0].id);
	correctness[oldSlot[0].id] = 0;
    }   
    
    ui.draggable.position( { of: $(this) } );
   // $(this).droppable('disable');
      ui.draggable.draggable( { 
      revert: 'invalid',
	  drag: handleCardDrag,
    } );
    
    
    
}


function origPos(event, ui) {
	
}

function handleCardDrop( event, ui ) {
    
    console.log(event.target);
    

//if this slot isn't holding anything else...
if ($(this).data('holding') === false){

    
//indicating that its last answer slot is now empty
    if (ui.draggable.data('answerStack') != null){
    var oldSlot = ui.draggable.data('answerStack');  
    $(oldSlot).data('holding',false);  
    }    
  
    

        

	
  var slotTerm = $(this).data( 'term' );
console.log("slotterm:");
	console.log(slotTerm);
  var cardTerm = ui.draggable[0].innerHTML;
  console.log("cardTerm");
	console.log(cardTerm);
    
  

  if ( slotTerm === cardTerm ) {
	if (ui.draggable.hasClass('incorrect')) {
		
		ui.draggable.removeClass('incorrect');
	}
	if (!ui.draggable.hasClass('correct')) {
		
		ui.draggable.addClass( 'correct' );
		correctness[this.id] = 1;
		correctCards++;
	}
    
  }
  else {
	if (ui.draggable.hasClass('correct')) {
		ui.draggable.removeClass('correct');
		correctCards--;
	}
	if (!ui.draggable.hasClass('incorrect')) {
		ui.draggable.addClass( 'incorrect' );
		correctness[ui.draggable.data('id')] = 0;
	}
  }
 

    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
   // $(this).droppable('disable');
      ui.draggable.draggable( { 
      revert: 'invalid',
	  drag: handleCardDrag,
    } );
    //indicating that this answer was dropped off at this event's answerslot
    ui.draggable.data('answerStack', $(this));    
        
    //indicating that it's holding something
    $(this).data('holding',true);

}
    
}


function handleCardDrag( event, ui ) {
 
	if ($(this).hasClass('incorrect') || $(this).hasClass('correct')) {
		/*
		$(this).data("ui-draggable").originalPosition = {
			top : startPos.top,
			left : startPos.left
		};
		*/
        $(this).removeClass('incorrect');
        $(this).removeClass('correct');
        //TRUE ALLOWS ELEMENT TO BE PLACED ELSEWHERE
		$(this).draggable( { 
      cursor: 'move',
      revert: 'invalid',
	  drag: handleCardDrag,
	  start: origPos
    } );
       // $(this).draggable('option', 'revert', true);	
	}
	
	//document.getElementById("drag_num").innerHTML = "D = " + ui.name;
}



function handleCardDrag( event, ui ) {
 
	if ($(this).hasClass('incorrect') || $(this).hasClass('correct')) {
		/*
		$(this).data("ui-draggable").originalPosition = {
			top : startPos.top,
			left : startPos.left
		};
		*/
        $(this).removeClass('incorrect');
        $(this).removeClass('correct');
        //TRUE ALLOWS ELEMENT TO BE PLACED ELSEWHERE
		$(this).draggable( { 
      cursor: 'move',
      revert: true,
	  drag: handleCardDrag,
	  start: origPos
    } );
       // $(this).draggable('option', 'revert', true);	
	}
	
	//document.getElementById("drag_num").innerHTML = "D = " + ui.name;
}



function result(f)
{
	var right = 0;
	var score = 0;
	
    for ( var i = 0; i < correctness.length; i++ ){
		
		var n;
		var num;
		
			
		document.getElementById("incorrect_"+i).style.visibility = "visible";
				
        if (correctness[i] === 1){
			
			document.getElementById("correct_"+i).style.display = "table-cell";
			document.getElementById("incorrect_"+i).style.display = "none";
			
			//document.getElementById("incorrect"+num).remove();
			
            right++;
			score = Math.round(score + 100/correctness.length);
        }
		else {
			//document.getElementById("incorrect"+i).style.visibility = "visible";
			
			document.getElementById("incorrect_"+i).style.display = "table-cell";
			document.getElementById("correct_"+i).style.display = "none";
			
        }
    }
	
	if (score === 99) {
		score = 100;
	}
 
   // f.res.value = "Result: "+ right + " of " + correctness.length + 
	//              "\nScore: " + score + "\n" +
      //            "Time Spent: " + getTimeSpent();
	
	getTimeSpent();
	document.getElementById("sco").innerHTML = score+" %";
	
	//document.getElementById("corre").innerHTML = "corre = "+ correctness;
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