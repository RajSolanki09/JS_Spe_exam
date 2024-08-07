function calculateSum() {
    var number = document.getElementById("num").value;
    if (number.length == 0) {
        document.getElementById("result").innerText = "Please enter a number.";
        return;
    }

    var firstDigit, lastDigit;
    
    for (var i = 0; i < number.length; i++) {
        if (i === 0) {
            firstDigit = parseInt(number[i]);
        }
        if (i === number.length - 1) {
            lastDigit = parseInt(number[i]);
        }
    }

    var sum = firstDigit + lastDigit;
    document.getElementById("result").innerText = "The sum of the first and last digit is: " + sum;
}