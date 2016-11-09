'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
    $('#subBox').hide();
    $("a.thumbnail").click(projectClick);
    //$("a.thumbnail").click(openBox);
}

/*function	projectClick(e)	{
                    console.log("Project	clicked");
					//	prevent	the	page	from	reloading
					e.preventDefault();
					//	In	an	event	handler,	$(this)	refers	to	
					//	the	object	that	triggered	the	event
					$(this).css("background-color",	"#7fff00");
	}
*/

    /*Log In box */
	var subBox = "#subBox";
	var subWidth = $(subBox).width() + $("#adCap").width();
	
	function openBox() {
        $('#subBox').slideToggle();
	}
	
	function closeBox() {
		$('#subBox').hide();   
	}
	
	$("#open").click(function(){
		openBox();
		return false;
	});
	
	$("#close").click(function(){
		closeBox();
		return false;
	});
/*Subscription box end*/

function modify_qty(val) {
    var e_hp = document.getElementById('e_hp').value;
    var new_e_hp = parseInt(e_hp,10) - (val/4);
    
    alert('You’re not currently on fire, but the Fire Entity gets worried and backs away from you, accidentally stepping in a puddle!');
    
    if (new_e_hp == 0) {
        alert('BEAM ME UP SCOTTY');
        window.location.href('Victory.html');
    }
    
    document.getElementById('e_hp').value = new_e_hp;
    return new_e_hp;
}

function add_qty(){
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty,10) + 100;
    
    if (new_qty > 1000) {
        new_qty = 1000;
    }
    
    document.getElementById('qty').value = new_qty;
    return new_qty;
}
