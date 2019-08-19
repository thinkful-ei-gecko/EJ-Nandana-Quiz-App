'use strict';
/*eslint-env jquery*/


let globalQuestionNumbersArray = null;
let globalScore = 0;
let globalQuestionNumbersIndex = -1;
let globalQuestionNumber = -1;

function randomNumbergenerator(){
  let questionArray=[];
  for (let i=1;questionArray.length<5;i++){
    let randomNumber=Math.floor(Math.random()*10);
    if(questionArray.indexOf(randomNumber) === -1){
      questionArray.push(randomNumber);
    }

  }
  return questionArray;
}

function loadQuestion() {
  incrementQuestionNumber();
  globalQuestionNumber=globalQuestionNumbersArray[globalQuestionNumbersIndex];
  
  $('.scores').show();
  $('header').find('#q1').html(`${globalQuestionNumbersIndex+1}/${globalQuestionNumbersArray.length}`);
  $('main').append(` 

  <div class="questionBlock">
    <h2>${STORE[globalQuestionNumber].question}</h2>
    
    <img class="questionImg" src="${STORE[globalQuestionNumber].img}">
    <form class="questionForm">
        <fieldset>
            <label class="answerBlock one"><input type="radio" value='${STORE[globalQuestionNumber].questionOptions[0]}' name="answer" required>${STORE[globalQuestionNumber].questionOptions[0]}</label>
            <label class="answerBlock two"><input type="radio" value='${STORE[globalQuestionNumber].questionOptions[1]}' name="answer" required>${STORE[globalQuestionNumber].questionOptions[1]}</label>
            <label class="answerBlock three"><input type="radio" value='${STORE[globalQuestionNumber].questionOptions[2]}' name="answer" required>${STORE[globalQuestionNumber].questionOptions[2]}</label>
            <label class="answerBlock four"><input type="radio" value='${STORE[globalQuestionNumber].questionOptions[3]}' name="answer" required>${STORE[globalQuestionNumber].questionOptions[3]}</label>
            <button type="submit" class="submitButton">Submit</button>
        </fieldset>
    </form>
    
    </div>`);


}

function registerCallbackCheckAnswer() {
  $('main').submit(function (event) {
    event.preventDefault();
    let selectedAnswer = $('input:checked');
    let answer = selectedAnswer.val();
    
    let rightImage = './images/like.png';
    let wrongImage = './images/tools.png';
    let userMessageRight = 'YOU GOT IT RIGHT!';
    let userMessageWrong = 'YOU GOT IT WRONG!!';

    let selectedImage = null;
    let userMessage = '';

    let correctAnswer = `${STORE[globalQuestionNumber].correntAnswer}`;

    if (correctAnswer === answer) {
      selectedImage = rightImage; 
      userMessage = userMessageRight;
      incrementScore();

    } else {
      
      selectedImage = wrongImage; 
      userMessage = userMessageWrong;
      
    }
    $('header').find('#s1').html(`${globalScore}`);
    $('main').find('.questionBlock').remove();
    $('main').append(`<div class="checkAnswer">
    <img class="ansImg" src=${selectedImage}>
    <h2>${userMessage}</h2>
    <button class="buttonClass">Next Question</button>
    </div>`);
  });
}


function incrementQuestionNumber() {
  globalQuestionNumbersIndex++;
}

function incrementScore() {
  globalScore++;
}

function registerCallbackNextQuestion() {
  $('main').on('click', '.buttonClass', function (event) {
    event.preventDefault();
    $('main').find('div').remove();
    
    if (globalQuestionNumbersIndex < globalQuestionNumbersArray.length-1){
      loadQuestion();
    }  
    else if(globalQuestionNumbersIndex === globalQuestionNumbersArray.length-1) {
      $('main').find('div').remove();
      restarQuiz();
    }
  });
}
    
function restarQuiz(){
  if (globalScore < 3){
    $('main').append(`<div class="checkAnswer">
            <img class="ansImg" src="./images/handbrake.png">
            <h2>Your Score is ${globalScore}</h2>
            <h3>Thanks for trying but it looks like you need to check your 
            engine and try again!</h3>
            <button type="button" class="buttonClass">Take the quiz again</button>
        
        </div>`);
    $('main').on('click', '.buttonClass', function (event) {
      location.reload();
    });
  } else {
        
    $('main').append(`<div class="checkAnswer">
            <img class="ansImg" src="./images/car-key.png">
            <h2>Your Score is ${globalScore}</h2>
            <h3>Great Job! Looks like you really are a car junkie!</h3>
            <button type="button" class="buttonClass">Take the quiz again</button>
        </div>`);
    $('main').on('click', '.buttonClass', function (event) {
      location.reload();
    });
  }
}
  

function startQuiz() {

  $('main').on('click', '.beginQuiz', function (event) {
    event.preventDefault();
    $('section').removeClass('heading');
    $('main').find('.myForm').remove();
    $('main').find('img').remove();
    globalQuestionNumbersArray = randomNumbergenerator();
    console.log(globalQuestionNumbersArray);
    
    loadQuestion();
  });
}

function createQuiz(){
startQuiz();
registerCallbackCheckAnswer();
registerCallbackNextQuestion();
}

$(createQuiz);
