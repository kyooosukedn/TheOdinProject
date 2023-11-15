document.addEventListener('keydown', handleKeyPress);
const display = document.getElementById('display'); 

function handleKeyPress(event) {
    key = event.key;

    if (/\d|\+|\-|\*|\/|Enter/.test(key)) {
        event.preventDefault(); 
        if (key === 'Enter') {
            calculate();
        } else {
            appendToDisplay(key);
        }
    }

    if (key === 'Backspace') {
        event.preventDefault();
        backspace();
    }

    if (key === 'Escape') {
        event.preventDefault();
        clearDisplay();
    }
}

function appendToDisplay(expression) {
    display.value += expression;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    if (display.value.length > 0) {
        display.value = display.value.slice(0, -1);
    }
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y != 0) {
        return x / y;
    } else {
        console.error('Division by zero is not allowed');
    }
}


function operate(x, y, expression) {
    let result;

    switch (expression) {
        case '+':
            result =  add(x,y);
            break;

        case '-':
            result = subtract(x,y);
            break;
        case '*':
            result = multiply(x,y);
            break;
        case '/':
            result = divide(x,y);
            break;
        default:
            break;
    }

    if (result !== undefined) {
        return result;
    }
}

// TODO: Evaluate expression properly and able to perform multiple operations (12 * 7 - 3 / 8)

function calculate() {
    try {
        const expression = display.value;
        const operators = ['+', '-', '*', '/'];
        let operator;

        for (const op of operators) {
            if (expression.includes(op)) {
                operator = op;
                break;
            }
        }

        if (operator) {
            const [operand1, operand2] = expression.split(operator);

            const x = parseFloat(operand1);
            const y = parseFloat(operand2);

            const result = operate(x, y, operator);
            display.value = result;
        } else {
            display.value = 'Invalid input';
        }
    } catch (err) {
        display.value = 'Error';
    }
}


