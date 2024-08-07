const calculateRectangleArea = () => {
    let length = document.getElementById("lengthInput").value;
    let width = document.getElementById("widthInput").value;
    let area = length * width;

    document.getElementById('result').innerHTML = `The area of the rectangle is ${area} square units.`
}