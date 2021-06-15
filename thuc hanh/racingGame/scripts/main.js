const carXPosition = 20; const carWidth = 150; const carHeight = 100; const gameTopPosition = 0; const gameBottomPosition = 600;
const timeloopCar = 10; barrierYPosition = 20; const barrierWidth = 150; const barrierHeight = 100; const timeloopBarrier = 0.01;
const gameLeftPosition = 0; const gameRightPosition = 800;
let gameContext = document.getElementById("game").getContext("2d");
   
setInterval(moveCar,timeloopCar);
setInterval(moveBarrier, timeloopBarrier);