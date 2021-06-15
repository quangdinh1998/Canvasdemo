function drawBarrier() {
    gameContext.beginPath();
    gameContext.fillStyle='#03a1fc';
    gameContext.fillRect(barrierXPosition, barrierYPosition, barrierWidth, barrierHeight);
}
let barrierXPosition = 760;
let xBarrierDistance = 1;

function moveBarrier() {

    gameContext.clearRect(barrierXPosition, barrierYPosition, barrierWidth, barrierHeight);
    let isTouchLeft = barrierXPosition + barrierWidth < gameLeftPosition;
    if(isTouchLeft) {
        barrierXPosition = barrierWidth + gameRightPosition;
    } 
    barrierXPosition -=xBarrierDistance;
    drawBarrier();
}