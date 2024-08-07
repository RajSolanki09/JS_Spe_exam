function calculateArea() {
    let radius = document.getElementById("radiusInput").value;
    let area = Math.PI * radius * radius;
    
    document.getElementById("output").innerHTML = `The area of the circle is ${area.toFixed(2)} square units.`;
}