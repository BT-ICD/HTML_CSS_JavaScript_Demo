const btn1 = document.getElementById('btn1');
const txt1 = document.getElementById('txt1');
const txt2 = document.getElementById('txt2');
const txt3 = document.getElementById('txt3');

btn1.addEventListener('click', mathOperation);
function mathOperation(){
// alert('hello');

let a =parseInt( txt1.value);
let b= parseInt( txt2.value);
let c=a+b;
console.log("a is ",a);
console.log("b is ",b);
txt3.value = c;

}