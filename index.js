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
        view.displayCat(name, clickCount, x+1);
        view.renderAdmin(x);
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
    renderAdmin:(x) =>{
        let admin = document.querySelector(".admin");
        document.querySelector(".name").value = ""
            document.querySelector(".name").value = octopus.getCat(x).name;
            document.querySelector(".clickc").value = ""
            document.querySelector(".clickc").value = octopus.getCat(x).clickCount
        admin.onclick = () =>{
            document.querySelector(".input").style.display = "flex";
        }
        let cancel = document.querySelector(".cancel");
        cancel.onclick = () =>{
            document.querySelector(".input").style.display = "none"
        }
        let save = document.querySelector(".save");
        save.onclick = () =>{
            let name = document.querySelector(".name").value;
            let clickCount = document.querySelector(".clickc").value;
            view.setCat(x, name, clickCount);
            document.querySelector(".input").style.display = "none"
        }
    },
    setCat: (x, name, clickCount) =>{
        octopus.getCat(x).clickCount = clickCount;
        octopus.getCat(x).name = name;
        // console.log(octopus.getCatData());
        view.init();
        view.displayCat(name, clickCount, x+1);
    },
    init: () =>{
        let lis = document.querySelector("ul");
        lis.innerHTML = "";
        octopus.getCatData().forEach((elem, y) =>{
            let catLi = document.createElement("li", HTMLLIElement);
            catLi.textContent = elem.name;
            catLi.onclick = (() =>{ 
                let {name, clickCount} = octopus.getCat(y); 
                view.displayCat(name, clickCount, y+1);     
                view.renderAdmin(y);                                                                                                  5
            });
            lis.appendChild(catLi);
        })
    },
    

}
octopus.render();
view.renderAdmin(0);
