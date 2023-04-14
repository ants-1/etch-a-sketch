const grid = document.getElementById("container");
const gridSizeBtn = document.getElementById("grid-size");
const colorBlackBtn = document.getElementById("black-btn");
const colorRandomBtn = document.getElementById("random-color");
const eraserBtn = document.getElementById("eraser");
const clearGridBtn = document.getElementById("clear");

gridSizeBtn.addEventListener("click", (e) => {
    let gridSize = prompt("Enter a new grid size between 1 and 64");
    if (gridSize > 0 && gridSize < 65) {
        clearGrid();
        createGrid(gridSize);
    }
});

colorBlackBtn.addEventListener("click", () => {
    colorBlack();
});

colorRandomBtn.addEventListener("click", () => {
    colorRandom();
});

eraserBtn.addEventListener("click", () => {
    eraser();
});

clearGridBtn.addEventListener("click", () => {
    reloadGrid();
});


function createGrid(x) {
    for (let row = 0; row < x; row++) {
        for (let col = 0; col < x; col++) {
            createDiv(x);
        }
    }
}

function createDiv(x) {
    const newDiv = document.createElement("div");
    newDiv.style.cssText = `
        width: ${500 / x}px;
        height: ${500 / x}px;
    `;
    colorBlack();
    newDiv.classList.add("grid");
    container.appendChild(newDiv);
}

function colorBlack() {
    grid.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "#000000";
    });
}

function colorRandom() {
    grid.addEventListener("mouseover", (e) => {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        e.target.style.backgroundColor = `#${randomColor}`;
    });
}

function eraser() {
    grid.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "#EEEEEE";
    });
}

function clearGrid() {
    grid.innerHTML = "";
}

function reloadGrid() {
    clearGrid();
    createGrid(16);
}

createGrid(16);