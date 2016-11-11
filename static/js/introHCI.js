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
    
    $('a#select').hide();
    $('#subBox').hide();
    //$('#subBox2').hide();
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
    //$('#subBox2').hide();
}

/*
function openBox2(){
    $('#subBox2').slideToggle();
    $('#subBox').hide();
}
*/
	
function closeBox() {
    $('#subBox').hide();
    //$('#subBox2').hide();
}
	
$("#open").click(function(){
    openBox();
    return false;
});
	
$("#close").click(function(){
    closeBox();
    return false;
});

$("#accept1").click(function(){
    window.location.href = "Overworld2.html";
    return false;
})

//test slide multiple
 $(".project a").click(function () {
      $(this).parent().find(".description").slideToggle("fast");
      $(this).parent().find("#select").slideToggle("fast");
    });
    
/*Subscription box end*/


function mod_hp_1(max_e_hp) {
    var e_hp = document.getElementById('e_hp').value;
    var u_hp = document.getElementById('u_hp').value;
    
    if (u_hp == 0){
        alert("YOU'RE ALREADY DEAD!");
        window.location.href = "Overworld.html";
        return;
    }
    
    else if (e_hp == 0){
        alert("HE'S ALREADY DEAD!");
        window.location.href = "Victory.html";
        return;
    }
    
    var new_e_hp = parseInt(e_hp,10) - (max_e_hp/4);
    var new_u_hp = parseInt(u_hp,10) - 15;
    
    alert('You’re not currently on fire, but the Fire Entity gets worried and backs away from you, accidentally stepping in a puddle!');
    alert('It gets angry at you for startling it!');
    
    if (new_u_hp <= 0){
        document.getElementById('u_hp').value = 0;
        
        if (new_e_hp <= 0){
            document.getElementById('e_hp').value = 0;
        }
        
        document.getElementById('e_hp').value = new_e_hp;
        alert('GAME OVER BOY!');
        window.location.href = "Overworld.html";
        return;
    }
    
    if (new_e_hp <= 0) {
        document.getElementById('e_hp').value = 0;
        
        if (new_u_hp <= 0){
            document.getElementById('u_hp').value = 0;
        }
        
        document.getElementById('u_hp').value = new_e_hp;
        
        alert('BEAM ME UP SCOTTY!');
        window.location.href = "Victory.html";
    }
    
    document.getElementById('e_hp').value = new_e_hp;
    document.getElementById('u_hp').value = new_u_hp;
    return new_e_hp;
}

function mod_hp_2(max_e_hp){
    var e_hp = document.getElementById('e_hp').value;
    var u_hp = document.getElementById('u_hp').value;
    
    if (u_hp == 0){
        alert("YOU'RE ALREADY DEAD!");
        window.location.href = "Overworld.html";
        return;
    }
    
    else if (e_hp == 0){
        alert("HE'S ALREADY DEAD!");
        window.location.href = "Victory.html";
        return;
    }
    
    var new_e_hp = parseInt(e_hp,10) - (max_e_hp/2);
    var new_u_hp = parseInt(u_hp,10) - 20;
    
    alert('You use a piece of wood lying around and manage to open the hydrant. It drenches the Fire Entity!');
    alert('However, it spreads around you in retaliation!');
    
    if (new_u_hp <= 0){
        document.getElementById('u_hp').value = 0;
        
        if (new_e_hp <= 0){
            document.getElementById('e_hp').value = 0;
        }
        
        document.getElementById('e_hp').value = new_e_hp;
        alert('GAME OVER BOY!');
        window.location.href = "Overworld.html";
        return;
    }
    
    if (new_e_hp <= 0) {
        document.getElementById('e_hp').value = 0;
        
        if (new_u_hp <= 0){
            document.getElementById('u_hp').value = 0;
        }
        
        document.getElementById('u_hp').value = new_e_hp;
        
        alert('BEAM ME UP SCOTTY!');
        window.location.href = "Victory.html";
    }
    
    document.getElementById('e_hp').value = new_e_hp;
    document.getElementById('u_hp').value = new_u_hp;
    return new_e_hp;
}

function mod_hp_3(max_e_hp){
    var e_hp = document.getElementById('e_hp').value;
    var u_hp = document.getElementById('u_hp').value;
    
    if (u_hp == 0){
        alert("YOU'RE ALREADY DEAD!");
        window.location.href = "Overworld.html";
        return;
    }
    
    else if (e_hp == 0){
        alert("HE'S ALREADY DEAD!");
        window.location.href = "Victory.html";
        return;
    }
    
    var new_e_hp = parseInt(e_hp,10) - (max_e_hp/4);
    var new_u_hp = parseInt(u_hp,10) - 30;
    
    alert('You assemble some debris together into a barricade and it actually acts as a controlled burn. The Fire Entity loses energy!');
    alert('However, it takes advantage of the fact you’re still too close to the fire!');
    
    if (new_u_hp <= 0){
        document.getElementById('u_hp').value = 0;
        
        if (new_e_hp <= 0){
            document.getElementById('e_hp').value = 0;
        }
        
        document.getElementById('e_hp').value = new_e_hp;
        alert('GAME OVER BOY!');
        window.location.href = "Overworld.html";
        return;
    }
    
    if (new_e_hp <= 0) {
        document.getElementById('e_hp').value = 0;
        
        if (new_u_hp <= 0){
            document.getElementById('u_hp').value = 0;
        }
        
        document.getElementById('u_hp').value = new_e_hp;
        
        alert('BEAM ME UP SCOTTY!');
        window.location.href = "Victory.html";
    }
    
    document.getElementById('e_hp').value = new_e_hp;
    document.getElementById('u_hp').value = new_u_hp;
    
    return new_e_hp;
}

function mod_hp_4(max_e_hp){
    var e_hp = document.getElementById('e_hp').value;
    var u_hp = document.getElementById('u_hp').value;
    
    if (u_hp == 0){
        alert("YOU'RE ALREADY DEAD!");
        window.location.href = "Overworld.html";
        return;
    }
    
    else if (e_hp == 0){
        alert("HE'S ALREADY DEAD!");
        window.location.href = "Victory.html";
        return;
    }
    
    var new_e_hp = parseInt(e_hp,10) - (max_e_hp/2);
    var new_u_hp = parseInt(u_hp,10) - 40;
    
    alert('You dash forward, but the Fire Entity cuts you off! You jump at the last moment and come across a fire extinguisher on the ground. It douses the flames!');
    alert('You took quite a hit from the jump though …');
    
    if (new_u_hp <= 0){
        document.getElementById('u_hp').value = 0;
        
        if (new_e_hp <= 0){
            document.getElementById('e_hp').value = 0;
        }
        
        document.getElementById('e_hp').value = new_e_hp;
        alert('GAME OVER BOY!');
        window.location.href = "Overworld.html";
        return;
    }
    
    if (new_e_hp <= 0) {
        document.getElementById('e_hp').value = 0;
        
        if (new_u_hp <= 0){
            document.getElementById('u_hp').value = 0;
        }
        
        document.getElementById('u_hp').value = new_e_hp;
        
        alert('BEAM ME UP SCOTTY!');
        window.location.href = "Victory.html";
    }
    
    document.getElementById('e_hp').value = new_e_hp;
    document.getElementById('u_hp').value = new_u_hp;
    
    return new_e_hp;
}
