// countdown timer module

// array read for timer output
let secondsArray = [];

// seconds to countdown from
let thirtySeconds = 30;
let fortyFiveSeconds = 45;
let sixtySeconds = 60;
let ninetySeconds = 90;
let hundredTwentySeconds = 120;



// function that takes amount of time in seconds and 
// counts down recursively, stopping at 0.
const countdown = (seconds) => {
    secondsArray.push(seconds);
    if (seconds <= 0) {
        return;
    } 
    countdown(seconds-1);
}

// test timer
// countdown(30);

// test iteration
// secondsArray.forEach((elem) => console.log(elem));

// function that handles countdown time visible or not

export {secondsArray, countdown};