const chooseTimeAmount = () => {
    let time;
    let option = document.getElementById('timer-seconds');

    switch (option.value) {
        case 'thirty':
            time = 30;
            return time;
            break;
        case 'forty-five':
            time = 45;
            return time;
            break;
        case 'sixty':
            time = 60;
            return time;
            break;
        case 'ninety':
            time = 90;
            return time;
            break;
        case 'hundred-twenty':
            time = 120;
            return time;
            break;
        default:
            time = 30;
            return time;
            break;
    }
};