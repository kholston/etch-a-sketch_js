
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
            //Get container and create div element


            divSquare = document.createElement("div");
            //Add an id and set div size
            divSquare.setAttribute("id",`div ${i + 1} , ${j + 1}`);

            divSideSize = containerWidth / divAmount;
            divSquare.style.height = `${divSideSize}` + "px";
            divSquare.style.width =  `${divSideSize}` + "px";

            divColumn.appendChild(divSquare);
        }
        
        
        container.appendChild(divColumn);
    }

    
    
}




createGrid(numPerSide);
