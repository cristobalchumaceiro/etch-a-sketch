const sketchArea = document.querySelector("#sketchArea")
const modeSelection = document.querySelectorAll("input[type=radio]")

//function to create grid of divs, nested loops with initial starting point of 16 x 16

createPad(16)

function createPad(x) {
    for (let i = 0; i < x; i++) {
        let row = document.createElement("div")
        row.id = "row"
        sketchArea.appendChild(row)
        for (y = 0; y < x; y++) {
            let pixel = document.createElement("div")
            pixel.id = "pixel"
            pixel.addEventListener("mouseover", paintSquares)
            row.appendChild(pixel)
        }
    }
}

// button to clear grid and initialise new one based on user input

const btn = document.querySelector("#newPad")
btn.addEventListener("click", newPad)

function newPad() {
    x = prompt("Input the number of squares per side for your new grid")
    while (x != null) {
        if (x >= 1 && x <= 100 && Number.isInteger(Number(x))) {
            sketchArea.replaceChildren()
            createPad(x)
            return
        }
        x = prompt("Please input a whole number between 1 and 100")
    }
}

// parent function checks for current mode selection and runs the corresponding function

function paintSquares(e) {
    for (let i = 0; i < modeSelection.length; i++) {
        if (modeSelection[i].checked) {
            let mode = modeSelection[i].value
            if (mode === "colourise") {
                colouriseMode(e)
            }
            else if (mode === "opacity"){
                opacityMode(e)
            }
            else normalMode(e)
        }
    } 
}

// functions for each mode option for etch-a-sketch

function normalMode(e) {
    e.target.style.opacity = ""
    e.target.style.backgroundColor = "black"
}

function colouriseMode(e) {
    e.target.style.opacity = ""
    e.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16)
}

function opacityMode(e) {
    let currentOpacity = parseFloat(e.target.style.opacity) || 0
    if (currentOpacity < 1) {
        currentOpacity += 0.1
        e.target.style.opacity = currentOpacity
    }
    e.target.style.backgroundColor = "black"
}
