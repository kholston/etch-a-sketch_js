
let numPerSide = 16;
let containerWidth = 960;

container = document.getElementById("container");
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
    
}

function setGrid()
{
    let newSize = prompt("How many squares per side?");
    if(isNaN(Number(newSize)))
    {
        alert("Please enter a valid number");
        setGrid();
    }
    if(newSize == null) return;
    
    clearGrid();
    createGrid(Math.floor(newSize));
}

createGrid(numPerSide);

clearBtn = document.getElementById("clear-grid");
clearBtn.addEventListener("click", setGrid);