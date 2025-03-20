var randomloc = Math.floor(Math.random () * 5);

var location1 = randomloc;
var location2 = location1 = 1;
var location3 = location = 2;

let guess;
let hits = 0;
let guesses = 0;

var isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready!, Bomba!, Na! 🧨 (Enter number 0-6");

    if (guess == null) {
        alert("Thank you erika na delete ang ubra");
        break;
    }

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