//Arbatpinigių skaičiavimas ir pranešimas apie neužpildytus laukus

var inputSum = document.getElementById("inputSum");
var selectQuality = document.getElementById("selectQuality");
var inputPeople = document.getElementById("inputPeople");
var tipForm = document.querySelector("form");

tipForm.addEventListener("submit", function(e){
    e.preventDefault();
    if(inputSum.value===""||inputPeople.value===""||selectQuality.value===""){
       alert(`Prašome užpildydti visus laukus\nAčiū!`);
    }else{
        let tip = (inputSum.value)* (selectQuality.value)/100 * (inputPeople.value);
        alert(`Rekomenduojami arbatpinigiai: ${tip} eur\nAčiū!`);
        tipForm.reset();
    }
});

