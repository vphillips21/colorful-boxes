// Function to generate a random color
function getRandomColor() {
    // Define all possible hexadecimal digits
    const letters = '0123456789ABCDEF';
    // Start with a '#' for hex color notation
    let color = '#';
    // Generate six random digits
    for (let i = 0; i < 6; i++) {
        // Randomly select a digit and add it to the color string
        // Math.random() generates a number between 0 and 1
        // Multiplying by 16 and using Math.floor gives us a random integer between 0 and 15
        // This integer is used as an index to select a character from 'letters'
        color += letters[Math.floor(Math.random() * 16)];
    }
    // Return the generated color
    return color;
}

// Function to create a new box
function createBox() {
    const box = document.createElement('div');
    box.className = 'box';
    box.style.backgroundColor = getRandomColor();
    console.log(box.style.backgroundColor)
    return box;
}

// Get the container element
const container = document.getElementById('container');

// Add 5 boxes to the container
for (let i = 0; i < 5; i++) {
    container.appendChild(createBox());
}
