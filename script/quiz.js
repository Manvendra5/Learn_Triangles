const quizForm = document.querySelector('.quiz-form');
const submitButton = document.querySelector('#submit-form-btn');
const showScore = document.querySelector('#show-score');

const answers = ["Equilateral Triangle", "Isosceles triangle", "Equal", "60", "Hypotenuse", "SSA", "50", "Scalene", "Altitude", "90"];

function calculateScore() {
    var score = 0;
    var index = 0;
    var questionsAnswered = 0;
    const formData = new FormData(quizForm);
    
    for (let selectedEntry of formData.values()) {
        questionsAnswered = questionsAnswered + 1;
        if (selectedEntry === answers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    if (questionsAnswered !== answers.length) {
        showScore.innerText = "First answer all the questions then Submit !";
    }
    else{
        showScore.innerText = `Your Score is ${score}`;
    }
}


submitButton.addEventListener("click", calculateScore);