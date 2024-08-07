const factorial = () => {
    let N = document.getElementById("input").value;

    let fact = 1;
    for (let i = 1; i <= N; i++) {
        fact *= i;
    }
    document.getElementById('result').innerHTML = fact;
}