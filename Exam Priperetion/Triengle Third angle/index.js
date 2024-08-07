function calculateThirdAngle() {
    var angle1 = parseFloat(document.getElementById("angle1").value);
    var angle2 = parseFloat(document.getElementById("angle2").value);


    if (angle1 <= 0 || angle2 <= 0 || angle1 + angle2 >= 180) {
        document.getElementById("result").innerText = "Please enter valid angles that form a triangle.";
        return;
    }

    var thirdAngle = 180 - (angle1 + angle2);
    document.getElementById("result").innerText = "The third angle is: " + thirdAngle + " degrees";
}