const sizevalue = document.getElementById("sizevalue");
const sizeslider = document.getElementById("sizeslider");
const grid = document.getElementById("grid")

let currentColor = "#333333"
let currentSize = 16;


function setCurrentSize(newSize) {
    currentSize = newSize;
}



sizeslider.onchange = (e) => changeSize(e.target.value)
sizeslider.onmousemove = (e) => updateSizeValue(e.target.value)

function updateSizeValue(value) {
    sizevalue.innerHTML = `${value} x ${value}`

}

function clearGrid() {
    grid.innerHTML = "";
}

function loadGrid() {
    clearGrid();
    setupgrid(currentSize)
}

function changeSize(value) {
    setCurrentSize(value);
    updateSizeValue(value)
    loadGrid(value)
}


let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = currentColor
}


function setupgrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridelement = document.createElement("div");
        gridelement.classList.add("griditem")
        gridelement.addEventListener("mouseover", changeColor)
        gridelement.addEventListener("mousedown", changeColor)
        grid.appendChild(gridelement)
    }
}


window.onload = () => {
    loadGrid();
}


