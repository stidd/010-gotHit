var health = 100;
var dragonStrength = 15;
var wolfStrength = 5

function attackAmount(enemyStrength) {
    //the attack will be worth a random  
    //amount of the enemyStrength plus enemyStrength... 
    //that way there is is a minimum attack amount
    return (Math.random() * enemyStrength) + enemyStrength;
}

console.log("Wolf attack: " + attackAmount(wolfStrength))
console.log("Dragon attack: " + attackAmount(dragonStrength))










// DO NOT MODIFY
function getHealth() {
    return health;
}

function setHealth(input) {
    health = input
}

module.exports = { attackAmount, gotHit, getHealth, setHealth };
