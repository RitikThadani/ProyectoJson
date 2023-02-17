const header = document.querySelector('header');
console.log(header);
const section = document.querySelector('section');
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

const request = new XMLHttpRequest();
console.log(request);
request.open('GET', requestURL);
console.log(request);
request.responseType = 'json';
request.send();
console.log(request);