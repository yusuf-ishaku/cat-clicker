let clicker = document.querySelectorAll(".click");
let catSpace = document.querySelectorAll(".cat-img");
console.log(catSpace)
console.log(clicker)
let display = document.querySelectorAll(".count");
let cats = document.querySelectorAll("li");
// let click = 0
cats.forEach((elem, index) =>{
    elem.addEventListener("click", () =>{
        for(i = 0; i < clicker.length; i++){
            catSpace[i].style.display = "none";
        }
        let mar = document.createElement("h1", HTMLHeadingElement);
        mar.textContent = elem.textContent;
        catSpace[index].appendChild(mar);
        catSpace[index].style.display = "flex";
    })
});
catSpace.forEach((elem)=>elem.style.display = "none")
clicker.forEach((elem, index) =>{
    let click = 0;
    elem.addEventListener("click", () =>{
        click++;
        display[index].textContent = click
    })
})