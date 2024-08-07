const table = () => {
    let number = document.getElementById("input").value;
    let output = ""

    for (let i = 1; i <= 10; i++) {
        output += number + " X " + i + " = " + (number * i) + "<br>";
    }
    
    document.getElementById("result").innerHTML = output;
}