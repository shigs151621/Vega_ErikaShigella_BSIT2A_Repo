var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready!, Bomba!, Na! 🧨 (Enter number 0-6");

    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!")
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert("Hit! 🎯");

            if (hits == 3) {
                isSunk = true;
                alert("Latiberd way naigo! 😒😒")
            }
    } else {
        alert("Way naigo, Boss! 🤦‍♂️")
    }
}
}

var stats = "You sank my battleship at: " + guesses + "guesses" + "with the accuracy of: " + (3 / guesses);

alert(stats);