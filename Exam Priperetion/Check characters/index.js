const check=()=>{
    let N = document.getElementById('input').value;

    if(N>='A' && N<='Z')
        {
            document.getElementById('result').innerHTML = "the whether number is uppercase !!"
        }
        else if(N>='a' && N<='z')
        {
            document.getElementById('result').innerHTML = "the whether number is lowercase !!"
        }
        else if(N>='0' && N<='9')
        {
            document.getElementById('result').innerHTML = "the whether number is digits !!"
        }
        else
        {
            document.getElementById('result').innerHTML = "the whether number is special symbol !!"
        }
}