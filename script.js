const board       = document.querySelector(".board");
const redButton   = document.querySelector("#red");
const greenButton = document.querySelector("#green");
const blueButton  = document.querySelector("#blue");
const blackButton = document.querySelector("#black");

// Change Borad Color When Red Button Clicked
redButton.addEventListener('click', function(){
    //board.setAttribute('style' , 'background-color:red');
    board.style.backgroundColor = "red";
});

//Change Board color When Green Button Clicked
greenButton.addEventListener('click' , function(){
    board.style.backgroundColor = "green";
});

//Change Borad Color When Blue Button Clicked
blueButton.addEventListener('click' , function(){
    board.style.backgroundColor = "blue";
});

//Change Borad color When Black Button Clicked
blackButton.addEventListener('click' , function(){
    board.style.backgroundColor = "black";
});

