'use strict';

///////////////////////////////////////
// // Modal window

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// const openModal = function (e) {
//   e.preventDefault();
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// // for (let i = 0; i < btnsOpenModal.length; i++)
// //   btnsOpenModal[i].addEventListener('click', openModal);
// btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

// ////////Selecting elements//////

// console.log(document.documentElement);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// // NodeList(4) [section#section--1.section, section#section--2.section, section#section--3.section, section.section.section--sign-up]
// // 0: section#section--1.section
// // 1: section#section--2.section
// // 2: section#section--3.section
// // 3: section.section.section--sign-up


// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// automatically updates
// HTMLCollection(9) [button.btn--text.btn--scroll-to, button.btn.operations__tab.operations__tab--1.operations__tab--active, button.btn.operations__tab.operations__tab--2, button.btn.operations__tab.operations__tab--3, button.slider__btn.slider__btn--left, button.slider__btn.slider__btn--right, button.btn.btn--show-modal, button.btn--close-modal, button.btn]
// 0: button.btn--text.btn--scroll-to
// 1: button.btn.operations__tab.operations__tab--1.operations__tab--active
// 2: button.btn.operations__tab.operations__tab--2
// 3: button.btn.operations__tab.operations__tab--3
// 4: button.slider__btn.slider__btn--left
// 5: button.slider__btn.slider__btn--right
// 6: button.btn.btn--show-modal
// 7: button.btn--close-modal
// 8: button.btn
// length: 9


// // Creating and inserting elements
// // .insertAdjacentHTML

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies for imporved functionality and analytics.';
// message.innerHTML = 'We use cookies for imporved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));

// // header.before(message);
// // header.after(message);

// // Delete elements
// document.querySelector('.btn--close-cookie').addEventListener('click', function () {
//   message.remove(); // recent
//   // message.parentElement.removeChild(message); // old
// });

// // Styles

// // inline styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';


// console.log(message.style.height); // cannot get hidden style
// console.log(message.style.backgroundColor); // only get inline style

// console.log(getComputedStyle(message).height); // get all styles

// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10)
//   + 30 + 'px';

// // document.documentElement.style.setProperty('--color-primary', 'orangered')


// // Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = 'Beautiful minimalist logo';
// console.log(logo.alt);
// //// Non-standard
// console.log(logo.designer);// not standard attribute not work
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');
// console.log(logo.getAttribute('company'));

// console.log(logo.src); // http://127.0.0.1:13165/img/logo.png (absolute)
// console.log(logo.getAttribute('src')); // img/logo.png (relative)

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href); // http://127.0.0.1:13165/#
// console.log(link.getAttribute('href')); // #

// // Data attributes (starts with data, ex) data-version-number='3.0')
// console.log(logo.dataset.versionNumber); // version-number transform to camel case

// // Classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// // // Don't use override all class and use only one
// // logo.className = 'jonas'; 

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

//   console.log(e.target.getBoundingClientRect());
//   console.log('Current Scroll (x/y)', window.pageXOffset, window.pageYOffset);

//   console.log('height/width', document.documentElement.clientHeight,
//     document.documentElement.clientWidth);

//   // Scrolling
//   // window.scrollTo(s1coords.left + window.pageXOffset,
//   //   s1coords.top + window.pageYOffset); // current position + current scroll

//   // // Old ver
//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffset,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: 'smooth'
//   // });
//   // New ver
//   section1.scrollIntoView({ behavior: 'smooth' });

// });

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListener');
// };

// // h1.addEventListener('mouseenter', alertH1);
// // setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
// // h1.onmouseenter = function (e) {
// //   alert('onmouseenter');
// // };

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// // addEventlistener only listen for events in bubbling phase(2) not capturing phase(1)
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);

//   // Stop propagation
//   // e.stopPropagation(); //not good idea
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Container', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Nav', e.target, e.currentTarget);
// },
//   true); // listen capturing phase


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());
  console.log('Current Scroll (x/y)', window.pageXOffset, window.pageYOffset);

  console.log('height/width', document.documentElement.clientHeight,
    document.documentElement.clientWidth);

  section1.scrollIntoView({ behavior: 'smooth' });

});

// Page navigation


// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault(); // anchor stop
//     const id = this.getAttribute('href'); // != this.href = absolute url
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });

//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault(); // anchor stop
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// // DOM traversing

// const h1 = document.querySelector('h1');

// // Going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';

// // Going upwards; parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

