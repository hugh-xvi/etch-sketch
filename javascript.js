const button = document.createElement('button');
button.textContent = "Change Grid Size";
document.body.insertBefore(button, document.body.firstChild); //inside the body, insert the button before the first child
button.addEventListener('click', changeGridSize); //click to call change size function

const container = document.querySelector('.container');
let gridSize = 16;
createGrid(gridSize);

function func() {
    this.setAttribute("style", "background-color: red"); //hover effect for color
    
}
//let amount=size*size
function createGrid(size) {
    container.innerHTML = ''; //clears grid
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`; //create grid
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < size*size; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        div.addEventListener('mouseover', func, false);
    }
}
function changeGridSize() {
    let newSize = prompt('Enter the number of squares (max: 100):');
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }
    gridSize = newSize;
    createGrid(gridSize);
}
