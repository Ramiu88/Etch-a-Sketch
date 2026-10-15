
const divContainer = document.querySelector(".container");


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


