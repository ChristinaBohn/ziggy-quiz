// Leaderboard
var correctAnswers = 0;
var incorrectAnswers = 0;
// target highscoreshtml list
var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];

function showHighscores() {
    for(i=0; i< highscores.length; i++) {
        var liTag = document.createElement('li')
        liTag.textContent = highscores[i].initals + '-' + highscores[i].score
        // append litag once HTML is created
    }
}

saveHighscore()