'use strict';
/*eslint-env jquery*/

function randomNumbergenerator(){
    let questionArray=[1];
    for (let i=1;questionArray.length<5;i++){
      let randomNumber=Math.floor(Math.random()*10);
      if(questionArray.indexOf(randomNumber) === -1){
        questionArray.push(randomNumber);
      }
    
    }
    return questionArray;
   }

let car = randomNumbergenerator();
console.log(car);
let interval = 0;
let carInterval = car[interval];
let score = 0;

function loadQuestion() {
    $('main').append(`<div class="questionBlock">
    <img class="questionImg" src="${STORE[carInterval].img}">
    
    <form>
        <fieldset>
            <label ><input type="radio" value='${STORE[carInterval].questionOptions[0]}' name="answer" required><span>${STORE[carInterval].questionOptions[0]}</span></label>
            <label ><input type="radio" value='${STORE[carInterval].questionOptions[1]}' name="answer" required><span>${STORE[carInterval].questionOptions[1]}</span></label>
            <label ><input type="radio" value='${STORE[carInterval].questionOptions[2]}' name="answer" required><span>${STORE[carInterval].questionOptions[2]}</span></label>
            <label ><input type="radio" value='${STORE[carInterval].questionOptions[3]}' name="answer" required><span>${STORE[carInterval].questionOptions[3]}</span></label>
            <button type="submit" class="submitButton">Submit</button>
        </fieldset>
    </form>
    
    </div>`);

}

function checkQuestion() {
    $('main').submit(function (event) {
        event.preventDefault();
        let selectedAnswer = $('input:checked');
        let answer = selectedAnswer.val();
        let correctAnswer = `${STORE[carInterval].correntAnswer}`;

        if (correctAnswer === answer) {
            console.log('You are right!');
            rightAnswer();
        } else {
            console.log('Wrong! The correct answer is: ' + correctAnswer);
            wrongAnswer();
        }
        $('.questionBlock').remove();
        countInterval();


        console.log(selectedAnswer);
        console.log(answer);
        console.log(correctAnswer);

    });
}

function rightAnswer() {
    let correctAnswer = `${STORE[carInterval].correntAnswer}`
    updateScore();
    $('header').html(`
    <div class="topBanner">
        <p>${score}/10</p>
    </div>`)

    $('main').append(`<div class="questionBlockRight">
    <img class="questionImg" src="./images/like.png">
    
    <h2>YOU GOT IT RIGHT!</h2>

    <button class="nextQuestion">Next Question</button>
    
    </div>`);

    console.log(score);
    generateNewQuestion();
}

function wrongAnswer() {
    let correctAnswer = `${STORE[carInterval].correntAnswer}`;
    $('main').append(`<div class="questionBlockWrong">
    <img class="questionImg" src="./images/tools.png">
    
    <h2>YOU GOT IT WRONG!</h2>
    <p>The correct answer was ${correctAnswer}!</p>

    <button class="nextQuestion">Next Question</button>
    
    </div>`);
    console.log()
    generateNewQuestion();
}

function countInterval() {
    interval++;
}

function updateScore(){
    score++;
}

function generateNewQuestion() {
    $('main').on('click', '.nextQuestion', function (event) {
        event.preventDefault();
        $('main').find('div').remove();
        if (interval < 5){$('main').append(`<div class="questionBlock">
        <img class="questionImg" src="${STORE[carInterval].img}">
        
        <form>
            <fieldset>
                <label ><input type="radio" value='${STORE[carInterval].questionOptions[0]}' name="answer" required><span>${STORE[carInterval].questionOptions[0]}</span></label>
                <label ><input type="radio" value='${STORE[carInterval].questionOptions[1]}' name="answer" required><span>${STORE[carInterval].questionOptions[1]}</span></label>
                <label ><input type="radio" value='${STORE[carInterval].questionOptions[2]}' name="answer" required><span>${STORE[carInterval].questionOptions[2]}</span></label>
                <label ><input type="radio" value='${STORE[carInterval].questionOptions[3]}' name="answer" required><span>${STORE[carInterval].questionOptions[3]}</span></label>
                <button type="submit" class="submitButton">Submit</button>
            </fieldset>
        </form>
        
        </div>`);
    } else {
        $('main').on('click', '.restartButton', function (event) {
            location.reload();
          });
        if (score < 3){
            $('main').append(`
        <div class="questionBlock">
            <img class="questionImg" src="./images/handbrake.png">
        
            <h2>Thanks for trying but it looks like you need to check your 
            engine and try again!</h2>
            <button type="button" class="restartButton">Take the quiz again</button>
        
        </div>`);} else {
        
        $('main').append(`
        <div class="questionBlock">
            <img class="questionImg" src="./images/car-key.png">
        
            <h2>Great Job! Looks like you really are a car junkie!</h2>
            <button type="button" class="restartButton">Take the quiz again</button>
        
        </div>`);

        }
    }
    })
}

function startQuiz() {
    $('main').on('click', '.beginQuiz', function (event) {
        event.preventDefault();
        $('main').find('.myForm').remove();
        $('header').find('img').remove();
        loadQuestion();
        $('header').append(`
        <div class="topBanner">
          <p>${score}/10</p>
        </div>`)
    });
}

$(startQuiz);
$(checkQuestion);