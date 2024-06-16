const ele = document.querySelector("#ele1")

function pintar(e,color) {
    e.target.style.backgroundColor = color
}

ele.addEventListener("click", pintar("rojo"));



