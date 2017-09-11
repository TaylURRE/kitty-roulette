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

/*jslint devel: true */

var beginScenario = ["Bubbles, is on the brink of a break down(kicking kitty litter everywhere)",
        "Fluffy, is threatening to spray the place up", "Jinx, wants to bite every customer in the place"];

function generateRandomNumber(numberRange) {
    "use strict";
    if (typeof numberRange === "number") {
        return Math.floor(Math.random() * numberRange - 1);
    }
}

alert("You're the {assign a task} Manager 2 Lives Barista 3 Lives Owner 1 Life of your local cat cafe, and the health inspector is visiting in 5mins. Your kittys are aware of the impending visit and all hell breaks loose!");
alert("The ring leader, " + beginScenario[generateRandomNumber(beginScenario.length)]);
