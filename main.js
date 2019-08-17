'use strict';
/*eslint-env jquery*/

let interval = 0;
let score = 0;

// function randomNumbergenerator(){
//     let questionArray=[1];
//     for (let i=1;questionArray.length<5;i++){
//       let randomNumber=Math.floor(Math.random()*10);
//       if(questionArray.indexOf(randomNumber) === -1){
//         questionArray.push(randomNumber);
//       }

//     }
//     return questionArray;
//    }

// let car = randomNumbergenerator();


// console.log(car);

function loadQuestion() {
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
          <p>${score}/5</p>
          <img class="bannerIcon" src="./images/engine.png" alt="starting engine">
        </div>`)

    $('main').append(`<div class="questionBlockRight">
    <img class="ansImg" src="./images/like.png">
    
    <h2 class="rightH">YOU GOT IT RIGHT!</h2>

    <button class="nextQuestion">Next Question</button>
    
    </div>`);

    console.log(score);
    generateNewQuestion();
}

function wrongAnswer() {
    let correctAnswer = `${STORE[interval].correntAnswer}`;
    $('header').html(`
        <div class="topBanner">
          <p>${score}/5</p>
          <img class="bannerIcon" src="./images/engine.png" alt="starting engine">
        </div>`)
    $('main').append(`<div class="questionBlockWrong">
    <img class="ansImg" src="./images/tools.png" alt="tools making a X sign">
    
    <h2 class="wrongH">YOU GOT IT WRONG!</h2>
    <p class="wrongP">The correct answer was ${correctAnswer}!</p>

    <button class="nextQuestion">Next Question</button>
    
    </div>`);
    console.log()
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
          <p>${score}/5</p>
          <img class="bannerIcon" src="./images/engine.png" alt="starting engine">
        </div>`)
        if (interval < 5){$('main').append(`<div class="questionBlock">
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
        $('main').on('click', '.restartButton', function (event) {
            location.reload();
          });
        if (score < 3){
            $('main').append(`
        <div class="loserBlock">
            <img class="loserIcon" src="./images/handbrake.png">
        
            <h2 class="resultH">Thanks for trying but it looks like you need to check your 
            engine and try again!</h2>
            <button type="button" class="restartButton">Take the quiz again</button>
        
        </div>`);} else {
        
        $('main').append(`
        <div class="winnerBlock">
            <img class="winnerIcon" src="./images/car-key.png">
        
            <h2 class="resultH">Great Job! Looks like you really are a car junkie!</h2>
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
        $('header').find('div').remove();
        loadQuestion();
        $('header').append(`
        <div class="topBanner">
          <p>${score}/5</p>
          <img class="bannerIcon" src="./images/engine.png" alt="starting engine">
        </div>`)
    });
}

$(startQuiz);
$(checkQuestion);