const printFibonacciSeries = () => {
    // let N = document.getElementById("input").value;
    let N = 10;
    let n1 = 0
    let n2 = 1
    let nextTerm
    for (let i = 0; i < N; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    // document.getElementById('result').innerHTML = `${N}`;
    // console.log(N);
}

let N =10
printFibonacciSeries(N)