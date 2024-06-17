const keyDiv = document.querySelector('#key')

function aspectDiv(elemento) {
    elemento.style.height = '200px'
    elemento.style.width = '200px'
    elemento.style.backgroundColor = 'black'
}

aspectDiv(keyDiv)

document.addEventListener('keydown', function(event,elemento) {
    if (event.key == 'a') {
        alert("todo bien")
    } else if (event.key == 's') {
        alert("todo bien2")
    } else if (event.key == 'd') {
        alert("todo bien3")
    }

    console.log('Tecla presionada: ' + event.key);
});
