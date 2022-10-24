"use strict";

const options = { method: 'GET' };
let count = 4; //kiek noresim gauti irasu
fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=' + count, options)
  .then(response => response.json())
  //.then(response => console.log(response))
  //mano funkcijai perduodamas gautas rezultatas
  .then(response => PushData(response))
  .catch(err => console.error(err));


function PushData(_params) {
  let pushTo = document.querySelector(".k33370-push");

  _params.forEach(element => {
    pushTo.innerHTML +=
      // <p>${element.quote}</p>
      // <p>${element.image}</p>
      // <p>${element.character}</p>
      // <p>${element.characterDirection}</p>`
      `<div class="card mb-3" style="max-width: 400px;">
      <div class="row g-0">
        <div class="col-md-4 p-2">
          <img src="${element.image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text">${element.quote}.</p>
            <p class="card-text"><small class="text-muted">${element.character} - ${element.characterDirection}</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>`

  });
}

