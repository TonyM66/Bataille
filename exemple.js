monCanvas = document.getElementById("monCanvas");

monCanvas.width = 400;
monCanvas.height = 400;

const ctx = monCanvas.getContext('2d');

ctx.clearRect(0, 0, monCanvas.width, monCanvas.height);

ctx.fillStyle = 'green';
//Premier rectangle
ctx.fillRect(50, 50, 100, 150);


//Du texte
ctx.font = '30px Arial';
ctx.fillStyle = 'white';
ctx.fillText("ENI", 170, 220);
//ctx.strokeText("Javascript", 80, 270);


//une image
let vaisseau = new Image(32, 32);
vaisseau.src = "./images/spaceship32x32.png";
vaisseau.onload = () => {
    return ctx.drawImage(vaisseau, 20, 20);
}

let x=20;
let y=20;

var moveTop = false;
var moveRight = false;
var moveBottom = false;
var moveLeft = false;

function keyDownHandler(e) {
    if (e.keyCode == '37') {
        moveLeft = true;
        deplacerVaisseau()
    } else if (e.keyCode == '39') {
        moveRight = true;
        deplacerVaisseau()
    } else if (e.keyCode == '38') {
        moveTop = true;
        deplacerVaisseau()
    } else if (e.keyCode == '40') {
        moveBottom = true;
        deplacerVaisseau()
    }
}

function keyUpHandler(e) {
    if (e.keyCode == '37') {
        moveLeft = false;
    } else if (e.keyCode == '39') {
        moveRight = false;
    } else if (e.keyCode == '38') {
        moveTop = false;
    } else if (e.keyCode == '40') {
        moveBottom = false;
    }
}

// Function appelé à chaque tick !
function deplacerVaisseau() {
    if (moveLeft == true) {
        ctx.clearRect(x, y, 32, 32);
        x -= 5;
        ctx.drawImage(vaisseau, x, y);
    } else if (moveRight == true) {
        ctx.clearRect(x, y, 32, 32);
        x += 5;
        ctx.drawImage(vaisseau, x, y);
    } else if (moveTop == true) {
        ctx.clearRect(x, y, 32, 32);
        y -= 5;
        ctx.drawImage(vaisseau, x, y);
    } else if (moveBottom == true) {
        ctx.clearRect(x, y, 32, 32);
        y += 5;
        ctx.drawImage(vaisseau, x, y);
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);