var startButton = document.getElementById('start-btn')
var questionDiv = $('.question');
var answerButtons = $('.answer-buttons');
var questionIndex = 0;
var currentQuestionIndex = 0;
var timer = document.getElementById('timer');
var questionCount = 0;
var questions = [
            
                {
                    title: "Commonly used data types DO NOT include:",
                    choices: ["strings", "booleans", "alerts", "numbers"],
                    answer: "alerts"
                },
                {
                    title: "The condition in an if / else statement is enclosed within ____.",
                    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
                    answer: "parentheses"
                },
                {
                    title: "Arrays in Javascript can be used to store ____.",
                    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
                    answer: "all of the above"
                },
                {
                    title: "String values must be enclosed within ____ when being assigned to variables.",
                    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
                    answer: "quotes"
                },
                {
                    title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
                    choices: ["Javascript", "terminal / bash", "for loops", "console log"],
                    answer: "console log"
                },

            ];

startButton.addEventListener('click', startGame)

function startGame(){
    startButton.classList.add('hide')
    currentQuestionIndex = 0;
    showQuestion();
    
}

function showQuestion() {
    if (questionCount < questions.length) {
        questionDiv.innerHTML = questions[questionCount].title;
}


    function setTime() {
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timer.textContent = "";
          timer.textContent = "Time: " + secondsLeft;
          if (secondsLeft <= 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
            captureUserScore();
          } 
        }, 1000);
    }}

    function captureUserScore() {
        timer.remove();
        choices.textContent = "";
      
        let initialsInput = document.createElement("input");
        let postScoreBtn = document.createElement("input");
      
        results.innerHTML = `You scored ${score} points! Enter initials: `;
        initialsInput.setAttribute("type", "text");
        postScoreBtn.setAttribute("type", "button");
        postScoreBtn.setAttribute("value", "Post My Score!");
        postScoreBtn.addEventListener("click", function (event) {
          event.preventDefault();
          let scoresArray = defineScoresArray(storedArray, emptyArray);
      
          let initials = initialsInput.value;
          let userAndScore = {
            initials: initials,
            score: score,
          };
      
          scoresArray.push(userAndScore);
          saveScores(scoresArray);
          displayAllScores();
          clearScoresBtn();
          goBackBtn();
          viewScoresBtn.remove();
        });
        results.append(initialsInput);
        results.append(postScoreBtn);
      }