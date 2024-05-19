// Get the display element
const display = document.getElementById('display');

// Function to update the display
function updateDisplay(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character from the display
function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

// Function to update the display
function updateDisplay(value) {
    if (value === '%') {
        // Convert the percentage to its decimal representation and update the display
        display.value = parseFloat(display.value) / 100;
    } else {
        // For other values, simply append them to the display
        display.value += value;
    }
}

// Function to calculate the result
function calculate() {
    // Evaluate the expression in the display and update the display with the result
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}