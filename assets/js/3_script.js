const ele = document.querySelector("#ele1")

function pintar(e,color="green") {
    e.target.style.backgroundColor = color
}

pintar({ target: ele });

ele.addEventListener("click",  (e,color) => {
    e.target.style.backgroundColor='yellow'
})




