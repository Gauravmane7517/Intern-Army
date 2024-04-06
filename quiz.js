const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Rome", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Stephen King", "J.K. Rowling", "Jane Austen"],
        answer: "Harper Lee"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "NaCl"],
        answer: "H2O"
    }
];

const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const submitButton = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result-container');
const scoreDisplay = document.getElementById('score');

let currentQuestion = 0;
let score = 0;

// Load question
function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionContainer.innerHTML = `<h3>${currentQuizData.question}</h3>`;
    currentQuizData.options.forEach(option => {
        questionContainer.innerHTML += `<input type="radio" name="answer" value="${option}">${option}<br>`;
    });
}

// Load initial question
loadQuestion();

// Event listener for submit button
submitButton.addEventListener('click', () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
    if (selectedAnswer === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

// Show result
function showResult() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreDisplay.innerText = `You scored ${score} out of ${quizData.length}.`;
}
