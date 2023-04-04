let model = [
    {
        name: "Mini",
        clickCount: 0
    },
    {
        name: "Mani",
        clickCount: 0
    },
    {
        name: "Mo",
        clickCount: 0
    },
    {
        name: "Minimani",
        clickCount: 0
    },
    {
        name: "Minimo",
        clickCount: 0
    }
]
let octopus = {
    getCatData: ()=>{
      return model
    },
    getCat: (x) =>{
        return model[x]
    },
    setClickCount: (x) =>{
        octopus.getCat(x).clickCount = octopus.getCat(x).clickCount + 1;
        let {name, clickCount } = octopus.getCat(x);
        view.displayCat(name, clickCount, x+1)
    },
    render: ()=>{
        view.init();
    }
}
let view = {
    displayCat: (name, clickCount, y) =>{
        let imageCan = document.querySelector(".cat-img");
        // let coun = document.querySelector("#count");
        imageCan.innerHTML = "";
        let container = document.createElement("div", HTMLDivElement);
        let img = document.createElement("img",HTMLImageElement);
        img.src = `cat${y}.jpg`;
        img.onclick =() =>{ octopus.setClickCount(y-1)}
        let count = document.createElement("h2", HTMLHeadingElement);
        count.textContent = clickCount;
        container.appendChild(img);
        imageCan.appendChild(container);
        imageCan.appendChild(count);
        // view.displayCount(clickCount)
    },
    displayCount:(clickCount) =>{
        let count = document.querySelector(".count");
        count.textContent = clickCount;
    },
    init: () =>{
        octopus.getCatData().forEach((elem, y) =>{
            let lis = document.querySelector("ul");
            let catLi = document.createElement("li", HTMLLIElement);
            catLi.textContent = elem.name;
            catLi.onclick = (() =>{ 
                let {name, clickCount} = octopus.getCat(y); 
                view.displayCat(name, clickCount, y+1);                                                                                                       5
            });
            lis.appendChild(catLi);
        })
    },
    

}
octopus.render();
let clicker = document.querySelectorAll(".click");
let catSpace = document.querySelectorAll(".cat-img");
console.log(catSpace);
console.log(clicker);
let display = document.querySelectorAll(".count");
let cats = document.querySelectorAll("li");
// let click = 0
// cats.forEach((elem, index) =>{
//     elem.addEventListener("click", () =>{
//         for(i = 0; i < clicker.length; i++){
//             catSpace[i].style.display = "none";
//         }
//         let mar = document.createElement("h1", HTMLHeadingElement);
//         mar.textContent = elem.textContent;
//         catSpace[index].appendChild(mar);
//         catSpace[index].style.display = "flex";
//     })
// });
// catSpace.forEach((elem)=>elem.style.display = "none")
// clicker.forEach((elem, index) =>{
//     let click = 0;
//     elem.addEventListener("click", () =>{
//         click++;
//         display[index].textContent = click
//     })
// })