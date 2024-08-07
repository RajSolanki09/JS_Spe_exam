const leapYear = () =>{
    let F_year = document.getElementById('startYear')
    let L_year = document.getElementById('lastYear')

    for (let i = F_year; i <= L_year; i++) {
        if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
            console.log(i);
        }
    }
    document.getElementById('result').innerHTML = i
}