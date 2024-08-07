const sum = () =>{
    let N = document.getElementById("input").value;
    let sum = 0;    
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    document.getElementById("result").innerHTML = `sum From 1 to ${N} is ${sum}`;
} 