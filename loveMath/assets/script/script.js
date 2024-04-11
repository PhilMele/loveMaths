console.log("connected!")

//starts at the moment the page is loaded
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

        for (let button of buttons){
            button.addEventListener("click", function(){
                if (this.getAttribute("data-type") === "submit"){
                    alert("You clicked submit!")
                }else{
                    let gameType = this.getAttribute("data-type");
                    //when a data-type button is click that is not submit
                    //rungame function starts based on gameType clicked
                    runGame(gameType)
                
                }
            
            })
        }
        //looks for game-type addition to 
        //start this action
        runGame("addition");

})
/**
    *The main game loop, called when the script is first loaded 
    *and after the user's answer has been processed
 */
function runGame(gameType){
    //generate random numbers
    let num1 = Math.floor(Math.random()*25 +1);
    let num2 = Math.floor(Math.random()*25 +1);

    if (gameType === 'addition'){
        displayAdditionQuestion(num1, num2)
    } else{
        alert(`Unknown game type: ${gameType}`);
        throw `Unknwon game type: ${gameType}. Aborting`;
    }

}


function checkAnswer(){}

function calculateCorrectAnswer(){}

function incrementScore(){}

function incrementWrongAnswer(){}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+"

}

function displaySubtractQuestion(){}

function displayMultiplyQuestion(){}