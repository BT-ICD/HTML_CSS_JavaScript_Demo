const txt1 = document.getElementById('txt1');
const txt2 = document.getElementById('txt2');
const txtAns = document.getElementById('txtAns');
const btnAdd = document.getElementById('btnAdd');
btnAdd.addEventListener('click',addition);

function addition(){
    txtAns.value = parseInt(txt1.value) + parseInt(txt2.value);
}