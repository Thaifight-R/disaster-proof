function mod_hp(round_num, comm_num){
    var e_hp = document.getElementById('e_hp').value;
    var u_hp = document.getElementById('u_hp').value;
    var new_e_hp = 0;
    var new_u_hp = 0;
    
    if (u_hp == 0){
        alert("YOU'RE ALREADY DEAD!");
        if(round_num == 1) {
            window.location.href = "Overworld.html";
            return;
        }
        
        else if(round_num == 2) {
            window.location.href = "Overworld2.html";
            return;
        }
        
        else if(round_num == 3) {
            window.location.href = "Overworld3.html";
            return;
        }
        
        else if(round_num == 4) {
            window.location.href = "Overworld4.html";
            return;
        }
        
        alert('ERROR TRANSMISSION')
        window.location.href = "Overworld.html";
        return;
    }
    
    else if (e_hp == 0) {
        alert("HE'S ALREADY DEAD!");
        if(round_num == 1){
            window.location.href = "Victory.html";
            return;
        }
        
        else if(round_num == 2) {
            window.location.href = "Victory2.html";
            return;
        }
        
        else if(round_num == 3) {
            window.location.href = "Victory3.html";
            return;
        }
        
        else if(round_num == 4) {
            window.location.href = "Victory4.html";
            return;
        }
        
        alert('ERROR VICTORY')
        window.location.href = "Overworld.html";
        return;
    }
    
    if (comm_num == 1) {
        new_e_hp = parseInt(e_hp,10) - 25;
        new_u_hp = parseInt(u_hp,10) - 15;
    
        alert('You’re not currently on fire, but the Fire Entity gets worried and backs away from you, accidentally stepping in a puddle!');
        alert('It gets angry at you for startling it!');
    }
    
    else if (comm_num == 2) {
        new_e_hp = parseInt(e_hp,10) - 50;
        new_u_hp = parseInt(u_hp,10) - 20;
    
        alert('You use a piece of wood lying around and manage to open the hydrant. It drenches the Fire Entity!');
        alert('However, it spreads around you in retaliation!');
    }
    
    else if (comm_num == 3) {
        new_e_hp = parseInt(e_hp,10) - 25;
        new_u_hp = parseInt(u_hp,10) - 30;
    
        alert('You assemble some debris together into a barricade and it actually acts as a controlled burn. The Fire Entity loses energy!');
        alert('However, it takes advantage of the fact you’re still too close to the fire!');
    }
    
    else if (comm_num == 4) {
        new_e_hp = parseInt(e_hp,10) - 50;
        new_u_hp = parseInt(u_hp,10) - 40;
    
        alert('You dash forward, but the Fire Entity cuts you off! You jump at the last moment and come across a fire extinguisher on the ground. It douses the flames!');
        alert('You took quite a hit from the jump though …');
    }
    
    else if (comm_num == 5) {
        new_e_hp = parseInt(e_hp,10) - 40;
        new_u_hp = parseInt(u_hp,10) - 55;
    
        alert('You trip the top-heavy Earth Golem as you run out of the immediate area.');
        alert('You took quite a hit from the jump though …');
    }
    
    else if (comm_num == 6) {
        new_e_hp = parseInt(e_hp,10) - 30;
        new_u_hp = parseInt(u_hp,10) - 10;
    
        alert('You duck and try to be as quiet as possible, covering your breathing with your shirt. As a result, you don’t breathe in any harmful particles and the Earth Golem gets frustrated trying to find you!');
        alert('It gets angry and smashes a window which startles you back into the open.');
    }
    
    else if (comm_num == 7) {
        new_e_hp = parseInt(e_hp,10) - 60;
        new_u_hp = parseInt(u_hp,10) - 20;
    
        alert('You crawl under a sturdy frame while the Earth Golem’s tremors cause loose debris to fall around the area. The rubble never reaches you because of your cover and instead crashes onto the Golem!');
        alert('The Earth Golem realizes this then smashes your cover directly, narrowly missing you in the process!');
    }
    
    else if (comm_num == 8) {
        new_e_hp = parseInt(e_hp,10) - 50;
        new_u_hp = parseInt(u_hp,10) - 30;
    
        alert('You quickly shut off all large machines you see just before the Earth Golem breaks all connections they use. Luckily you were able to stop any gas or electric flow that still would have been active had they been left on. The Golem remains stuck in the connections, though, and hurts itself trying to get free!');
        alert(' It rips through the piping and throws the pieces at you!');
    }
    
    else {
        new_e_hp = 0;
        new_u_hp = 0;
        alert('ERROR');
        return;
    }
    
    document.getElementById('e_hp').value = new_e_hp;
    document.getElementById('u_hp').value = new_u_hp;
    
    if (new_u_hp <= 0) {
        document.getElementById('u_hp').value = 0;
        
        if (new_e_hp <= 0){
            document.getElementById('e_hp').value = 0;
        }
        
        else {
            document.getElementById('e_hp').value = new_e_hp;
        }
        
        alert('GAME OVER BOY!');
        
        if(round_num == 1) {
            window.location.href = "Overworld.html";
        }
        
        else if (round_num == 2) {
            window.location.href = "Overworld2.html";
        }
        
        else if (round_num == 3) {
            window.location.href = "Overworld3.html";
        }
        
        else if (round_num == 4) {
            window.location.href = "Overworld4.html";
        }
        
        else {
            alert('ERROR GAMEOVER');
        }
        return;
    }
    
    if (new_e_hp <= 0) {
        document.getElementById('e_hp').value = 0;
        
        if (new_u_hp <= 0){
            document.getElementById('u_hp').value = 0;
        }
        
        else {
            document.getElementById('u_hp').value = new_u_hp;
        }
        
        
        alert('BEAM ME UP SCOTTY!');
        
        if(round_num == 1) {
            window.location.href = "Victory.html";
        }
        
        else if (round_num == 2) {
            window.location.href = "Victory2.html";
        }
        
        else if (round_num == 3) {
            window.location.href = "Victory3.html";
        }
        
        else if (round_num == 4) {
            window.location.href = "Victory4.html";
        }
        
        else {
            alert('ERROR GAMEOVER');
        }
        
        return;
    }
    
    return new_e_hp;
}
