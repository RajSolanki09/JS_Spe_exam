const convertToFahrenheit = () => {

    let celsius = parseFloat(document.getElementById("celsiusInput").value);

    let fahrenheit = (celsius * 9 / 5) + 32;
    
    document.getElementById("result").innerText = celsius + "°C is " + fahrenheit + "°F.";
}