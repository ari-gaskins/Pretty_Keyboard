// countdown timer module

// test array
let secondsArray = [];

// function that takes amount of time in seconds and 
// counts down recursively, stopping at 0.
const countdown = (s) => {
    secondsArray.push(s);
    if (s <= 0) {
        return;
    } 
    countdown(s-1);
}

// test timer
// countdown(30);

// test iteration
// secondsArray.forEach((elem) => console.log(elem));

export {secondsArray, countdown};