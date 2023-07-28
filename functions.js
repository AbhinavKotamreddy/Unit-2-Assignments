function diceRoller(maxInt) {
    let randomNumber = Math.floor(Math.random() * maxInt);
    return("Rolling the dice!" + "\n" + randomNumber);
}
console.log(diceRoller(13));