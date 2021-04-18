var currentQuestion = 0;
var score = 0;
// var totQuestions = questions.length;
var questions = [{
    "question": "What does CSS stand for ?",
    "option1": "Colorful Style Sheets",
    "option2": "Cascading Style Sheets",
    "option3": "Creative Style Sheets",
    "option4": "Computer Style Sheets",
    "answer": "2"
}, {
    //     "question": "What is the correct HTML for referring to an external style sheet ?",
    //     "option1": "<link rel="stylesheet" type="text / css" href="mystyle.css">",
    //     "option2": "<stylesheet>mystylesheet.css</stylesheet>",
    //     "option3": "<style src="mystyle.css">",
    //     "option4": "<div> stylesheet </div>",
    //     "answer": "1"
    // }, {
    "question": "How many types of heading tags does HTML contain ?",
    "option1": "4",
    "option2": "5",
    "option3": "2",
    "option4": "6",
    "answer": "4"

}, {
    "question": "Where is the correct place to insert a JavaScript?",
    "option1": "The <footer> section.",
    "option2": "The <head> section.",
    "option3": "both the <head> and <body> section.",
    "option4": "The <body> section",
    "answer": "4"
}, {
    "question": "How do you add a comment in JavaScript?",
    "option1": "*//",
    "option2": "!--",
    "option3": "//",
    "option4": "//*",
    "answer": "3"
}]
var totQuestions = questions.length.opt1, opt2, opt3, opt4;
var totalQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCount = document.getElementById('result');

function loadQuestion(questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

function loadNextQuestion() {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if (!selectedOption) {
        alert('Please select your answer');
        return;
    }
    var answer = selectedOption.value;
    if (questions[currentQuestion].answer == answer) {
        score += 10;
    }
    selectedOption.checked = false;
    currentQuestion++;

    if (currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';

    }
    if (currentQuestion == totalQuestions);
    container.style.display = 'none';
    resultCount.style.display = '';
    resultCount.textContent = 'Your Score: ' + score;
    return;

}

loadQuestion(currentQuestion);
// }

// loadQuestion(currentQuestion);
document.addEventListener('DOMContentLoaded', () => {
    const timeLeftDisplay = document.querySelector('#time-left')
    const startBtn = document.querySelector('#start-button')
    timeLeft = 30

    function countDown() {
        setInterval(funtion());
            if(timeLeft <= 0) {
              clearInterval(timeLeft = 0)  
            }
        timeLeftDisplay.innerHTML = timeLeft
        timeLeft -=1
    }; 1000;

 startBtn.addEventListener('click', countDown)
 
})
