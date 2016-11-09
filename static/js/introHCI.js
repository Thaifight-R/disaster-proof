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

function mod_hp1(max_e_hp) {
    var e_hp = document.getElementById('e_hp').value;
    if (e_hp == 0){
        alert("HE'S ALREADY DEAD!");
        window.location.href = "Victory.html";
        return;
    }
    
    var new_e_hp = parseInt(e_hp,10) - (max_e_hp/4);
    
    alert('You’re not currently on fire, but the Fire Entity gets worried and backs away from you, accidentally stepping in a puddle!');
    document.getElementById('e_hp').value = new_e_hp;
    
    if (new_e_hp == 0) {
        alert('BEAM ME UP SCOTTY!');
        window.location.href = "Victory.html";
    }
    
    return new_e_hp;
}

function mod_hp2(max_e_hp){
    var e_hp = document.getElementById('e_hp').value;
    if (e_hp == 0){
        alert("HE'S ALREADY DEAD!");
        window.location.href = "Victory.html";
        return;
    }
    
    var new_e_hp = parseInt(e_hp,10) - (max_e_hp/2);
    
    alert('You use a piece of wood lying around and manage to open the hydrant. It drenches the Fire Entity!');
    document.getElementById('e_hp').value = new_e_hp;
    
    if (new_e_hp == 0) {
        alert('BEAM ME UP SCOTTY!');
        window.location.href = "Victory.html";
    }
    
    return new_e_hp;
}

function mod_hp3(max_e_hp){
    var e_hp = document.getElementById('e_hp').value;
    if (e_hp == 0){
        alert("HE'S ALREADY DEAD!");
        window.location.href = "Victory.html";
        return;
    }
    
    var new_e_hp = parseInt(e_hp,10) - (max_e_hp/4);
    
    alert('You assemble some debris together into a barricade and it actually acts as a controlled burn. The Fire Entity loses energy!');
    document.getElementById('e_hp').value = new_e_hp;
    
    if (new_e_hp == 0) {
        alert('BEAM ME UP SCOTTY!');
        window.location.href = "Victory.html";
    }
    
    return new_e_hp;
}

function mod_hp4(max_e_hp){
    var e_hp = document.getElementById('e_hp').value;
    if (e_hp == 0){
        alert("HE'S ALREADY DEAD!");
        window.location.href = "Victory.html";
        return;
    }
    
    var new_e_hp = parseInt(e_hp,10) - (max_e_hp/2);
    
    alert('You dash forward, but the Fire Entity cuts you off! You jump at the last moment and come across a fire extinguisher on the ground. It douses the flames!');
    document.getElementById('e_hp').value = new_e_hp;
    
    if (new_e_hp == 0) {
        alert('BEAM ME UP SCOTTY!');
        window.location.href = "Victory.html";
    }
    
    return new_e_hp;
}