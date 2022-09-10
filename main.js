// Lottery Simulation App

var drawnLotteryTicket = []
// const ball1 = document.getElementById('ball1');
// const ball2 = document.getElementById('ball2');
// const ball3 = document.getElementById('ball3');
// const ball4 = document.getElementById('ball4');
// const ball5 = document.getElementById('ball5');
// const ball6 = document.getElementById('ball6');
// const btn = document.getElementById('btn');

// Function that picks 6 random numbers between 1-45.
function getRandomNumber(min, max) {
    let range = max - min + 1; // gets the range between min and max and adds one for inclusiveness
    let generateNumber = Math.random() * range; // 0-1 * range -> random number in decimal format
    let result = Math.floor(generateNumber) + min; // decimal -> whole, adding min is inclusive of max range
    return result;
}

// function creates an array, while theres not six numbers in array -> draw more numbers
// When 6 numbers is in array, return the array
// New numbers created from emtpy array at beginning of the fuction
function generateLotteryTicket() {
    drawnLotteryTicket = []
    
    while (drawnLotteryTicket.length != 6) {
        drawnLotteryTicket.push(getRandomNumber(1,44));
    }
    if (drawnLotteryTicket.length == 6) {
        return drawnLotteryTicket;  
    }
}
// Creating a function that is called on button press in index.html and gets uers input from fields
function getUserTicket() {
    let userTicket = []

    const ball1 = document.getElementById('ball1').value;
    const ball2 = document.getElementById('ball2').value;
    const ball3 = document.getElementById('ball3').value;
    const ball4 = document.getElementById('ball4').value;
    const ball5 = document.getElementById('ball5').value;
    const ball6 = document.getElementById('ball6').value;

    // Pushing values from the input fields to an array in numeric format
    userTicket.push(
        Number(ball1),
        Number(ball2),
        Number(ball3),
        Number(ball4),
        Number(ball5),
        Number(ball6)
        )

    // Set local storage for user's lottery number picks
    localStorage.setItem('ball1', ball1);
    localStorage.setItem('ball2', ball2);
    localStorage.setItem('ball3', ball3);
    localStorage.setItem('ball4', ball4);
    localStorage.setItem('ball5', ball5);
    localStorage.setItem('ball6', ball6);
    
    function compareTickets() {
        while (userTicket != drawnLotteryTicket) {
            generateLotteryTicket();
            console.log('user ticket was:', userTicket, 'winning ticket was: ', drawnLotteryTicket);
        }
        if (userTicket == drawnLotteryTicket) {
            console.log("Winner!");
        }
    }

    // Reset the lottery ball form input after each press of the button
    //document.getElementById("lottery-form").reset(); 
    compareTickets();
}

// Compare user's ticket in local storage to newly generated ticket from array
