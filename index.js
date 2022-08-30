let img = document.getElementById("header-img");
console.log(img)
let head = document.getElementById("header")

head.addEventListener("click", changeColor);

function changeColor(event){
event.target.classList.toggle("color");
}