
const divContainer = document.querySelector(".container");
const btn = document.createElement("button");
const body = document.querySelector("body");
const h3 = document.createElement("h3");
const divHeader = document.createElement("div");


function gridSize(n)
{
    for(let i = 0;i < n * n;i++)
    {
        const divItem = document.createElement("div");
        divItem.setAttribute("class", "item");
        divItem.style.width = ((960 / n) -2) + "px";
        divItem.style.height = (960 / n) -2 + "px";
        divItem.style.border = "1px solid black";
        divContainer.appendChild(divItem);

    }
}


gridSize(16);


const miniDivs= document.querySelectorAll(".item");

miniDivs.forEach((i)=>{

     i.addEventListener('mouseover',function(event) {

     i.style.backgroundColor = "aqua";

     });

});

body.insertBefore(divHeader,divContainer);
divHeader.setAttribute("class","header");

divHeader.appendChild(h3);
divHeader.appendChild(btn);



btn.textContent = "Change size";
h3.textContent = "Etch-a-Sktech";


h3.setAttribute("class","title");
btn.setAttribute("class","change-size-button");


btn.addEventListener('click',function() {

let n = prompt("Enter a nmuber between 0 and 100");

const items = document.querySelectorAll(".item");

items.forEach((i) => {

    divContainer.removeChild(i);

});

gridSize(n);

});




