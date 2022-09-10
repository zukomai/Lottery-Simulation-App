// Lottery Simulation App



// Function that picks 6 random numbers between 1-45.
function getRandomNumber(min, max) {
    let range = max - min + 1; // gets the range between min and max and adds one for inclusiveness
    let generateNumber = Math.random() * range; // 0-1 * range -> random number in decimal format
    let result = Math.floor(generateNumber) + min; // decimal -> whole, adding min is inclusive of max range
    return result;
}

function generateLotteryTicket() {
    let drawnLotteryTicket = []
    
    while (drawnLotteryTicket.length != 6) {
        drawnLotteryTicket.push(getRandomNumber(1,44));
    }
    if (drawnLotteryTicket.length == 6) {
        return drawnLotteryTicket;  
    }
}

