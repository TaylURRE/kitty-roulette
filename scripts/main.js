// Kitty Roulette
//
// You're the {assign a task} Manager 2 Lives Barista 3 Lives Owner 1 Life of your local cat cafe, and the health inspector is visiting in 5mins.
// Your kittys are aware of the impending visit and all hell breaks loose!
//
// The ring leader,
//
// Bubbles, is on the brink of a break down(kicking kitty litter everywhere)
// Fluffy, is threatening to spray the place up
// Jinx, wants to bite every customer in the place
//
//
// Only you can save the cafe, they challenge you to a game of kitty roulette
//
// If you win you take the place of the ring leader. You also keep your dignity and Cafe
// If you lose you will fail health inspection and loose the Cat Cafe
//
// 9 lives
//
//
// Losing Scenario
// for Now
// ScenarioNumber === 0
//
// Later
// lives === 0

// lives
// Skip
// Play
/*
Playing is when the player gets a scenario and an outcome for each play
action buttons  |play button |skip button
play button gets a random number between 0 and 10

if the number is 3 then the player looses a life.

How do you know its the end 5 rounds?

the player will get the
when the life is 0 then they lose

scenario story[]+ scenario outcome

evaluateLives(){
   if (playerOne.lives === 0){

 }
}

feralCat.name extends the there one claw and drags it across there throat to signal the game will be over soon


*/
/*jslint devel: true */
/*global document: false */


var catNames = ["Bubbles Cat", "Chuckles Cat", "Bob Cat", "Natasha Cat", "Boris Cat", "Fluffy Cat", "Smelly Cat" ];
function addToPage(item, message) {
    "use strict";
    document.getElementById(item).innerHTML = message;
}


function generateRandomNumber(numberRange) {
    "use strict";
    if (typeof numberRange === "number") {
        return Math.floor(Math.random() * (numberRange - 1));
    }
}
var round = 0;
var playerOne = {
        name: prompt("What's your name?"),
        lives: 3,
        skip: 1,
        play: true
    };
var feralCat = {
        name: catNames[generateRandomNumber(catNames.length)],
        lives: 9,
        skip: 2,
        play: false
    };

function nextPlay(currentPlay, playNum) {
    "use strict";
    if (playNum === 3 && playerOne.lives === 0) {
        addToPage("outcome", "You Lose");
    } else {
        addToPage("outcome", "What's Next");
    }
    addToPage("popBox", currentPlay + "<p>" + playNum + "</p>");
    addToPage("nextButton", "Play");
}




function updateScores() {
    'use strict';
    // document.getElementById("playerOneScore").innerHTML = playerOne.name + " Score: " + playerOne.lives + "</br>Skips Left: " + playerOne.skip + "Round:" + round;
    addToPage("playerOneScore", playerOne.name + " Score: " + playerOne.lives + "</br>Skips Left: " + playerOne.skip + "Round:" + round);
    addToPage("feralCatScore", feralCat.name + " Score: " + feralCat.lives);
}

var beginScenario = [", is on the brink of kicking kitty litter everywhere", ", is buzzed up on Cat Nip and saying she will poo in all the shoes",
            ", is threatening to spray the place up", ", wants to bite every customer in the place"];


nextPlay("<p>" + playerOne.name + ", you're the Manager of your local cat cafe, and the health inspector is visiting today. Your kittys are aware of the impending visit and all hell breaks loose!</p> <p>The ring leader, "
        + feralCat.name + " " + beginScenario[generateRandomNumber(beginScenario.length)] + " causing a true Catastrophe.</p><p> " + feralCat.name + ", Informs you the only way to save your cafe is to beat them in a game of Kitty Roulette</p>", 0);


document.getElementById("nextButton").onclick = function () {
    'use strict';
    //generates a number between 1 and 5
    var randomNum = generateRandomNumber(6);
    round += 1;
    if (randomNum === 0) {
        playerOne.lives -= 1;
    }
    nextPlay("Schwiffty", randomNum);

    updateScores();
};
// alert(playerOne.name + ", you're the Manager of your local cat cafe, and the health inspector is visiting in 5mins. Your kittys are aware of the impending visit and all hell breaks loose!");
// alert("The ring leader, " + feralCat.name + " " + beginScenario[generateRandomNumber(beginScenario.length)]);
// alert(feralCat.name + ", Informs you the only way to save your cafe is to win against them in a game of Kitty Roulette");
