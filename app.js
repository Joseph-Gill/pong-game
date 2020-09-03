const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvasWidth = 700;
const canvasHeight = 500;
const paddleWidth = 15;
const paddleHeight = 70;
let posX = 10;
let posY = 10;
let vx = +2;
let vy = +2;
let paddle1X = 10;
let paddle1Y = 10;
let paddle2Y = 10;
let user1Score = 0;
let user2Score = 0;

document.addEventListener('keypress', a => {
    a.key === 's' ? paddle1Y >= canvasHeight - 70 ? null : paddle1Y += 15 : null;
    a.key === 'w' ? paddle1Y <= 0 ? null : paddle1Y -= 15 : null;
    a.key === 'l' ? paddle2Y >= canvasHeight - 70 ? null : paddle2Y += 15 : null;
    a.key === 'o' ? paddle2Y <= 0 ? null : paddle2Y -= 15 : null;
});

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

function renderPaddle(posX, posY, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(posX, posY, width, height);
}

setInterval(() => {
    renderBoard();
    renderBall(posX, posY);
    renderPaddle(paddle1X, paddle1Y, paddleWidth, paddleHeight, 'blue');
    renderPaddle(canvasWidth - paddleWidth - 10, paddle2Y, paddleWidth, paddleHeight, 'green');
    posX += vx;
    posY += vy;
    (posX >= canvasWidth || posX <= 0) ? vx = -vx : null;
    (posY >= canvasHeight || posY <= 0) ? vy = -vy : null;
}, 17)