const palindrome = () => {
    let num = document.getElementById("input").value;
    let orig_num = num;
    let rever_num = 0;
    let length = num.length;

    for (let i = 1; i <= length; i++) {
        let degit = num % 10;
        rever_num = rever_num * 10 + degit;
        num = parseInt(num / 10);
    }

    if(orig_num == rever_num){
        document.getElementById("result").innerHTML = "Yes"
    }
    else{
        document.getElementById("result").innerHTML = "No"
    }
}