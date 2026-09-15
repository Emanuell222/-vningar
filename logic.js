let secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");
const restartButton = document.getElementById("restartButton");


guessButton.addEventListener("click", function() {

    let guess = Number(guessInput.value);

    if (guess < 1 || guess > 100) {
        message.textContent = "Skriv ett tal mellan 1 och 100.";
        return;
    }

    attempts++;

    attemptsText.textContent = attempts;

    if (guess < secretNumber) {
        message.textContent = "⬆️ För lågt! Försök igen.";
    } 
    else if (guess > secretNumber) {
        message.textContent = "⬇️ För högt! Försök igen.";
    } 
    else {
        message.textContent = "🎉 Rätt! Du klarade det på " + attempts + " försök!";
    }

});


restartButton.addEventListener("click", function() {

    secretNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    attemptsText.textContent = attempts;

    message.textContent = "Nytt tal valt! Börja gissa.";

    guessInput.value = "";

});