'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    console.log(secretNumber,typeof secretNumber);

    //input eger bos girilirse

    if(!guess){
        displayMessage('Bir Sayi Giriniz');
    }

    //sayilar bibiri ile eslesirse
    else if (guess === secretNumber){
        displayMessage('Dogru Tahmin!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    }

});