
let numPerSide = 16;
let containerWidth = 960;
let currentSize = 16;

container = document.getElementById("square-container");
// container.style.width = `${containerWidth}px`;

function createGrid(divAmount){

    for(i = 0; i < divAmount; i++){
      divColumn = document.createElement("div");
      divColumn.setAttribute("id","column-" + `${i + 1}` );
      divColumn.setAttribute("flex-direction","column");  
        for(j = 0; j < divAmount; j++){
            //create div square
            let divSquare;
            divSquare = document.createElement("div"); 
            //Add an id and set div size
            divSquare.setAttribute("id",`square ${i + 1} , ${j + 1}`);
            divSquare.style.transition = "all .25s";
            //set divSquare size based on container 
            divSideSize = containerWidth / divAmount;
            divSquare.style.height = `${divSideSize}` + "px";
            divSquare.style.width =  `${divSideSize}` + "px";
            //add square to current column
            divColumn.appendChild(divSquare);
            divSquare.addEventListener("mouseover",function(){
                document.getElementById(divSquare.id).classList.add("color");
             });
        }

        container.appendChild(divColumn);
    }   
}


function clearGrid(){
    let first = container.firstElementChild;
    while (first){
        first.remove();
        first = container.firstElementChild;
    }
    createGrid(currentSize);
    
}

function checkNumber(number)
{
    if(isNaN(Number(number)) ||number == 0)
    {
        return false
    }

    return true;
}

function setGrid()
{
    let newSize = Number(prompt("How many squares per side (1 - 200)?"));
    if(newSize == null) return;

    if(checkNumber(newSize))
    {
        if(newSize > 200) newSize = 200;
        console.log(newSize);
        currentSize = newSize;
        clearGrid();
        createGrid(Math.floor(newSize));
    }
    else{
        alert("Please enter valid number.")
        setGrid();
    }    
}

createGrid(numPerSide);

clearBtn = document.getElementById("clear-grid");
clearBtn.addEventListener("click", clearGrid);

changeBtn = document.getElementById("change-grid");
changeBtn.addEventListener("click",setGrid);