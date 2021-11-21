let length = document.getElementById('length');
let width = document.getElementById('width');
let btnArea = document.getElementById('btnArea');
let area = document.getElementById('area');
let perimeter =  document.getElementById('perimeter');
let btnPerimeter = document.getElementById('btnPerimeter');



btnArea.addEventListener('click', areaofrectangle);
btnPerimeter.addEventListener('click', perimeterofrectangle);

function areaofrectangle(){
    area.value = parseInt(length.value) * parseInt(width.value);
}
function perimeterofrectangle(){
    perimeter.value = 2 * (parseInt(length.value) + parseInt(width.value));
}