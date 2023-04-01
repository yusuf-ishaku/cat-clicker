let clicker = document.querySelector(".click");
let display = document.querySelector(".count");
let click = 0;
display.textContent = click;
clicker.addEventListener("click", () =>{
    click++
})