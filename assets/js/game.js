// Timer
var timeEl = document.getElementById("timer");
var countdownEl = document.getElementById("countdown");
var startButton = document.getElementById("startButton");
var secondsLeft = 60;

// Leaderboard
var correctAnswers = 0;
var incorrectAnswers = 0;
var timerInterval;

function startGame() {
  // Sets interval in variable
    timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining.";

        if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            sendMessage();
        }

    }, 1000);
// loadQuestion & hide welcome
    loadQuestion();
}

function loadQuestion() {
    var currentQuestion = document.getElementById("questionText");
    currentQuestion.textContent = questionBank[0].question;
    var answerButtons = document.getElementsByClassName("answerButtons");
    for ( var i = 0; i < answerButtons.length; i++ ) {
        answerButtons[i].textContent = questionBank[0].multipleChoiceOptions[i];

        if ( questionBank[0].correct === i ) {
            answerButtons[i].dataset.answer = true;
        }

    }
    
}


// add event listener to buttons and check if true (data-answer)

// record and save to leaderboard




// Function to create and append colorsplosion image
//  CHANGE THIS TO END GAME
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  countdownEl.appendChild(imgEl);

}

startButton.addEventListener('click', startGame);



var questionsEl = document.getElementById('questions');
var questionBank = [
    {
        question: "Which of the following is NOT one of David Bowie’s alter egos?",
        multipleChoiceOptions: [
            "The Laughing Gnome",
            "Ziggy Stardust",
            "The Thin White Duke",
            "The Groovy Space Wizard"
        ],
        correct: 3
    },
    {
        question: "Which group did David Bowie found in his teens?",
        multipleChoiceOptions: [
            "The Society for the Prevention fo Cruelty to Long-Haired Men",
            "An official fan club for Elton John",
            "The Society for the Prevention of Cruelty to Animals",
            "The rock band Tin Machine"
        ],
        correct: 0
    },
    {
        question: "What is the name of the single Bowie released in 1969, which was played over the BBC’s coverage of Apollo 11’s lunar landing and again in the Tesla Roadster Elon Musk launched into space in 2018?",
        multipleChoiceOptions: [
            "Spiders from Mars",
            "Space Oddity",
            "Rock-n-Roll Moondream",
            "Ziggy Stardust"
        ],
        correct: 1
    },
    {
        question: "Which animated show did David Bowie voice a character for?",
        multipleChoiceOptions: [
            "Rugrats",
            "The Simpsons",
            "Family Guy",
            "Spongebob SquarePants"
        ],
        correct: 3
    },    {
        question: "What name was David Bowie was born with?",
        multipleChoiceOptions: [
            "David Jones",
            "David Bowie",
            "Robert Bowie",
            "Terry David"
        ],
        correct: 0
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