const sideInput =document.querySelectorAll('.side-input');
const calculateButton =document.querySelector('#btn-calculate');
const outputMessage = document.querySelector('#output');

function showOutput(msg) {
    outputMessage.style.display = "block";
    outputMessage.innerText = msg;
}

function calculateSquareRoot(base, perpendicular) {
    const sumOfSqaures = base*base + perpendicular*perpendicular;
    const sqaureRoot = Math.sqrt(sumOfSqaures);
    return sqaureRoot;
}

function calculateHypotenuse () {
    const base = Number(sideInput[0].value);
    const perpendicular = Number(sideInput[1].value);
    const hypotenuse = calculateSquareRoot(base, perpendicular);

    if (base > 0 && perpendicular > 0) {
        showOutput(`Hypotenuse: ${hypotenuse}`);
    }
    else {
        showOutput("Invalid entry for length of sides. Also, length cannot be zero.");
    }
    
}

calculateButton.addEventListener("click", calculateHypotenuse);