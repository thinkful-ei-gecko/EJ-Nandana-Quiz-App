'use strict';
/*eslint-env jquery*/

let interval = 0;
let score = 0;



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
  console.log('loadQuestion');
  console.log("inside load function"+interval);
  config.questionNumber=config.questionNumberArray[interval];
  $('main').append(`<div class="questionBlock">
    <img class="questionImg" src="${STORE[config.questionNumber].img}">
    
    <form>
        <fieldset>
            <label class="answerBlock one"><input type="radio" value='${STORE[config.questionNumber].questionOptions[0]}' name="answer" required><span>${STORE[config.questionNumber].questionOptions[0]}</span></label>
            <label class="answerBlock two"><input type="radio" value='${STORE[config.questionNumber].questionOptions[1]}' name="answer" required><span>${STORE[config.questionNumber].questionOptions[1]}</span></label>
            <label class="answerBlock three"><input type="radio" value='${STORE[config.questionNumber].questionOptions[2]}' name="answer" required><span>${STORE[config.questionNumber].questionOptions[2]}</span></label>
            <label class="answerBlock four"><input type="radio" value='${STORE[config.questionNumber].questionOptions[3]}' name="answer" required><span>${STORE[config.questionNumber].questionOptions[3]}</span></label>
            <button type="submit" class="submitButton">Submit</button>
        </fieldset>
    </form>
    
    </div>`);

}


function rightAnswer() {
  let correctAnswer = `${STORE[config.questionNumber].correntAnswer}`;
  updateScore();
  $('header').html(`
        <div class="topBanner">
          <p class="questionRightInterval">${score}/5</p>
          <img class="bannerIcon" src="./images/engine.png" alt="starting engine">
        </div>
        <div>
        <p class="questionInterval">Question: ${interval + 1}/5</p>
        </div>`);

  $('main').html(`<div class="rightAnswer">
    <img class="rightImg" src="./images/like.png">
    
    <h2 class="">YOU GOT IT RIGHT!</h2>
    <button class="nextQuestion">Next Question</button>
    
    </div>`);

  generateNewQuestion();
}

function wrongAnswer() {
  let correctAnswer = `${STORE[config.questionNumber].correntAnswer}`;
  $('header').html(`
        <div class="topBanner">
          <p class="questionRightInterval">${score}/5</p>
          <img class="bannerIcon" src="./images/engine.png" alt="starting engine">
        </div>
        <div>
        <p class="questionInterval">Question: ${interval + 1}/5</p>
        </div>`);
  $('main').html(`<div class="wrongAnswer">
    <img class="wrongImg" src="./images/tools.png" alt="tools making a X sign">
    
    <h2 class="">YOU GOT IT WRONG!</h2>
    <p class="">The correct answer was ${correctAnswer}!</p>

    <button class="nextQuestion">Next Question</button>
    
    </div>`);
  console.log(interval);
  console.log(score);
  generateNewQuestion();
}

function countInterval() {
  interval++;
}

function updateScore() {
  score++;
}

function generateNewQuestion() {
  console.log('inside of generatequestion');
  event.preventDefault();
  $('header').html(`
    <div class="topBanner">
        <p class="questionRightInterval">${score}/5</p>
        <img class="bannerIcon" src="./images/engine.png" alt="starting engine">
    </div>
    <div>
    <p class="questionInterval">Question: ${interval + 1}/5</p>
    </div>`);

  loadQuestion();
    
}

//THIS WILL RESET THE QUIZ


//

function clear(){
  score = 0;
  interval = 0;
}

function startQuiz() {
  $('main').empty();
  $('header').empty();
  $('header').html(`
        <div class="topBanner">
          <p class="questionRightInterval">${score}/5</p>
          <img class="bannerIcon" src="./images/engine.png" alt="starting engine">
        </div>
        <div>
        <p class="questionInterval">Question: ${interval + 1}/5</p>
        </div>`);
  config.questionNumberArray=randomNumbergenerator();
  console.log(config.questionNumberArray);
  loadQuestion();
}


function startQuizScreen() {
  console.log('startQuizScreen');
  $('header').addClass('initial');
  $('header').html('<img class="icon" src="./images/engine.png" alt="starting engine">');
  $('main').html(`
    <div class="block1">
        <h1>Start Your Engine</h1>
        <button class='beginQuiz'>Begin Quiz</button>
        <p>Note: Pick the option that the car originates from</p>
    </div>`);
}

function allHandlers(){
  $('main').on('click', '.beginQuiz', function(){
    
    startQuiz();
    $('.initial').removeClass();
  });

  $('main').on('click', '.nextQuestion', function (event) {
    generateNewQuestion();
  });


  $('main').on('click', '.restartButton', function(){
    console.log('restart button clicked');
    startQuizScreen();
    clear();
  });


  $('main').submit(function (event) {
    event.preventDefault();
    let selectedAnswer = $('input:checked');
    let answer = selectedAnswer.val();
    let correctAnswer = `${STORE[config.questionNumber].correntAnswer}`;

    if (correctAnswer === answer) {
      console.log('You are right!');
      rightAnswer();
    } else {
      console.log('Wrong! The correct answer is: ' + correctAnswer);
      wrongAnswer();
    }
    countInterval();
    $('.questionBlock').remove();


    console.log(selectedAnswer);
    console.log(answer);
    console.log(correctAnswer);

  });

  $('main').on('click', '.nextQuestion', function(){
    if (interval < 5) {
        console.log("inside"+ interval);
      $('main').html(`<div class="questionBlock">
            <img class="questionImg" src="${STORE[config.questionNumber].img}">
            
            <form>
                <fieldset>
                    <label class="answerBlock one"><input type="radio" value='${STORE[config.questionNumber].questionOptions[0]}' name="answer" required><span>${STORE[config.questionNumber].questionOptions[0]}</span></label>
                    <label class="answerBlock two"><input type="radio" value='${STORE[config.questionNumber].questionOptions[1]}' name="answer" required><span>${STORE[config.questionNumber].questionOptions[1]}</span></label>
                    <label class="answerBlock three"><input type="radio" value='${STORE[config.questionNumber].questionOptions[2]}' name="answer" required><span>${STORE[config.questionNumber].questionOptions[2]}</span></label>
                    <label class="answerBlock four"><input type="radio" value='${STORE[config.questionNumber].questionOptions[3]}' name="answer" required><span>${STORE[config.questionNumber].questionOptions[3]}</span></label>
                    <button type="submit" class="submitButton">Submit</button>
                </fieldset>
            </form>
            
            </div>`);
    } else {
    
      console.log('quiz is over');
    
      if (score < 3){
        $('header').find('.questionInterval').remove();
        $('main').html(`
            <div class="loserBlock">
                <img class="loserIcon" src="./images/handbrake.png">
            
                <h2>Thanks for trying but it looks like you need to check your 
                engine and try again!</h2>
                <button type="button" class="restartButton">Take the quiz again</button>
            
            </div>`);
        
      } else {    
        $('header').find('.questionInterval').remove();
        $('main').html(`
            <div class="winnerBlock">
                <img class="winnerIcon" src="./images/car-key.png">
            
                <h2 class="resultH">Great Job! Looks like you really are a car junkie!</h2>
                <button type="button" class="restartButton">Take the quiz again</button>
            
            </div>`);
    
      }
    }
  });


}

$(allHandlers);
$(startQuizScreen);