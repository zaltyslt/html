"use strict";
const users = ["Saab", "Volvo", "BMW"];
const htmlData = document.querySelector('#js-data');
users.forEach((user) => {
    htmlData.innerHTML += `<li> ${user} </li>`;
}

)

// htmlData.setAttribute('class', 'active');

let btn1 = document.querySelector('#button1');
btn1.addEventListener('click', ()=>{
    htmlData.setAttribute('class', 'active');
});

let pic = document.querySelector('.myimg');
let btn2 = document.querySelector('#button2');
btn2.addEventListener('click', ()=>{
    pic.classList.add('dar');
    pic.setAttribute('src','https://www.w3schools.com/images/compatible_chrome.png');
});