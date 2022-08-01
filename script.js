const drawingPadDiv = document.getElementById("drawing-pad");

//create and add attirbutes to divs for drawing
function createDivsForDrawing() {
    //create
    const newDiv = document.createElement("div");
    const divArray = [];
    for(i = 1; i <= 256; i++){
        const newDiv = document.createElement("div");
        drawingPadDiv.appendChild(newDiv);
        //add attributes
        newDiv.setAttribute("class" , "sqare");
    }
   

}
createDivsForDrawing()