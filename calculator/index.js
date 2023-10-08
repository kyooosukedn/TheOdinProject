const display = document.getElementById('display'); 

function appendToDisplay(expression) {
    display.value += expression;
}

function clearDisplay() {
    display.value = '';
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

function calculate() {
    try {
        const expression = display.value;
        const operators = ['+', '-', '*', '/'];
        let operator;

        for (const op of operators) {
            if (expression.includes(op)) {
                operator = op;           
            }
        }

        if (operator) {
            const [operand1, operand2] = expression.split(operator);

            const x = parseFloat(operand1);
            const y = parseFloat(operand2);

            if (!isNaN(x) && !isNaN(x)) {
                const result = operate(x, y, operator);
                display.value = result;
            } else {
                display.value = 'Invalid input';
            }
        } else {
            display.value = 'Invalid input';
        }
    } catch (err) {
        display.value = 'Error';
    }
}


