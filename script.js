const drawingPadDiv = document.getElementById("drawing-pad");

//create and add attirbutes to divs for drawing
function createDivsForDrawing() {
    //create
    const newDiv = document.createElement("div");
    const divArray = [];
    for(i = 1; i <= 16; i++){
        const newDiv = document.createElement("div");
        for(j = 1; j <= 16; j++){
            const squareDiv = document.createElement("div");
            newDiv.appendChild(squareDiv);
            squareDiv.setAttribute("class", "square");
        }
        drawingPadDiv.appendChild(newDiv);
        //add attributes
        newDiv.setAttribute("class" , "grid-basis");
    }
}
createDivsForDrawing()

//declare all square elements globally
const squareDivs = document.getElementsByClassName("square");
const squareDivsArray = Array.from(squareDivs);

function addHoverFunctionality(){
    squareDivsArray.forEach((element) => {
        element.addEventListener('mouseover', ((e) => {
            e.target.style.backgroundColor = "#FFC0CB"
        }))
    })
}
addHoverFunctionality()