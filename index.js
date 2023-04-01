let clicker = document.querySelectorAll(".click");
console.log(clicker)
let display = document.querySelectorAll(".count");
let click = 0;
let click1 = 0;
display[0].textContent = click;
display[1].textContent = click1
clicker[0].addEventListener("click", () =>{
    click++;
    display[0].textContent = click;
});
clicker[1].addEventListener("click", () =>{
    click1++;
    display[1].textContent = click1
})