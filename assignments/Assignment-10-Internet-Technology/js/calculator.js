
// Variables to store values and operations
let currentInput = '';
let previousInput = '';
let operator = '';

// Function to update the display
function updateDisplay(value) {
    $('.display-area').val(value);
}

// Event listener for button clicks
$('button').on('click', function() {
    const buttonValue = $(this).text();

    // Handle number and decimal input
    if (!isNaN(buttonValue) || buttonValue === '.') {
        currentInput += buttonValue;
        updateDisplay(currentInput);
    }

    // Handle operators
    else if (['+', '-', 'x', '/'].includes(buttonValue)) {
        operator = buttonValue;
        previousInput = currentInput;
        currentInput = '';
    }

    // Clear the display and reset inputs
    else if (buttonValue === 'C') {
        currentInput = '';
        previousInput = '';
        operator = '';
        updateDisplay('');
    }

    // Toggle between positive and negative numbers
    else if (buttonValue === '+/-') {
        currentInput = currentInput ? (-parseFloat(currentInput)).toString() : '';
        updateDisplay(currentInput);
    }

    // Convert to percentage
    else if (buttonValue === '%') {
        currentInput = currentInput ? (parseFloat(currentInput) / 100).toString() : '';
        updateDisplay(currentInput);
    }

    // Handle the equals button
    else if (buttonValue === '=') {
        let result = '';
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);

        if (!isNaN(num1) && !isNaN(num2)) {
            switch (operator) {
                case '+':
                result = num1 + num2;
                break;
                case '-':
                result = num1 - num2;
                break;
                case 'x':
                result = num1 * num2;
                break;
                case '/':
                result = num2 !== 0 ? num1 / num2 : 'Error';
                break;
            }
            updateDisplay(result);
            currentInput = result.toString();
            previousInput = '';
            operator = '';
        }
    }
});
