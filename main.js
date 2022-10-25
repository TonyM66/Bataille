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
let vaisseauJ1 = new Image(32, 32);
vaisseauJ1.src = "./images/spaceship32x32.png";
vaisseauJ1.onload = () => {
    return ctx.drawImage(vaisseauJ1, 20, 20);
}

let vaisseauJ2 = new Image(32, 32);
vaisseauJ2.src = "./images/spaceship32x32.png";
vaisseauJ2.onload = () => {
    return ctx.drawImage(vaisseauJ2, 348, 348);
}

let x=20;
let y=20;
let a=348;
let b=348;

var moveTopJ1 = false;
var moveRightJ1 = false;
var moveBottomJ1 = false;
var moveLeftJ1 = false;

var moveTopJ2 = false;
var moveRightJ2 = false;
var moveBottomJ2 = false;
var moveLeftJ2 = false;

function keyDownHandler(e) {
    switch (e.keyCode){
        case 81 : moveLeftJ1 = true, deplacerVaisseau(); break;
        case 68 : moveRightJ1 = true, deplacerVaisseau(); break;
        case 90 : moveTopJ1 = true, deplacerVaisseau(); break;
        case 83 : moveBottomJ1 = true, deplacerVaisseau(); break;
        case 37 : moveLeftJ2 = true, deplacerVaisseau(); break;
        case 39 : moveRightJ2 = true, deplacerVaisseau(); break;
        case 38 : moveTopJ2 = true, deplacerVaisseau(); break;
        case 40 : moveBottomJ2 = true, deplacerVaisseau(); break;
    }
}

function keyUpHandler(e) {
    switch (e.keyCode){
        case 81 : moveLeftJ1 = false; break;
        case 68 : moveRightJ1 = false; break;
        case 90 : moveTopJ1 = false; break;
        case 83 : moveBottomJ1 = false; break;
        case 37 : moveLeftJ2 = false; break;
        case 39 : moveRightJ2 = false; break;
        case 38 : moveTopJ2 = false; break;
        case 40 : moveBottomJ2 = false; break;
    }
}

function deplacerVaisseau() {
    if (moveLeftJ1 == true) {
        ctx.clearRect(x, y, 32, 32);
        x -= 5;
        ctx.drawImage(vaisseauJ1, x, y);
    }
    if (moveRightJ1 === true) {
        ctx.clearRect(x, y, 32, 32);
        x += 5;
        ctx.drawImage(vaisseauJ1, x, y);
    }
    if (moveTopJ1 == true) {
        ctx.clearRect(x, y, 32, 32);
        y -= 5;
        ctx.drawImage(vaisseauJ1, x, y);
    }
    if (moveBottomJ1 == true) {
        ctx.clearRect(x, y, 32, 32);
        y += 5;
        ctx.drawImage(vaisseauJ1, x, y);
    }
    if (moveLeftJ2 == true) {
        ctx.clearRect(a, b, 32, 32);
        a -= 5;
        ctx.drawImage(vaisseauJ2, a, b);
    }
    if (moveRightJ2 == true) {
        ctx.clearRect(a, b, 32, 32);
        a += 5;
        ctx.drawImage(vaisseauJ2, a, b);
    }
    if (moveTopJ2 == true) {
        ctx.clearRect(a, b, 32, 32);
        b -= 5;
        ctx.drawImage(vaisseauJ2, a, b);
    }
    if (moveBottomJ2 == true) {
        ctx.clearRect(a, b, 32, 32);
        b += 5;
        ctx.drawImage(vaisseauJ2, a, b);
    }
}

vaisseauJ1.direction = 'right';
let boutonFeu;

if (moveLeftJ1) {
    // enregistrement de la direction : gauche
    vaisseauJ1.direction = 'left';
    vaisseauJ1.setVelocityX(-160);
    vaisseauJ1.anims.play('left', true);
}
else if (moveRightJ1) {
    // enregistrement de la direction : droite
    vaisseauJ1.direction = 'right';
    vaisseauJ1.setVelocityX(160);
    vaisseauJ1.anims.play('right', true);
}


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);