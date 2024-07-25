const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Paris", "Madrid", "Rome"],
        correctAnswer: "Paris"
    },
    // Add more questions here...
];

const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const correctAnswersContainer = document.getElementById("correct-answers");
const wrongAnswersContainer = document.getElementById("wrong-answers");
const thanksMessage = document.getElementById("thanks-message");

function buildQuiz() {
    for (let i = 0; i < questions.length; i++) {
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML = `<h3>${questions[i].question}</h3>`;
        
        for (let j = 0; j < questions[i].options.length; j++) {
            const optionInput = document.createElement("input");
            optionInput.type = "radio";
            optionInput.name = "q" + i;
            optionInput.value = questions[i].options[j];
            optionInput.id = "q" + i + "o" + j;

            const optionLabel = document.createElement("label");
            optionLabel.textContent = questions[i].options[j];
            optionLabel.htmlFor = "q" + i + "o" + j;

            questionDiv.appendChild(optionInput);
            questionDiv.appendChild(optionLabel);
        }

        quizContainer.appendChild(questionDiv);
    }
}

function submitQuiz() {
    const correctAnswers = [];
    const wrongAnswers = [];

    for (let i = 0; i < questions.length; i++) {
        const selectedOption = document.querySelector('input[name="q' + i + '"]:checked');

        if (selectedOption) {
            const userAnswer = selectedOption.value;

            if (userAnswer === questions[i].correctAnswer) {
                correctAnswers.push(i + 1);
            } else {
                wrongAnswers.push(i + 1);
            }
        }
    }

    displayResults(correctAnswers, wrongAnswers);
}

function displayResults(correctAnswers, wrongAnswers) {
    correctAnswersContainer.textContent = "Correct Answers: " + correctAnswers.length + " (" + correctAnswers.join(", ") + ")";
    wrongAnswersContainer.textContent = "Wrong Answers: " + wrongAnswers.length + " (" + wrongAnswers.join(", ") + ")";
    thanksMessage.textContent = "Thanks for attending the quiz!";
    
    resultContainer.style.display = "block";
}
function redirectToIndex() {
    window.location.href = "index.html";
}

buildQuiz();
