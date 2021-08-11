'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
    modal.classList.remove('hidden'); //no dots
    overlay.classList.remove('hidden');
}
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal); // 괄호() 있으면 바로 함수 호출
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});