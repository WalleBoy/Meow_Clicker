// Variables
let meowCount = 0;
let meowsPerClick = 1;

// DOM Elements
const meowCountElement = document.getElementById("meow-count");
const meowButton = document.getElementById("meow-button");
const upgradeButton = document.getElementById("upgrade-button");

// Click event for "Meow Button"
meowButton.addEventListener("click", () => {
    meowCount += meowsPerClick;
    updateMeowCount();
});

// Click event for "Upgrade Button"
upgradeButton.addEventListener("click", () => {
    const upgradeCost = 10;

    if (meowCount >= upgradeCost) {
        meowCount -= upgradeCost;
        meowsPerClick += 1;
        updateMeowCount();
        alert("Upgrade purchased! You now earn more meows per click.");
    } else {
        alert("Not enough meows to buy this upgrade.");
    }
});

// Function to update the displayed meow count
function updateMeowCount() {
    meowCountElement.textContent = meowCount;
}