const findDigit= ()=>{
    let num = document.getElementById("input").value;

    digit = num.length
    document.getElementById("result").innerHTML = ` The length of ${num} is ${digit}`;
}