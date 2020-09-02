const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvasWidth = 700;
const canvasHeight = 500;
let posX = 10;
let posY = 10;
let vx = +2;
let vy = +2;

function renderBoard() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

function renderBall(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#fff";
    ctx.fill();
}

setInterval(() => {
    renderBoard();
    renderBall(posX, posY)
    posX += vx;
    posY += vy;
    (posX >= canvasWidth || posX <= 0) ? vx = -vx : null;
    (posY >= canvasHeight || posY <= 0) ? vy = -vy : null;
}, 17)