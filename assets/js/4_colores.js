const div1 = document.querySelector('#div1')
const div2 = document.querySelector('#div2')
const div3 = document.querySelector('#div3')
const div4 = document.querySelector('#div4')

function sizeDiv (elemento,alto,ancho,background) {
    elemento.style.height = alto
    elemento.style.width = ancho
    elemento.style.backgroundColor = background
}

sizeDiv(div1, '200px', '200px', 'blue');
sizeDiv(div2, '200px', '200px', 'red');
sizeDiv(div3, '200px', '200px', 'green');
sizeDiv(div4, '200px', '200px', 'yellow');





