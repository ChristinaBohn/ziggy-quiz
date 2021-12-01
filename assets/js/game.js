// Timer
var timeEl = document.getElementById("timer");
var countdownEl = document.getElementById("countdown");
var startButton = document.getElementById("startButton");
var questionsEl = document.getElementById('questions');
var welcomeCard = document.getElementById('welcome')
var secondsLeft = 60;
var questionPointer = 0;
var answerBox = document.querySelector('.answer-box')
var submitBtn = document.getElementById('submit-btn')

// Timer
var timerInterval;

function startGame() {
  // Sets interval in variable
  questionsEl.classList = 'question-card'
  welcomeCard.setAttribute('class', 'hide')

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
  loadQuestion()
}
// loadQuestion & hide welcome
//     var welcomeCard = document.getElementById("welcome");
//     welcomeCard.classList.add('hide');    
//     loadQuestion();
// }



function loadQuestion() {
    var currentQuestion = document.getElementById("questionText");
    currentQuestion.textContent = questionBank[questionPointer].question;
    var answerButtons = document.getElementsByClassName("answerButtons");
    answerBox.innerHTML = '';
    questionBank[questionPointer].multipleChoiceOptions.forEach(function(multipleChoiceOption, i) {
        var choiceBtn = document.createElement('button');
        choiceBtn.setAttribute('class', 'answerButtons');
        if(questionBank[questionPointer].correct == i) {
            choiceBtn.setAttribute('value', true)
            choiceBtn.textContent =  i + 1 + '. ' + multipleChoiceOption;
        } else {
            choiceBtn.setAttribute('value', false);
            choiceBtn.textContent =  i + 1 + '. ' + multipleChoiceOption;
        }
        

        choiceBtn.onclick = answerQuestion;
        answerBox.appendChild(choiceBtn)
    })
}

startButton.addEventListener('click', startGame);

// add event listener to buttons and check if true (data-answer)

// record and save to leaderboard

// Function to create and append colorsplosion image
//  CHANGE THIS TO END GAME
// function sendMessage() {
//   timeEl.textContent = " ";
//   var imgEl = document.createElement("img");
//   imgEl.setAttribute("src", "images/image_1.jpg");
//   countdownEl.appendChild(imgEl);

// }




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
    },    
    {
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


function nextQuestion() {
    questionPointer++;
    // Display
}

function answerQuestion() {
    var currentQuestion = questions[questionPointer];
    if(this.value == "true") {
        console.log('correct')
    } else if(this.value == 'false') {
        secondsLeft -= 15;
        if(secondsLeft < 0) {
            secondsLeft = 0;
        }

        timerEl = secondsLeft;
        console.log('incorrect')
    }

    questionPointer++;
    if(questionPointer === questionBank.length) {
        quizOver()
    } else {
        loadQuestion();
    }
}

function quizOver() {
    clearInterval(timerInterval);

    var highscoreForm = document.getElementById('highscoreForm')
    highscoreForm.removeAttribute('class');
    questionsEl.setAttribute('class', 'hide');
    var finalScore = document.getElementById('final-score');
    finalScore.textContent=secondsLeft;
}

function saveHighscore () {
    var initials = document.getElementById('initials').value.trim();
    if(initials !== '') {
        var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
        var newScore = {
            score: secondsLeft,
            initials: initials
        }
        highscores.push(newScore)
        window.localStorage.setItem('highscores', JSON.stringify(highscores));
        // window.location.href = 'highscores.html'
    }
}

submitBtn.onclick = saveHighscore;