const drawingPadDiv = document.getElementById("drawing-pad");
//16 cells by default but the user can change that at any given point
let numberOfCells = 16; //default value

//create and add attirbutes to divs for drawing
function createDivsForDrawing(numberOfCells) {
    const newDiv = document.createElement("div");
    drawingPadDiv.innerHTML = ""
    const divArray = [];
    let sizeOfDivs = 40 / Number(numberOfCells)
    for (i = 1; i <= numberOfCells; i++) {
        const newDiv = document.createElement("div");
        for (j = 1; j <= numberOfCells; j++) {
            const squareDiv = document.createElement("div");
            newDiv.appendChild(squareDiv);
            squareDiv.style.height = sizeOfDivs + "em";
            squareDiv.style.width = sizeOfDivs + "em";
            squareDiv.setAttribute("class", "square");
        }
        drawingPadDiv.appendChild(newDiv);
        //add attributes
        newDiv.setAttribute("class", "grid-basis");
    }

}
createDivsForDrawing(16) //declaring the function with the default value, so when the HTML loads, a 16x16 grid is generated  
//add functionality to all created divs, so they can change colors on hover;
function addHoverFunctionality() {
    const squareDivs = document.getElementsByClassName("square");
    const squareDivsArray = Array.from(squareDivs);
    squareDivsArray.forEach((element) => {
        element.addEventListener('mouseover', ((e) => {
            e.target.style.backgroundColor = generateRandomColor()
        }))
    })
}

function generateRandomColor() {
    const palette = ["#FFBC42", "#D81159", "#8f2d56", "#218380", "#73d2de"];
    const paletteLength = palette.length;
    let randomColorIndex = Math.floor(Math.random() * paletteLength);
    return palette[randomColorIndex];
  }

//next create Pop-up and edit grid measures - https://www.w3schools.com/howto/howto_js_popup_form.asp
addHoverFunctionality()
//pop-up created -> add show/hide functionality onclick;
const popUpEl = document.getElementsByClassName("pop-up")
function popUpFuncrionality() {
    const buttonEl = document.getElementsByClassName("option");
    buttonEl[0].addEventListener("click", () => {
        popUpEl[0].style = "display: block";
        submitNewGrid()
    })
}
popUpFuncrionality()
// submit new grid option and turn it into the new drawing pad
function submitNewGrid() {
    const inputEl = document.getElementById("cells-number");
    const label = document.getElementById("size-label")
    inputEl.addEventListener("mousemove", () => {
        label.textContent = inputEl.value
    })
    const confirmEl = document.getElementById("confirm")
    confirmEl.addEventListener("click", () => {
        numberOfCells = inputEl.value
        createDivsForDrawing(numberOfCells)
        addHoverFunctionality()
        //creating + adding functionality
        popUpEl[0].style = "display: none";
    })
}