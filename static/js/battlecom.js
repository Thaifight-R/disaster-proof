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
    
        alert('You’re not currently on fire, but the Fire Entity gets worried and backs away from you, accidentally stepping in a puddle!\n\nFIRE ENTITY LOSES 25 HP');
        alert('It gets angry at you for startling it!\n\nYOU LOSE 15 HP');
    }
    
    else if (comm_num == 2) {
        new_e_hp = parseInt(e_hp,10) - 50;
        new_u_hp = parseInt(u_hp,10) - 20;
    
        alert('You use a piece of wood lying around and manage to open the hydrant. It drenches the Fire Entity!\n\nFIRE ENTITY LOSES 50 HP');
        alert('However, it spreads around you in retaliation!\n\nYOU LOSE 20 HP');
    }
    
    else if (comm_num == 3) {
        new_e_hp = parseInt(e_hp,10) - 25;
        new_u_hp = parseInt(u_hp,10) - 30;
    
        alert('You assemble some debris together into a barricade and it actually acts as a controlled burn. The Fire Entity loses energy!\n\nFIRE ENTITY 25 HP');
        alert('However, it takes advantage of the fact you’re still too close to the fire!\n\nYOU LOSE 30 HP');
    }
    
    else if (comm_num == 4) {
        new_e_hp = parseInt(e_hp,10) - 50;
        new_u_hp = parseInt(u_hp,10) - 40;
    
        alert('You dash forward, but the Fire Entity cuts you off! You jump at the last moment and come across a fire extinguisher on the ground. It douses the flames!\n\nFIRE ENTITY LOSES 50 HP');
        alert('You took quite a hit from the jump though …\n\nYOU LOSE 40 HP');
    }
    
    else if (comm_num == 5) {
        new_e_hp = parseInt(e_hp,10) - 40;
        new_u_hp = parseInt(u_hp,10) - 55;
    
        alert('You trip the top-heavy Earth Golem as you run out of the immediate area.\n\nEARTH GOLEM LOSES 40 HP');
        alert('You took quite a hit from the jump though …\n\nYOU LOSE 55 HP');
    }
    
    else if (comm_num == 6) {
        new_e_hp = parseInt(e_hp,10) - 30;
        new_u_hp = parseInt(u_hp,10) - 10;
    
        alert('You duck and try to be as quiet as possible, covering your breathing with your shirt. As a result, you don’t breathe in any harmful particles and the Earth Golem gets frustrated trying to find you!\n\nEARTH GOLEM LOSES 30 HP');
        alert('It gets angry and smashes a window which startles you back into the open.\n\nYOU LOSE 10 HP');
    }
    
    else if (comm_num == 7) {
        new_e_hp = parseInt(e_hp,10) - 60;
        new_u_hp = parseInt(u_hp,10) - 20;
    
        alert('You crawl under a sturdy frame while the Earth Golem’s tremors cause loose debris to fall around the area. The rubble never reaches you because of your cover and instead crashes onto the Golem!\n\nEARTH GOLEM LOSES 60 HP');
        alert('The Earth Golem realizes this then smashes your cover directly, narrowly missing you in the process!\n\nYOU LOSE 20 HP');
    }
    
    else if (comm_num == 8) {
        new_e_hp = parseInt(e_hp,10) - 50;
        new_u_hp = parseInt(u_hp,10) - 30;
    
        alert('You quickly shut off all large machines you see just before the Earth Golem breaks all connections they use. Luckily you were able to stop any gas or electric flow that still would have been active had they been left on. The Golem remains stuck in the connections, though, and hurts itself trying to get free!\n\nEARTH GOLEM LOSES 50 HP');
        alert(' It rips through the piping and throws the pieces at you!\n\nYOU LOSE 30 HP');
    }
    
    else if (comm_num == 9) {
        new_e_hp = parseInt(e_hp,10) - 60;
        new_u_hp = parseInt(u_hp,10) - 30;
        
        alert('You try to escape the Typhoon Lord’s path as it whips up miniature tornadoes to stop you. You evade as best you can, when you notice something go in your favor: one of the created tornadoes is anticyclonic, which rotates in the opposite direction, and actually weakens the Typhoon Lord by stealing its wind flow!\n\nTYPHOON LORD LOSES 60 HP');
        alert('The Typhoon Lord rapidly spins to pull you back within its range, cutting you in the process.\n\nYOU LOSE 30 HP')
    }
    
    else if (comm_num == 10) {
        new_e_hp = parseInt(e_hp,10) - 0;
        new_u_hp = parseInt(u_hp,10) - 75;
        
        alert('You hurry to a nearby overpass and duck underneath. However, winds actually accelerate in these areas!\n\nTYPHOON LORD LOSES 60 HP');
        alert('The Typhoon Lord channels wind currents and throws you back into the open!\n\nYOU LOSE 75 HP');
    }
    
    else if (comm_num == 11) {
        new_e_hp = parseInt(e_hp,10) - 75;
        new_u_hp = parseInt(u_hp,10) - 35;
        
        alert('Despite being far away, you head toward a sturdy structure as fast as possible. You make it inside but the Typhoon Lord is in a frenzy, throwing debris all around and hurting itself!\n\nTYPHOON LOSES 75 HP');
        alert('The debris thrown around destroys all but first floor of the building! A small amount of rubble hits you through the windows.\n\nYOU LOSE 35 HP');
    }
    
    else if (comm_num == 12) {
        new_e_hp = parseInt(e_hp,10) - 50;
        new_u_hp = parseInt(u_hp,10) - 25;
        
        alert('You leap toward a lower elevation as the Typhoon Lord hurls large debris right in your direction. You lay flat and the debris just misses you, though it took quite a bit of energy for the Typhoon Lord to throw with that much force.\n\nTYPHOON LORD LOSES 50 HP');
        alert('While heroic, that was still a hard fall into the ground you took…\n\nYOU LOSE 25 HP');
    }
    
    else if (comm_num == 13) {
        new_e_hp = parseInt(e_hp,10) - 20;
        new_u_hp = parseInt(u_hp,10) - 10;
        
        alert('As you climb to higher roads and the water below effectively becomes white-water rapids, you notice a blocked storm drain. Removing the wreckage, you lessen the water in the immediate area and weaken the Flood Emperor!\n\nFLOOD EMPEROR LOSES 20 HP');
        alert('The Flood Emperor increases the amount of rainfall, drenching you and your clothes.\n\nYOU LOSE 10 HP');
    }
    
    else if (comm_num == 14) {
        new_e_hp = parseInt(e_hp,10) - 95;
        new_u_hp = parseInt(u_hp,10) - 40;
        
        alert('Remembering your fight with the Earth Golem, you quickly look for any machinery that could cause trouble if left on. Just as the Flood Emperor shoots pressurized water at an electric box, you already diverted the power and it ends up getting shocked!\n\nFLOOD EMPEROR LOSES 95 HP');
        alert('In retaliation, the Flood Emperor raises the water level high enough to start moving vehicles and one crashes right into the room you were in!\n\nYOU LOSE 40 HP');
    }
    
    else if (comm_num == 15) {
        new_e_hp = parseInt(e_hp,10) - 0;
        new_u_hp = parseInt(u_hp,10) - 175;
        
        alert('The water is only 8 inches deep as you make your way toward safety, but the Flood Emperor opportunistically uses this to knock you off balance. The current proves too strong and you are swept away.\n\nFLOOD EMPEROR LOSES 0 HP');
        alert('Unable to get out of the water, hidden dangers lurking within like wild animals and disease deal the final blow.\n\nYOU LOSE 175 HP');
    }
    
    else if (comm_num == 16) {
        new_e_hp = parseInt(e_hp,10) - 0;
        new_u_hp = parseInt(u_hp,10) - 0;
        
        alert(' You throw a makeshift floatation device (e.g., a football) to the person in the stalled car and they’re able to use it to make their way to safety. The Flood Emperor tried to move the vehicle before you could save the person within, yet there wasn’t enough current nearby to do so.\n\nFLOOD EMPEROR LOSES 0 HP');
        alert('You and the Flood Emperor both stare at each other, aware you’re at an impasse.\n\nYOU LOSE 0 HP');
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
        
        alert('GAME OVER!');
        
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
        
        
        alert('YOU WIN!');
        
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
