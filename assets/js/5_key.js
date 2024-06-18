const keyDiv = document.querySelector('#key')
const keyDiv2 = document.querySelector('#key2')

function aspectDiv(elemento) {
    elemento.style.height = '200px'
    elemento.style.width = '200px'
    elemento.style.backgroundColor = 'black'
}

aspectDiv(keyDiv)
aspectDiv(keyDiv2)

document.addEventListener('keydown', function(event) {
    if (event.key === 'a' || event.key === 'A') {
        keyDiv.style.backgroundColor= 'pink'
    } else if (event.key === 's' || event.key === 'S') {
        keyDiv.style.backgroundColor= 'orange'
    } else if (event.key === 'd' || event.key === 'D') {
        keyDiv.style.backgroundColor= '#80BFFF'
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'q' || event.key === 'Q') {
        keyDiv2.style.backgroundColor= 'purple'
    } else if (event.key === 'w' || event.key === 'W') {
        keyDiv2.style.backgroundColor= 'gray'
    } else if (event.key === 'e' || event.key === 'E') {
        keyDiv2.style.backgroundColor= 'brown'
    }
});