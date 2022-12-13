// this is the beta version of main module free


// navbar visibility function
const renderNavbar = () => {
   let navbarToggle = document.getElementById('navbar');
   let settingsButton = document.getElementById('settings');
   let closeButton = document.getElementById('close');

   settingsButton.onclick = () => { 
      navbarToggle.style.visibility = 'visible';
      settingsButton.style.visibility = 'hidden';
      closeButton.style.visibility = 'visible';
   }

   closeButton.onclick = () => {
      navbarToggle.style.visibility = 'hidden';
      settingsButton.style.visibility = 'visible';
      closeButton.style.visibility = 'hidden';
   }
};

// timer feature
const chooseTimeAmount = (option) => {
    let time;
    let option = document.getElementById('timer-seconds');

    switch (option.value) {
        case 'thirty':
            return time = 30;
            break;
        case 'forty-five':
            return time = 45;
            break;
        case 'sixty':
            return time = 60;
            break;
        case 'ninety':
            return time = 90;
            break;
        case 'hundred-twenty':
            return time = 120;
            break;
        default:
            return time = 30;
            break;
    }
};

const getTimeDigits = (time) => {
    let secondsArray = [];
    secondsArray.push(time);
    if (time <= 0) {
        return secondsArray;
    }
    getTimeDigits(--time);
};

const visualTimer = (time) => {
    let timerField = document.getElementById('timer');

    timerField.innerHTML = time + 's';
};

const countdownTimer = (time, visual) => {
    let interval = 1000; // ms
    let expected = Date.now() + interval;
    let error = 'Timer not working!'

    let timeStep = () => {
        let dt = Date.now() - expected
        if (dt > interval) {
            return error;
        }
        for (let i = 0; i <= time.length; i++) {
            visual(time[i]);            
        }
        expected += interval;
        setTimeout(timeStep, Math.max(0, interval - dt));
    }

    setTimeout(timeStep, interval);
};