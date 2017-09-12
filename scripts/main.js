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
Scenarios pulled from https://www.buzzfeed.com/lorynbrantz/16-hilarious-cat-stories-that-prove-cats-are-the-weirdest?utm_term=.jl5xbz4Jw#.qhQqDM2Oo

feralCat.name extends the there one claw and drags it across there throat to signal the game will be over soon.
They play five finger fillet with their sharpest claw and your fingers. You are shaking and afraid of the outcome this might be it for you...

feralCat.name starts to look at you pleadingly, paces around, and meows insistently. Your ears begin to curdle, its a horrible sound...

feralCat.name farts like a grown man. feralCat.name calls it death bye 1000 litter boxes...the smell chokes your and causes your right eye to twitch...

feralCat.name pulls a Big RED button from their poofy coat while they look dead into your eyes they press the button. A coil from the $5000 espresso machine pops out...

feralCat.name licks your hand and eyeballs unaware of if your are immune to TOXOPLASMOSIS turns out that you aren't

*/
/*jslint devel: true */
/*global document: false */


var catNames = ["Bubbles Cat", "Chuckles Cat", "Bob Cat", "Natasha Cat", "Boris Cat", "Fluffy Cat", "Smelly Cat" ];
var beginScenario = [", is on the brink of kicking kitty litter everywhere", ", is buzzed up on Cat Nip and saying she will poo in all the shoes",
            ", is threatening to spray the place up", ", wants to bite every customer in the place", " informs you they will steal thumbtacks from corkboards and put them all the shoes when we're not looking."];
var playScenario = ["extends one claw and drags it across their throat to signal the game will be over soon. They play five finger fillet with their sharpest claw and your fingers. You are shaking and afraid of the outcome this might be it for you...",
                    "starts to look at you pleadingly, paces around, and meows insistently. Your ears begin to curdle, its a horrible sound...",
                    "farts like a grown man. They call it death by 1000 litter boxes...the smell chokes your and causes your right eye to twitch...",
                    "pulls a Big RED button from their poofy coat while they look dead into your eyes they press the button. A coil from the $5000 espresso machine pops out and flings towards you...",
                    "licks your hand and eyeballs unaware of if your are immune to TOXOPLASMOSIS turns out that you aren't"];
function generateRandomNumber(numberRange) {
    "use strict";
    if (typeof numberRange === "number") {
        return Math.floor(Math.random() * (numberRange - 1));
    }
}

function getName() {
    "use strict";
    var name = prompt("What's your name?");
    if (!name) {
        name = prompt("I missed that, what should we call you?");
        if (!name) {
            name = "Princess Buttercup";
        }
    }
    return name;
}
var round = 0;
var playerOne = {
        name: getName(),
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
function addToPage(item, message) {
    "use strict";
    document.getElementById(item).innerHTML = message;
}
function nextPlay(currentPlayScenario) {
    "use strict";
    var olay = document.getElementById("overlay");
    if (round <= 5 && round > 0) {
        addToPage("nextButton", "Next Play");
        if (playerOne.lives === 0) {
            olay.className = "overlay";
            addToPage("outcome", feralCat.name + " signals for the kitties to demolish the cafe...Cuddles Cat gets you an espresso, some antibotics and a Newspaper to start your job search...You Lose!");
        } else if (round === 5) {
            addToPage("outcome", "But you Win the Game!" + feralCat.name + " takes a big yawn and proceeds to the scratching post, they get a few good scratches out and curls up by the window...Well Played Human.");
            olay.className = "overlay";
        } else {
            addToPage("outcome", "but you some how you survive and are ready to take on the next round!");
            console.log("You can continue to live");
        }
    } else if (round > 5) {
        addToPage("outcome", "Game OVER");

    }
    addToPage("popBox", "<p>" + currentPlayScenario + "</p>");
}

function updateScores() {
    'use strict';
    // document.getElementById("playerOneScore").innerHTML = playerOne.name + " Score: " + playerOne.lives + "</br>Skips Left: " + playerOne.skip + "Round:" + round;
    addToPage("playerOneScore", playerOne.name + "'s Score: " + playerOne.lives + "</br> Round:" + round);
}

nextPlay("<p>" + playerOne.name + ", you're the Manager of your local cat cafe, Catopia, and the health inspector is visiting today. Your kittys are aware of the impending visit and all hell breaks loose!</p>" +
          "<p>The ring leader, " + feralCat.name + " " + beginScenario[generateRandomNumber(beginScenario.length)] + " causing a true Catastrophe.</p>" +
          "<p>" + feralCat.name + ", Informs you the only way to save your cafe is to beat them in a game of Kitty Roulette</p>" +
          "<p>Normally they play Kitty Roulette with 9 lives but because of your feeble human body they are only giving you <b>3 Lives</b></p><p>" +
          feralCat.name + " will put you through a series or random situations known to cause pain to humans. If you survive <b>5 Rounds</b> unharmed you Win...If you don't you will meet your demise and lose your job </p>", 0);


document.getElementById("nextButton").onclick = function () {
    'use strict';
    //generates a number between 0 and 2
    var randomNum = generateRandomNumber(3),
    //stops the same story from generating
        currentScenario = playScenario.splice(generateRandomNumber(playScenario.length), 1);
    round += 1;
    if (randomNum === 0) {
        playerOne.lives -= 1;
        addToPage("pointUpdate", "You lost a life!");
    } else { addToPage("pointUpdate", ""); }
    nextPlay(feralCat.name + " " + currentScenario);
    updateScores();
};
