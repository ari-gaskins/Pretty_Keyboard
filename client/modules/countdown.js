// countdown timer module

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