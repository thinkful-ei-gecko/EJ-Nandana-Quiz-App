'use strict';
/*eslint-env jquery*/

let interval = 0;
let score = 0;

function loadQuestion() {
    console.log('loadQuestion');
    $('main').append(`<div class="questionBlock">
    <img class="questionImg" src="${STORE[interval].img}">
    
    <form>
        <fieldset>
            <label class="answerBlock one"><input type="radio" value='${STORE[interval].questionOptions[0]}' name="answer" required><span>${STORE[interval].questionOptions[0]}</span></label>
            <label class="answerBlock two"><input type="radio" value='${STORE[interval].questionOptions[1]}' name="answer" required><span>${STORE[interval].questionOptions[1]}</span></label>
            <label class="answerBlock three"><input type="radio" value='${STORE[interval].questionOptions[2]}' name="answer" required><span>${STORE[interval].questionOptions[2]}</span></label>
            <label class="answerBlock four"><input type="radio" value='${STORE[interval].questionOptions[3]}' name="answer" required><span>${STORE[interval].questionOptions[3]}</span></label>
            <button type="submit" class="submitButton">Submit</button>
        </fieldset>
    </form>
    
    </div>`);
    checkQuestion();

}

function checkQuestion() {
    $('main').submit(function (event) {
        event.preventDefault();
        let selectedAnswer = $('input:checked');
        let answer = selectedAnswer.val();
        let correctAnswer = `${STORE[interval].correntAnswer}`;

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
}

function rightAnswer() {
    let correctAnswer = `${STORE[interval].correntAnswer}`
    updateScore();
    $('header').html(`
        <div class="topBanner">
          <p class="questionRightInterval">${score}/5</p>
          <img class="bannerIcon" src="./images/engine.png" alt="starting engine">
        </div>
        <div>
        <p class="questionInterval">Question: ${interval + 1}/5</p>
        </div>`)

    $('main').html(`<div class="rightAnswer">
    <img class="rightImg" src="./images/like.png">
    
    <h2 class="">YOU GOT IT RIGHT!</h2>
    <button class="nextQuestion">Next Question</button>
    
    </div>`);

    generateNewQuestion();
}

function wrongAnswer() {
    let correctAnswer = `${STORE[interval].correntAnswer}`;
    $('header').html(`
        <div class="topBanner">
          <p class="questionRightInterval">${score}/5</p>
          <img class="bannerIcon" src="./images/engine.png" alt="starting engine">
        </div>
        <div>
        <p class="questionInterval">Question: ${interval + 1}/5</p>
        </div>`)
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
    $('main').on('click', '.nextQuestion', function (event) {
        event.preventDefault();
        $('main').find('div').remove();
        $('header').html(`
        <div class="topBanner">
          <p class="questionRightInterval">${score}/5</p>
          <img class="bannerIcon" src="./images/engine.png" alt="starting engine">
        </div>
        <div>
        <p class="questionInterval">Question: ${interval + 1}/5</p>
        </div>`)
        if (interval < 5){$('main').html(`<div class="questionBlock">
        <img class="questionImg" src="${STORE[interval].img}">
        
        <form>
            <fieldset>
                <label class="answerBlock one"><input type="radio" value='${STORE[interval].questionOptions[0]}' name="answer" required><span>${STORE[interval].questionOptions[0]}</span></label>
                <label class="answerBlock two"><input type="radio" value='${STORE[interval].questionOptions[1]}' name="answer" required><span>${STORE[interval].questionOptions[1]}</span></label>
                <label class="answerBlock three"><input type="radio" value='${STORE[interval].questionOptions[2]}' name="answer" required><span>${STORE[interval].questionOptions[2]}</span></label>
                <label class="answerBlock four"><input type="radio" value='${STORE[interval].questionOptions[3]}' name="answer" required><span>${STORE[interval].questionOptions[3]}</span></label>
                <button type="submit" class="submitButton">Submit</button>
            </fieldset>
        </form>
        
        </div>`);


    } else {

        console.log("quiz is over");

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
    })
}

//THIS WILL RESET THE QUIZ

$('main').on('click', '.restartButton', function(){
    console.log("restart button clicked");
    startQuizScreen();
    clear();
})


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
        loadQuestion();
}

function startQuizScreen() {
    console.log("startQuizScreen");
    $('header').addClass('initial');
    $('header').html(`<img class="icon" src="./images/engine.png" alt="starting engine">`);
    $('main').html(`
    <div class="block1">
        <h1>Start Your Engine</h1>
        <button class='beginQuiz'>Begin Quiz</button>
        <p>Note: Pick the option that the car originates from</p>
    </div>`);

    $('main').on('click', '.beginQuiz', function(){
        startQuiz();
        $('.initial').removeClass();
    });
}

$(startQuizScreen);