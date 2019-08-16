'use strict';
/*eslint-env jquery*/

function startQuiz() {
  $('main').submit(function (event) {
    event.preventDefault();
    $('.myForm').find('h1').remove();
    $('.myForm').find('button').remove();
    $('header').find('img').remove();
    $('.myForm').append(`<div class="questionBlock">
    <img class="questionImg" src="${STORE[2].img}">
    
    <form>
    <fieldset>
    <label ><input type="radio" value='answer1' name="answer" required><span>${STORE[2].questionOptions[0]}</span></label>
    <label ><input type="radio" value='answer2' name="answer" required><span>${STORE[2].questionOptions[1]}</span></label>
    <label ><input type="radio" value='answer3' name="answer" required><span>${STORE[2].questionOptions[2]}</span></label>
    <label ><input type="radio" value='answer4' name="answer" required><span>${STORE[2].questionOptions[3]}</span></label>
    <button type="submit" class="submitButton">Submit</button>
    </fieldset>
    </form>
    
    </div>`);
    
   
  });
}

function checkQuestion(){
  $('form').submit(function(event){
    event.preventDefault();
    let selectedAnswer = $('input:checked');
    let answer=selectedAnswer.val();
    let correctAnswer=`${STORE[2].correntAnswer}`;

console.log(selectedAnswer);
console.log(answer);
console.log(correctAnswer);
  });
}

$(startQuiz);
$(checkQuestion);