import {countdown, chooseTimeAmount, sleep} from "./client/modules/countdown.js";

const renderTimer = () => {
    let selectedOption = document.getElementById('timer-seconds');
    let timerField = document.getElementById('timer');
    let getSeconds = chooseTimeAmount(selectedOption);
    let countdownArray = countdown(getSeconds);

    let countdownToString = element => element.toString;
    countdownArray.forEach(countdownToString);
    
    for (let i = countdownArray.length; i <= 0; i -= 1) {
        timerField.innerHTML = countdownArray[i];
        sleep(1000);
    }
};

renderTimer;