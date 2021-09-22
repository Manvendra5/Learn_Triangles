const sideInput = document.querySelectorAll('.side-input');
const calculateButton = document.querySelector('#btn-calculate');
const outputMessage = document.querySelector('#output');

function showOutput(msg) {
    outputMessage.style.display = "block";
    outputMessage.innerText = msg;
}

function calculateProduct(base, height) {
    const areaOfTriangle = 0.5 * base * height;
    return areaOfTriangle;
}

function calculateArea() {
    const base = Number(sideInput[0].value);
    const height = Number(sideInput[1].value);
    const areaOfTriangle = calculateProduct(base, height);

    if (base > 0 && height > 0) {
        showOutput(`Area: ${areaOfTriangle}`);
    }
    else {
        showOutput("Invalid entry for length of sides. Also, length cannot be zero.");
    }

}

calculateButton.addEventListener("click", calculateArea);