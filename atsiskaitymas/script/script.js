const options = {method: 'GET'};
let num = Math.ceil(Math.random()*10+1)
fetch('https://testimonialapi.toolcarton.com/api/' + num, options)
  .then(response => response.json())
//   .then(response => console.log(response))
  .then(response => ShowDataOnHTML(response))
  .catch(err => console.error(err));

function ShowDataOnHTML(data){
    let testimonial = document.querySelector('#testim');
    console.log(data);
    console.log(data.message);
        
        testimonial.innerHTML += `
        <article class="quote">
            <p>${data.message}</p>
            <img src="${data.avatar}" alt="">
            <p>${data.name}</p>
            <p>${data.designation}</p>
        </article>
        `;
} 
 
   



// "id": 3,
// "name": "Michael D.",
// "location": "Austin, Texas",
// "designation": "Investor",
// "avatar": "https://testimonialapi.toolcarton.com/avatar/3.jpg",
// "message": "Insights from service drove 30% lift in our conversions, this product service is essential for your company growth strategy.",
// "lorem": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
// "rating": 4.5,
// "audio": "https://testimonialapi.toolcarton.com/audio/3.mp3"
