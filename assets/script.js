let BegB = document.querySelector('#goOval')
let timeEl = document.querySelector('#time')
let timerSeconds = 35;
let start = document.querySelector('#start')
let question1 = document.querySelector('#question1')
let question2 = document.querySelector('#question2')
let question3 = document.querySelector('#question3')
let question4 = document.querySelector('#question4')
let question5 = document.querySelector('#question5')
let right = 0;
let gameOver = document.querySelector('#gameOver')
let endingP = document.querySelector('.endingP1')
let timerVar;

function setTime() {
   timerSeconds --;
   timeEl.textContent = timerSeconds
   if(timerSeconds <= 0) {
       endGame();
   }
    };



function startQuiz() {
    timerVar = setInterval(setTime, 1000);
    start.classList.add("hidden");
    question1.classList.remove("hidden");
}


BegB.addEventListener('click', startQuiz);

function questionCheck1(correct) {
    if (correct) {
        alert("Correct!");
        right++;
        question1.classList.add("hidden");
        question2.classList.remove("hidden");
    }
    else {
        alert("Incorrect")
        timerSeconds--;
        timerSeconds--;
        timerSeconds--;
        timerSeconds--;
        timerSeconds--;
        question1.classList.add("hidden");
        question2.classList.remove("hidden");
    }
}


function questionCheck2(correct) {
    if (correct) {
        alert("Correct!");
        right++;
        question2.classList.add("hidden")
        question3.classList.remove("hidden");
}
else {
    alert("Incorrect")
    timerSeconds--;
    timerSeconds--;
    timerSeconds--;
    timerSeconds--;
    timerSeconds--;
    question2.classList.add("hidden");
    question3.classList.remove("hidden");
}
}

function questionCheck3(correct) {
    if (correct) {
        alert("Correct!");
        right++;
        question3.classList.add("hidden")
        question4.classList.remove("hidden");
}
else {
    alert("Incorrect")
    timerSeconds--;
    timerSeconds--;
    timerSeconds--;
    timerSeconds--;
    timerSeconds--;
    question3.classList.add("hidden");
    question4.classList.remove("hidden");
}
}

function questionCheck4(correct) {
    if (correct) {
        alert("Correct!");
        right++;
        question4.classList.add("hidden")
        question5.classList.remove("hidden");
}
else {
    alert("Incorrect")
    timerSeconds--;
    timerSeconds--;
    timerSeconds--;
    timerSeconds--;
    timerSeconds--;
    question4.classList.add("hidden");
    question5.classList.remove("hidden");
}
}

function questionCheck5(correct) {
    if (correct) {
        alert("Correct!");
        right++;
        endGame();
        
}
else {
    alert("Incorrect")
    timerSeconds--;
    timerSeconds--;
    timerSeconds--;
    timerSeconds--;
    timerSeconds--;
    endGame();
}
}
function endGame() {
    question1.classList.add("hidden");
    question2.classList.add("hidden");
    question3.classList.add("hidden");
    question4.classList.add("hidden");
    question5.classList.add("hidden");
    gameOver.classList.remove("hidden");

    clearInterval(timerVar);

    gameOver.classList.add('end')

    if(gameOver.classList === "end") {
        let initialsEntry = prompt('Declare your name');
       let entry = document.createElement('p');
        entry.innerHTML = initialsEntry
        endingP1.appendChild(entry);
    }
}





// for initials page
// prompt
//somewhere in the html have a spot that says game over 
//highscores and initials into local storage 
//high score is variable "right"
//addEventListener to submit button that leads to local storage of init and score 
//seperate html for highscores page 
