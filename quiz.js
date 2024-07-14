function checkAnswer(){
    let correctAnswer = "4";
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    const p = document.querySelector('#feedback');
    if (userAnswer == correctAnswer){
        p.textContent = "Coreect! well done."
    } else {
        p.textContent = "That's incorrect. Try again!";
    }
}

const btn = document.getElementById('submit-answer');

btn.addEventListener('click', function(e) {
    checkAnswer();
})

