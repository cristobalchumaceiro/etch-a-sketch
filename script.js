sketchArea = document.querySelector("#sketchArea")

//function to create grid of divs, nested loops with initial starting point of 16 x 16

createPad(16)

function createPad(x) {
    for (i = 0; i < x; i++) {
        row = document.createElement("div")
        row.id = "row"
        sketchArea.appendChild(row)
        for (y = 0; y < x; y++) {
            pixel = document.createElement("div")
            pixel.id = "pixel"
            pixel.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = "black"
            })
            row.appendChild(pixel)
        }
    }
}

// button to clear grid and initialise new one based on user input

btn = document.querySelector("#newPad")
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
