var questionsEl = document.getElementById('questions');
var questions = [
    {
        question: "Q1",
        multipleChoiceOptions: [
            "wrong-answer",
            "right-answer"
        ],
        correct: "right-answer"
    }
];

var questionPointer = 0;

function nextQuestion() {
    questionPointer++;
    // Display
}

function answerQuestion(event) {

    // tells us which button was clicked
    var buttonEl = event.target;
    var answer = buttonEl.dataset.answer;

    // compare user answer to current question answer
    var currentQuestion = questions[questionPointer];
    if( answer === currentQuestion.correct ) {

    }

    console.log(answer);

    // if no questions left
        // then end game
    // else go to next question
// or if questions left, go to next question, else end game

    nextQuestion();

}

questionsEl.addEventListener( 'click', answerQuestion );