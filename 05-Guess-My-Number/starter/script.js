'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const answer = Math.trunc(Math.random() * 10) + 1;
let number = document.querySelector('.number');
let msg = document.querySelector('.message');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');

highScore.value = 0;

console.log(answer);

const displayMessage = function (message) {
    msg.textContent = message;
}

const checkNumber = function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess)

    if (!guess) {
        displayMessage('No Number');
    }

    else if (answer === guess) {
        displayMessage('Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        number.textContent = answer;
        number.style.width = '30rem';
        if (score.value > highScore.value) {
            highScore.value = score.value;
            highScore.textContent = highScore.value;
        }
    }
    else if (answer !== guess) {
        if (score.value > 1) {
            displayMessage(answer > guess ? 'Too Low' : 'Too High');
            score.value--;
            score.textContent = score.value;
        }
        else {
            displayMessage('You lost');
            score.textContent = 0;
        }
    }
}

const resetNumber = function () {
    score.value = 20;
    score.textContent = score.value;
    answer = Math.trunc(Math.random() * 10) + 1;
    msg.textContent = 'Start guessing...'
    console.log(answer);
}

document.querySelector('.check').addEventListener('click', checkNumber);
document.querySelector('.again').addEventListener('click', resetNumber);