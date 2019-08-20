'use strict';
/*eslint-env jquery*/

const STORE = [{
  question: 'Lamborghini',
  questionOptions: ['Japan', 'Italy', 'United States', 'Switzerland'],
  img: 'https://www.stickpng.com/assets/images/580b585b2edbce24c47b2c8c.png',
  correntAnswer: 'Italy'
}, {
  question: 'Porshe',
  questionOptions: ['Germany', 'Denmark', 'China', 'Russia'],
  img: 'https://cdn.pixabay.com/photo/2014/05/21/15/38/coat-of-arms-349889_1280.jpg',
  correntAnswer: 'Germany'
}, {
  question: 'McLaren',
  questionOptions: ['Japan', 'Italy', 'United Kingdom', 'United States'],
  img: 'https://freepngimg.com/download/mclaren_logo/2-2-mclaren-logo-transparent.png',
  correntAnswer: 'United Kingdom'
}, {
  question: 'Bentley',
  questionOptions: ['Spain', 'Sweden', 'United States', 'United Kingdom'],
  img: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Bentley_Continental_GT_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2821%29.jpg',
  correntAnswer: 'United Kingdom'
}, {
  question: 'Rolls Royce',
  questionOptions: ['United Kingdom', 'Germany', 'United States', 'Denmark'],
  img: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Rolls_royce.png',
  correntAnswer: 'United Kingdom'
}, {
  question: 'Mercedes Benz',
  questionOptions: ['Japan', 'United Kingdom', 'Germany', 'United States'],
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/862px-Mercedes-Logo.svg.png',
  correntAnswer: 'Germany'
}, {
  question: 'Ford',
  questionOptions: ['Germany', 'Spain', 'United States', 'Italy'],
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/1280px-Ford_logo_flat.svg.png',
  correntAnswer: 'United States'
}, {
  question: 'BMW',
  questionOptions: ['Germany', 'Italy', 'Denmark', 'United States'],
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1024px-BMW.svg.png',
  correntAnswer: 'Germany'
}, {
  question: 'Cadillac',
  questionOptions: ['Germany', 'Japan', 'United States', 'Denmark'],
  img: 'https://s3-eu-west-1.amazonaws.com/vivadoo/uploads/465481/full_f72e603e50754dce1a637cead17625b1.png',
  correntAnswer: 'United States'
}, {
  question: 'Tesla',
  questionOptions: ['Japan', 'United States', 'Spain', 'United Kingdom'],
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/602px-Tesla_T_symbol.svg.png',
  correntAnswer: 'United States'
}];


const config={
  questionNumberArray:[],//global
  questionNumber:0,

};
  

//make a form that takes a button sumbit 
//when the button is clicked it will change colors
//each button will be equal to a numberator
//if the numerator is === correct answer 
//send you to the rightscreen else --> the wrong screen