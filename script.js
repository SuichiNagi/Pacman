var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,4,0,1,1,1,1,1,0,2],
    [2,0,2,2,2,2,2,1,1,2,2,2,1,1,2,2,2,2,1,1,2,2,2,2,1,2,2,1,2,2,2,1,1,2,2,2,2,2,0,2],
    [2,1,2,2,2,2,2,1,1,2,2,2,1,1,2,0,1,1,1,1,1,1,0,2,1,2,2,1,2,2,2,1,1,2,2,2,2,2,1,2],
    [2,1,2,2,0,4,1,0,0,1,1,1,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1,2,0,1,1,1,1,1,0,2,2,1,2],
    [2,1,2,2,1,2,2,2,2,2,1,1,1,1,1,1,2,2,2,2,2,2,1,1,1,1,1,1,2,1,2,2,2,2,2,1,2,2,1,2],
    [2,1,2,2,1,2,1,1,1,2,1,2,2,0,1,1,1,1,1,1,1,1,1,1,1,2,2,1,2,1,2,0,0,0,2,1,2,2,1,2],
    [2,1,2,2,1,2,1,1,1,2,1,2,2,2,1,2,2,2,0,0,2,2,2,1,2,2,2,1,2,1,2,1,1,1,2,1,2,2,1,2],
    [2,0,2,2,1,2,1,2,1,2,1,0,2,2,1,2,0,0,0,0,0,0,2,4,2,2,1,1,2,1,2,1,2,1,2,1,2,2,1,2],
    [2,0,1,1,1,1,1,2,1,1,1,1,1,1,1,2,0,0,0,0,0,0,2,0,1,1,1,0,1,0,1,1,2,1,1,0,1,1,0,2],
    [2,0,2,2,1,2,1,2,1,2,1,2,2,2,4,2,0,0,0,0,0,0,2,1,2,2,2,1,2,1,2,1,2,1,2,1,2,2,1,2],
    [2,1,2,2,1,2,1,1,1,2,1,2,2,1,1,2,2,2,2,2,2,2,2,1,1,2,2,1,2,1,2,1,1,1,2,1,2,2,1,2],
    [2,1,2,2,1,2,1,1,1,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,0,0,0,2,1,2,2,1,2],
    [2,1,2,2,1,2,2,2,2,2,1,1,1,1,1,0,2,2,2,2,2,2,0,1,1,1,1,1,2,1,2,2,2,2,2,1,2,2,1,2],
    [2,1,2,2,0,1,1,1,1,1,1,1,1,2,1,0,2,2,2,2,2,2,0,1,2,1,1,1,2,0,1,1,1,1,1,0,2,2,1,2],
    [2,1,2,2,2,2,2,1,1,2,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,2,2,1,1,2,2,2,2,2,1,2],
    [2,0,2,2,2,2,2,1,1,2,4,1,1,2,2,2,2,2,1,1,2,2,2,2,2,1,1,1,2,2,2,1,1,2,2,2,2,2,0,2],
    [2,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,0,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];

var score = 0;

var pacman = {
    x: 1,
    y: 1
};

var ghost = {
    x: 18,
    y: 9
};

var ghost1 = {
    x: 25,
    y: 9
};

var ghost2 = {
    x: 10,
    y: 9
};


function displayWorld(){
    var output = '';

    for(var i=0; i<world.length; i++){
        output += "<div class='row'>";
        for(var j=0; j<world[i].length; j++){
            if(world[i][j] == 2)
                output += "<div class='brick'></div>";
            else if(world[i][j] == 1)
                output += "<div class='coin'></div>";
            else if(world[i][j] == 4)
                output += "<div class='cherry'></div>";
            if(world[i][j] == 0)
                output += "<div class='empty'></div>";
        }
        output += "</div>";
    }
    document.getElementById('world').innerHTML = output;
}

function moveGhost(){
    if(pacman.y < ghost.y && world[ghost.y-1][ghost.x] != 2) 
    {
        ghost.y--;
    } 
    else if(pacman.y > ghost.y && world[ghost.y+1][ghost.x] != 2)
    {
        ghost.y++;
    } 
    else if( pacman.x < ghost.x && world[ghost.y][ghost.x-1] != 2 )
    {
        ghost.x--;
    } 
    else if(pacman.x > ghost.x && world[ghost.y][ghost.x+1] != 2)
    {
        ghost.x++;
    }
    displayGhost();
}

function moveGhost1(){
    if(pacman.y < ghost1.y && world[ghost1.y-1][ghost1.x] != 2) 
    {
        ghost1.y--;
    } 
    else if(pacman.y > ghost1.y && world[ghost1.y+1][ghost1.x] != 2)
    {
        ghost1.y++;
    } 
    else if( pacman.x < ghost1.x && world[ghost1.y][ghost1.x-1] != 2 )
    {
        ghost1.x--;
    } 
    else if(pacman.x > ghost1.x && world[ghost1.y][ghost1.x+1] != 2)
    {
        ghost1.x++;
    }
    displayGhost1();
}

function moveGhost2(){
    if(pacman.y < ghost2.y && world[ghost2.y-1][ghost2.x] != 2) 
    {
        ghost2.y--;
    } 
    else if(pacman.y > ghost2.y && world[ghost2.y+1][ghost2.x] != 2)
    {
        ghost2.y++;
    } 
    else if( pacman.x < ghost2.x && world[ghost2.y][ghost2.x-1] != 2 )
    {
        ghost2.x--;
    } 
    else if(pacman.x > ghost2.x && world[ghost2.y][ghost2.x+1] != 2)
    {
        ghost2.x++;
    }
    displayGhost2();
}

function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y*20+"px";
    document.getElementById('pacman').style.left = pacman.x*20+"px";
}

function displayGhost(){
    document.getElementById('ghost').style.top = ghost.y*20+"px";
    document.getElementById('ghost').style.left = ghost.x*20+"px";
}

function displayGhost1(){
    document.getElementById('ghost1').style.top = ghost1.y*20+"px";
    document.getElementById('ghost1').style.left = ghost1.x*20+"px";
}

function displayGhost2(){
    document.getElementById('ghost2').style.top = ghost2.y*20+"px";
    document.getElementById('ghost2').style.left = ghost2.x*20+"px";
}

function displayScore(){
    document.getElementById('score').innerHTML = score;
}

displayWorld();
displayPacman();
displayGhost();
displayGhost1();
displayGhost2();
setInterval(moveGhost, 1000);
setInterval(moveGhost1, 1000);
setInterval(moveGhost2, 1000);
displayScore();
moveGhost();


document.onkeydown = function(e){
    if(e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2){
        document.getElementById('pacman').style.transform = 'rotate(180deg)';
        pacman.x--;
    } 
    else if(e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2){
        document.getElementById('pacman').style.transform = 'rotate(0deg)';
        pacman.x++;       
    } 
    else if(e.keyCode == 38 && world[pacman.y-1][pacman.x] != 2){
        document.getElementById('pacman').style.transform = 'rotate(270deg)';
        pacman.y--;        
    } 
    else if(e.keyCode == 40 && world[pacman.y+1][pacman.x] != 2){
        document.getElementById('pacman').style.transform = 'rotate(90deg)';
        pacman.y++;      
    } 
    if(world[pacman.y][pacman.x] == 1){
        world[pacman.y][pacman.x] = 0;
        score += 10;
        displayWorld();
        displayScore();
    } else if(world[pacman.y][pacman.x] == 4){
        world[pacman.y][pacman.x] = 0;
        score += 20
        displayWorld();
        displayScore();
    }
    //console.log(e.keyCode)
    displayPacman();
}