console.log("connected!")

//starts at the moment the page is loaded
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

        for (let button of buttons){
            button.addEventListener("click", function(){
                if (this.getAttribute("data-type") === "submit"){
                    checkAnswer();
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

/***
 *Check the answer against the first element in 
 * the returned calculatedCorrectAnswer array
 */
function checkAnswer(){
    let userAnswer = parseInt(document.getElementById('answer-box').value)
    let calculatedAnswer = calculateCorrectAnswer()
    let isCorrect = userAnswer === calculatedAnswer[0]
    console.log(userAnswer)
    console.log(calculatedAnswer)
    console.log(isCorrect)

    if (isCorrect){
        alert ("Nice")
        incrementScore()
    }else{
        alert(`You are an idiot. The answer is ${calculatedAnswer[0]}. Your answer is ${userAnswer}. That's not the same.`)
        incrementWrongAnswer()
    }

    runGame(calculatedAnswer[1]);
}
/**
 *  let operand1=parseInt(document.getElementById('operand1').innerText);
 *   let operand2=parseInt(document.getElementById('operand2').innerText);
  *  let operator=document.getElementById(operator).innerText;
*/

/**
    *Gets the operands (the numbers) and the operator (plus, minus, etc..)
    *directly from the dom, and return the correct answer.
*/
function calculateCorrectAnswer(){
    let operand1=parseInt(document.getElementById('operand1').innerText);
    let operand2=parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+"){
        return [operand1 + operand2, "addition"]
    }else{
        alert(`Unimplemented operator ${operator}`)
        throw (`Unimplement operator: ${operator}. Aborting.`)
    }

}


/**
*Gets current score  from DOM and increment it by 1
*/
function incrementScore(){

    let oldScore= parseInt(document.getElementById('score').innerText)
    document.getElementById('score').innerText = ++oldScore

}

/**
*Gets current tally of incorrect answers  from DOM and increment it by 1
*/
function incrementWrongAnswer(){
    let oldScore= parseInt(document.getElementById('incorrect').innerText)
    document.getElementById('incorrect').innerText = ++oldScore
}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+"

}

function displaySubtractQuestion(){}

function displayMultiplyQuestion(){}