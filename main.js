'use strict';

function randomQuestion() {

    let questionArray = [];

    for (let i = 0; i < 5; i++) {

        let randomNumber = Math.floor(Math.random() * STORE.length);

        questionArray.push(
            randomNumber
        );

        let repeated = questionArray.find(function(number){
            if (number === questionArray[i]){
                return Math.floor(Math.random() * 10);
            } else {
                return number;
            }
        });

        console.log(repeated);

    }

    console.log(questionArray);
}

function startQuiz() {
    $('.myForm').submit(function (event) {
        event.preventDefault();
        $('.myForm').append(`<div class="questionBlock"><img class="questionImg" src="${STORE[2].img}"></div>`);
        $('.myForm').find('h1').remove();
        $('.myForm').find('button').remove();
        $('header').find('img').remove();
    })
}

$(startQuiz);
// $(randomQuestion);