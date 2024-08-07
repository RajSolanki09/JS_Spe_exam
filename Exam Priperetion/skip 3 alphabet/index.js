const skipAlphabets = ()=> {
    let input = document.getElementById("num").value;
    let result = "";

    for (let i = 0; i < input.length; i++) {
        if ((i + 1) % 3 !== 0) {
            result += input[i];
        }
    }

    document.getElementById("result").innerText = "Result: " + result;
}