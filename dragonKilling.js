var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var yourDamageThisRound = Math.floor(Math.random() * 5 + 1);
var yourTotalDamage = 0;
var dragonDamageThisRound = Math.floor(Math.random() * 5 + 1);
var dragonTotalDamage = 0;

while(slaying){
    if (youHit === 1) {
    console.log("You hit the dragon and did " + yourDamageThisRound + " damage!");
        if ((yourTotalDamage+yourDamageThisRound) >= 10) {
            console.log("You did it! You slew the dragon!");
            var slaying = false
        } else {
            yourTotalDamage += yourDamageThisRound;
            yourDamageThisRound = Math.floor(Math.random() * 5 + 1);
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
    console.log("The dragon hit you and did "+dragonDamageThisRound + " damage!");
        if((dragonTotalDamage+dragonDamageThisRound) >= 10){
            console.log("Sorry, you're dead:(")
            var slaying = false
        } else {
            dragonTotalDamage += dragonDamageThisRound
            dragonDamageThisRound = Math.floor(Math.random() * 5 + 1);
            youHit = Math.floor(Math.random() * 2);
        }
    }
}
