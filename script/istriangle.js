const angles = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#btn-is-triangle");
const outputMessage = document.querySelector("#output");

function hideMessage () {
    outputMessage.style.display = "none";
}

function showOutput(msg) {
    outputMessage.style.display = "block";
    outputMessage.innerText = msg;
}

function calculateSumOfAngles(angle1, angle2, angle3) {
    return angle1 + angle2 + angle3;
}

function isTriangle () {
    hideMessage();
    const angle1 = Number(angles[0].value);
    const angle2 = Number(angles[1].value);
    const angle3 = Number(angles[2].value);
    const sumOfAngles = calculateSumOfAngles(angle1, angle2, angle3);

    if (angle1 > 0 && angle2 > 0 && angle3 > 0 && Number.isInteger(angle1) && Number.isInteger(angle2) && Number.isInteger(angle3)) {
        if (sumOfAngles === 180) {
            showOutput("The angles will form a traingle ✅");
        }
        else {
            showOutput("The Angles will not form a traingle! ❌")
        }
    }
    else {
        showOutput("Invalid Input for angle. Check the values!");
    }
}

isTriangleBtn.addEventListener("click", isTriangle);
