const calc = () => {
    let operator = document.getElementById('operator').value;
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    if (operator === '+') {
        document.getElementById('result').innerHTML = Number(num1) + Number(num2)
    } else if (operator === '-') {
        document.getElementById('result').innerHTML = num1 - num2
    } else if (operator === '*') {
        document.getElementById('result').innerHTML = num1 * num2
    } else if (operator === '/') {
        if (num2 !== 0) {
            document.getElementById('result').innerHTML = num1 / num2
        } else {
            document.getElementById('result').innerHTML = 'Error: Division by zero';
        }
    } else {
        document.getElementById('result').innerHTML = 'Error: Invalid operator';
    }
}
