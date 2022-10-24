"use strict";
const loginForm = document.querySelector('#login');
const fName = document.querySelector('#fname');
const lName = document.querySelector('#lname');

const usersList = [];

// loginForm.addEventListener('submit', (e)=>{
//     //e - evento objektas
//     //eilute zamiau sustabdo formos submission,
//     //nes kitaip puslapis atnaujinamas ir nieko nesimao
//     e.preventDefault();

//     let name = fName.value;
//     let lastName = lName.value;

//     //kuriamas user objektas
//     let user = {name, lastName};
//    //useris pushinamas i masyva
//     usersList.push(user);
//     //console.log(user);
    
//     //iraso userList masyva i localstorage
   
//     localStorage.setItem("userList", JSON.stringify( usersList));
//     loginForm.reset();

// });

const options = {method: 'GET'};
let num = Math.ceil(Math.random()*10+1)
fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=' + num, options)
  .then(response => response.json())
//   .then(response => console.log(response))
  .then(response => ShowDataOnHTML(response))
  .catch(err => console.error(err));

function ShowDataOnHTML(data){
    let simpsonQuotes = document.querySelector('#simpsons-quotes');
    
    data.forEach(simpson => {
        simpsonQuotes.innerHTML += `
        <article class="quote">
        ${simpson.quote}
        <img src="${simpson.image}" alt="">
        </article>`
        
    });
}


// const users = ["Saab", "Volvo", "BMW"];
// const htmlData = document.querySelector('#js-data');
// users.forEach((user) => {
//     htmlData.innerHTML += `<li> ${user} </li>`;
// }

// )

// // htmlData.setAttribute('class', 'active');

// let btn1 = document.querySelector('#button1');
// btn1.addEventListener('click', ()=>{
//     htmlData.setAttribute('class', 'active');
// });

// let pic = document.querySelector('.myimg');
// let btn2 = document.querySelector('#button2');
// btn2.addEventListener('click', ()=>{
//     pic.setAttribute('src','https://www.w3schools.com/images/compatible_chrome.png');
// });