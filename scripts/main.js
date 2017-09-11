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
// Attack(Play 3 times in a row)
// Skip
// Play

/*jslint devel: true */
/*global document: false */


var catNames = ["Bubbles Cat", "Chuckles Cat", "Bob Cat", "Natasha Cat", "Boris Cat", "Fluffy Cat", "Smelly Cat" ];
function nextPlay(currentPlay) {
    "use strict";
    document.getElementById("popBox").innerHTML = currentPlay;
}

function generateRandomNumber(numberRange) {
    "use strict";
    if (typeof numberRange === "number") {
        return Math.floor(Math.random() * (numberRange - 1));
    }
}

var playerOne = {
        name: prompt("What's your name?"),
        lives: 9,
        attackCard: 2,
        skip: 1,
        play: true
    };

var feralCat = {
        name: catNames[0],
        lives: 9,
        attackCard: 1,
        skip: 2,
        play: false
    };

var beginScenario = [", is on the brink of a break down(kicking kitty litter everywhere)", ", is buzzed up on Cat Nip and saying they will poo in all the shoes",
            ", is threatening to spray the place up", ", wants to bite every customer in the place"];


nextPlay(playerOne.name + ", you're the Manager of your local cat cafe, and the health inspector is visiting in 5mins. Your kittys are aware of the impending visit and all hell breaks loose!" +
    " The ring leader, " + feralCat.name + " " + beginScenario[generateRandomNumber(beginScenario.length)]);
document.getElementById("nextButton").onclick = function () {
    'use strict';
    nextPlay("Schwiffty");
};
// alert(playerOne.name + ", you're the Manager of your local cat cafe, and the health inspector is visiting in 5mins. Your kittys are aware of the impending visit and all hell breaks loose!");
// alert("The ring leader, " + feralCat.name + " " + beginScenario[generateRandomNumber(beginScenario.length)]);
// alert(feralCat.name + ", Informs you the only way to save your cafe is to win against them in a game of Kitty Roulette");
