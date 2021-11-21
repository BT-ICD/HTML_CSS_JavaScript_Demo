// To get reference of HTML elements
let principal = document.getElementById('principal');
let rate = document.getElementById('rate');
let year = document.getElementById('year');
let btnInterest = document.getElementById('btnInterest');
let interest = document.getElementById('interest');
let amount = document.getElementById('amount');

// To map click event on btnInterest 
btnInterest.addEventListener('click',getInterestAndAmount)

//Function to display and calculate answer
function getInterestAndAmount(){
interest.value = (principal.value * rate.value * year.value)/100;
amount.value = parseInt(principal.value) + parseInt( interest.value);
}