'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const request = fetch('https://restcountries.eu/rest/v2/name/portugal');
console.log(request);