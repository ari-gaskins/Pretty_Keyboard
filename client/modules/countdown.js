// countdown timer module

export const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

export const countdown = (seconds) => {
    let secondsArray = [];
    for (let i = seconds; i <= 0; i -= 1) {
        secondsArray.push(i);
    }
    return secondsArray;
}

export const chooseTimeAmount = (option) => {
    let thirtySeconds = 30;
    let fortyFiveSeconds = 45;
    let sixtySeconds = 60;
    let ninetySeconds = 90;
    let hundredTwentySeconds = 120;

    switch (option.value) {
        case 'thirty':
            return thirtySeconds;
            break;
        case 'forty-five':
            return fortyFiveSeconds;
            break;
        case 'sixty':
            return sixtySeconds;
            break;
        case 'ninety':
            return ninetySeconds;
            break;
        case 'hundred-twenty':
            return hundredTwentySeconds;
            break;
        default:
            return thirtySeconds;
            break;
    }
}