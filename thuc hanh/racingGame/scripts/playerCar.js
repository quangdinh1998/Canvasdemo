function drawCar() {
    gameContext.beginPath();
    gameContext.fillStyle='#fa4b2a';
    gameContext.fillRect(carXPosition, carYPosition, carWidth, carHeight);
}
let carYPosition = 20;
let yDistance = 1;

function moveCar() {

    gameContext.clearRect(carXPosition, carYPosition, carWidth, carHeight);
    let isTouchTop = carYPosition < gameTopPosition;
    let isTouchBottom = carYPosition + carHeight > gameBottomPosition;
    if(isTouchTop||isTouchBottom) {
        yDistance = -yDistance;
    } 
    carYPosition +=yDistance;
    drawCar();
}