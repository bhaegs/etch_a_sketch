const container = document.getElementById("container");

let defaultColor = '#fcdab7';
let defaultGidSize = 16;

let inputColorChange = document.getElementById('inputColorChange');
inputColorChange.addEventListener('input', (e) => {
    defaultColor = e.target.value;
});

function removeGrid() {
    document.getElementById('container').innerHTML = '';
}

let clearGrid = document.getElementById('clearGrid');
clearGrid.addEventListener('click', (e) => {
    location.reload();
});

let resizeGrid = document.getElementById('resizeGrid');
resizeGrid.addEventListener('input', (e) => {
    removeGrid();
    defaultGrideSize = e.target.value;
    makeGrid(defaultGrideSize, defaultGrideSize);
});

function getRandomColor () {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

let randomColorBtn = document.getElementById('randomColor');

randomColorBtn.addEventListener('click', (e) => {
    defaultColor = getRandomColor();
    inputColorChange.value = defaultColor;
});

function makeGrid(rows, cols) {
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    for (c = 0; c < (rows * cols); c++) {
        let createDiv = document.createElement('div');
        createDiv.addEventListener("mousemove", (e) => {
            e.target.style.backgroundColor = defaultColor;
        });
        container.appendChild(createDiv).className = "grid-item";
    };
};

makeGrid(defaultGidSize, defaultGidSize)