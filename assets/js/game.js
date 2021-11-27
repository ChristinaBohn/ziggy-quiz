// Timer
var timeEl = document.getElementById("timer");
var countdownEl = document.getElementById("countdown");
var startButton = document.getElementById("startButton");
var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remaining.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

// Function to create and append colorsplosion image
//  CHANGE THIS TO END GAME
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  countdownEl.appendChild(imgEl);

}

startButton.addEventListener('click', setTime);








var questionsEl = document.getElementById('questions');
var questions = [
    {
        question: "Which of the following is NOT one of David Bowie’s alter egos?",
        multipleChoiceOptions: [
            "The Laughing Gnome",
            "Ziggy Stardust",
            "The Thin White Duke",
            "The Groovy Space Wizard"
        ],
        correct: "The Groovy Space Wizard"
    },
    {
        question: "Which group did David Bowie found in his teens?",
        multipleChoiceOptions: [
            "The Society for the Prevention fo Cruelty to Long-Haired Men",
            "An official fan club for Elton John",
            "The Society for the Prevention of Cruelty to Animals",
            "The rock band Tin Machine"
        ],
        correct: "The Society for the Prevention fo Cruelty to Long-Haired Men"
    },
    {
        question: "What is the name of the single Bowie released in 1969, which was played over the BBC’s coverage of Apollo 11’s lunar landing and again in the Tesla Roadster Elon Musk launched into space in 2018?",
        multipleChoiceOptions: [
            "Spiders from Mars",
            "Space Oddity",
            "Rock-n-Roll Moondream",
            "Ziggy Stardust"
        ],
        correct: "Space Oddity"
    },
    {
        question: "Which animated show did David Bowie voice a character for?",
        multipleChoiceOptions: [
            "Rugrats",
            "The Simpsons",
            "Family Guy",
            "Spongebob SquarePants"
        ],
        correct: "Spongebob SquarePants"
    },    {
        question: "What name was David Bowie was born with?",
        multipleChoiceOptions: [
            "David Jones",
            "David Bowie",
            "Robert Bowie",
            "Terry David"
        ],
        correct: "David Jones"
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