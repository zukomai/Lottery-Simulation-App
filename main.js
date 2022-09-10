// Lottery Simulation App

// Function that picks 6 random numbers between 1-45.
function pickSixNumbers() {
    var lowEnd = 1;
    var highEnd = 45;
    var arr = [];
    
    while(lowEnd <= highEnd)    {
        arr.push(lowEnd++); 
    }
}

console.log(pickSixNumbers())