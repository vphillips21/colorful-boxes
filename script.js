function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createBox() {
    const newBox = document.createElement('div');
    newBox.className = 'box';
    const color = getRandomColor();
    newBox.style.backgroundColor = color;
    console.log(`Color of the new box: ${color}`);
    return newBox;
}

// Select the container div
const container = document.getElementById('container');

// Create a new box and append it to the container
const newBox = createBox();
container.appendChild(newBox);

// Log the number of boxes
const boxes = document.getElementsByClassName('box');
console.log("Number of boxes:", boxes.length);

for (let i = 0; i < 5; i++) {
    const newBox = createBox();
    container.appendChild(newBox);
}
