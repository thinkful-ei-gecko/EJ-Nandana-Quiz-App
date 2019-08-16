'use strict';

function startQuiz() {
    $('.myForm').submit(function (event) {
        event.preventDefault();
        $('.myForm').append(`<div class="questionBlock"><p class="question">This is a test!</p></div>`);
        $('.myForm').find('h1').remove();
        $('.myForm').find('button').remove();
        $('header').find('img').remove();
    })
}

$(startQuiz);