/*jslint devel: true */
/*global document: false */

var catNames = ["Bubbles Cat", "Chuckles Cat", "Bob Cat", "Natasha Cat", "Boris Cat", "Fluffy Cat", "Smelly Cat" ];
var beginScenario = [", is on the brink of kicking kitty litter everywhere", ", is buzzed up on Cat Nip and saying they will poo in all the shoes",
            ", is threatening to spray the place up.", ", wants to bite every customer in the place", " informs you they will steal thumbtacks from corkboards and put them all the shoes when we're not looking."];
var playScenario = ["extends one claw and drags it across their throat to signal the game will be over soon. They play five finger fillet with their sharpest claw and your fingers. You are shaking and afraid of the outcome this might be it for you...",
                    "starts to look at you pleadingly, paces around, and meows insistently. Your ears begin to curdle, its a horrible sound...",
                    "farts like a grown man. They call it death by 1000 litter boxes...the smell chokes you and causes your right eye to twitch...",
                    "pulls a BIG RED button from their poofy coat while they look dead into your eyes they press the button. A coil from the $5000 espresso machine pops out and flings towards you...",
                    "licks your hand and eyeballs. The goal, TOXOPLASMOSIS, unaware of if you are immune you hope for the best as you begin to sweat..."];
function generateRandomNumber(numberRange) {
    "use strict";
    if (typeof numberRange === "number") {
        return Math.floor(Math.random() * (numberRange - 1));
    }
}

function getName() {
    "use strict";
    var name = prompt("What should we call you?");
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
    var olay = document.getElementById("overlay"),
        resetBtn = document.getElementById("resetGame");
    if (round <= 5 && round > 0) {
        addToPage("nextButton", "Next Play");
        if (playerOne.lives === 0) {
            olay.className = "overlay";
            resetBtn.className = "active";
            addToPage("outcome", feralCat.name + " signals for the kitties to demolish the cafe...Cuddles Cat gets you an espresso, some antibotics and a Newspaper to start your job search...You Lose!");
        } else if (round === 5) {
            addToPage("outcome", "But you Win the Game!" + feralCat.name + " takes a big yawn and proceeds to the scratching post, they get a few good scratches out and curls up by the window...Well Played Human.");
            olay.className = "overlay";
            resetBtn.className = "active";
        } else {
            if (playerOne.lives % 2 === 0) {
                addToPage("outcome", "but you some how you survive and are ready to take on the next round!");
            } else { addToPage("outcome", "but you can continue to live"); }
        }
    } else if (round > 5) {
        addToPage("outcome", "GAME OVER");

    }
    addToPage("popBox", "<p>" + currentPlayScenario + "</p>");
}

function updateScores() {
    'use strict';
    // document.getElementById("playerOneScore").innerHTML = playerOne.name + " Score: " + playerOne.lives + "</br>Skips Left: " + playerOne.skip + "Round:" + round;
    addToPage("playerOneScore", playerOne.name + "'s Score: " + playerOne.lives + "</br> Round:" + round);
}

nextPlay("<p>" + playerOne.name + ", you're the Manager of your local cat cafe, Catopia. The health inspector is visiting today, your kittys are made aware of the impending visit and all hell breaks loose!</p>" +
          "<p>The ring leader, " + feralCat.name + " " + beginScenario[generateRandomNumber(beginScenario.length)] + " causing a true Catastrophe.</p>" +
          "<p>" + feralCat.name + ", Informs you the only way to save your cafe is to beat them in a game of Kitty Roulette.</p>" +
          "<p>Normally they play Kitty Roulette with 9 lives but because of your feeble human body they are only giving you <b>3 Lives</b></p><p>" +
          feralCat.name + " will put you through a series of random situations known to cause pain to humans. If you survive <b>5 Rounds</b> unharmed you Win...If you don't you will meet your demise and lose your job </p>", 0);


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

document.getElementById("overlay").onclick = function () {
    'use strict';
    document.location.reload(true);
};
