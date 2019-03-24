var correctCards = 0;
//var text = ['di1', 'tou2', 'si1', 'gu4', 'xiang1'];

//var terms = ['t', 's', 'd', 'g', 'x'];
var terms = ['台','对','刚','汉','后','开','宝','长','坏', '欢'];

//var correctness = [0, 0, 0, 0, 0];

var timeoutID = null;
var seconds = 0;

var startPos;


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
	
 	for ( var i=0; i<correctness.length; i++ ) {
    $('<div>' + text[random2_array[i]-1] + '</div>').data( 'term', terms[random2_array[i]-1] ).data('id', i).attr( 'id', 'card'+ (i+1) ).appendTo( '#cardPile' ).draggable( { 
      stack: '#cardPile div',
      cursor: 'move',
      revert: true,
	  drag: handleCardDrag,
	  start: origPos
    } );
  }
	
	
	for ( var i=0; i<correctness.length; i++ ) {
		//$('<div>'+ term_array[random1_array[i]-1] +'</div>').data( 'term', terms[random1_array[i]-1] ).appendTo( '#cardSlots' ).droppable( {
			$('<div>'+ term_array[random1_array[i]-1] + '</div>').data( 'term', terms[random1_array[i]-1] ).appendTo( '#cardSlots' ).droppable( {
			
			accept: '#cardPile div',
			hoverClass: 'hovered',
			drop: handleCardDrop
    } );
  }

}

function handleCardDrop( event, ui ) {
  var slotTerm = $(this).data( 'term' );
  var cardTerm = ui.draggable.data( 'term' );

  // If the card was dropped to the correct slot,
  // change the card colour, position it directly
  // on top of the slot, and prevent it being dragged
  // again
	

  if ( slotTerm === cardTerm ) {
	if (ui.draggable.hasClass('incorrect')) {
		
		ui.draggable.removeClass('incorrect');
	}
	if (!ui.draggable.hasClass('correct')) {
		
		ui.draggable.addClass( 'correct' );
		correctness[ui.draggable.data('id')] = 1;
		correctCards++;
	}
    //ui.draggable.draggable( 'disable' );
    //$(this).droppable( 'disable' );
    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    ui.draggable.draggable( 'option', 'revert', false );
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
    //ui.draggable.draggable( 'disable' );
    //$(this).droppable( 'disable' );
    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    ui.draggable.draggable( 'option', 'revert', false );
  }
  
  // If all the cards have been placed correctly then display a message
  // and reset the cards for another go

  /*
  if ( correctCards === 5 ) {
    $('#successMessage').show();
    $('#successMessage').animate( {
      left: '380px',
      top: '200px',
      width: '400px',
      height: '100px',
      opacity: 1
    } );
  }
  */

}

function handleCardDrag( event, ui ) {
	if ($(this).hasClass('incorrect') || $(this).hasClass('correct')) {
		/*
		$(this).data("ui-draggable").originalPosition = {
			top : startPos.top,
			left : startPos.left
		};
		*/
		$(this).draggable( 'option', 'revert', true );	
	}
	
	//document.getElementById("drag_num").innerHTML = "D = " + ui.name;
}

function origPos(event, ui) {
	//startPos = $(this).offset();
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
			
			n=i;
		    num = random1_array.indexOf(random2_array[n]);
			
			//document.getElementById("num").innerHTML = "n = "+ n + "<br> r1 = " + random1_array.indexOf(random2_array[n]) + "<br> num = " + num;
			
            //document.getElementById("correct"+num).style.visibility = "visible";
			document.getElementById("correct_"+num).style.display = "table-cell";
			//document.getElementById("incorrect"+num).style.visibility = "hidden";
			document.getElementById("incorrect_"+num).style.display = "none";
			
			//document.getElementById("incorrect"+num).remove();
			
            right++;
			score = score + 100/correctness.length;
        }
		else {
			//document.getElementById("incorrect"+i).style.visibility = "visible";
			
			n=i;
		    num = random1_array.indexOf(random2_array[n]);
			
			document.getElementById("incorrect_"+num).style.display = "table-cell";
			document.getElementById("correct_"+num).style.display = "none";
			//document.getElementById("correct"+num).style.visibility = "hidden";
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