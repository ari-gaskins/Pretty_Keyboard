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

renderNavbar();

// timer feature
const chooseTimeAmount = () => {
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

const countdownTimer = (option) => {
    let interval = 1000; // ms
    let timerField = document.getElementById('timer');
    let secondsArray = [];
    
    for (let i = option; i <= 0; i -= 1) {
        secondsArray.push(i);
    }

    setInterval(() => {
       for (let i = 0; i <= secondsArray.length; i++) {
            timerField.innerHTML = secondsArray[i] + 's';            
        } 
    }, interval);
};

const renderTimer = () => {
    let selectedOption = chooseTimeAmount();
    countdownTimer(selectedOption);
};

renderTimer();



// color change feature

// buttons
let defaultButton = document.getElementById('default');
let defaultDarkButton = document.getElementById('default-dark');
let babyBluesButton = document.getElementById('baby-blues');
let beachDayButton = document.getElementById('beach-day');
let orchidFieldButton = document.getElementById('orchid-field');
let hackermanClassicButton = document.getElementById('hackerman-classic');
let hackermanBlueButton = document.getElementById('hackerman-blue');

// styles that will be changed with buttons
let navbarElem = document.getElementById('navbar');
let bodyElem = document.body;
let typeTestElem = document.getElementById('type-test-wrapper');

// get colors from root
let root = document.querySelector(':root');
let gcs = getComputedStyle(root);

// default colors
let white = gcs.getPropertyValue('--white');
let black = gcs.getPropertyValue('--black');

// baby blues colors
let darkTeal = gcs.getPropertyValue('--darkTeal');
let teal = gcs.getPropertyValue('--teal');
let lightTeal = gcs.getPropertyValue('--lightTeal');
let babyTan = gcs.getPropertyValue('--babyTan');
let softYellow = gcs.getPropertyValue('--softYellow');

// beach day colors
// white 
let greyTan = gcs.getPropertyValue('--greyTan');
let tan = gcs.getPropertyValue('--tan');
let deepTan = gcs.getPropertyValue('--deepTan');
let deepOrange = gcs.getPropertyValue('--deepOrange');

// orchid field colors
let plum = gcs.getPropertyValue('--plum');
let orchid = gcs.getPropertyValue('--orchid');
let deepPink = gcs.getPropertyValue('--deepPink');
let cream = gcs.getPropertyValue('--cream');
let plantGreen = gcs.getPropertyValue('--plantGreen');

// hackerman classic colors
// black
let hackerGreen = gcs.getPropertyValue('--hackerGreen');

// hackerman blue colors
let hackerLightBlue = gcs.getPropertyValue('--hackerLightBlue');
let hackerDarkBlue = gcs.getPropertyValue('--hackerDarkBlue');

// CSS values
let backgroundColor = 'background-color';
let color = 'color';
let borderColor = 'border-color';

defaultButton.onclick = () => {
    navbarElem.style.setProperty(backgroundColor, black);
    navbarElem.style.setProperty(backgroundColor, black);
    bodyElem.style.setProperty(backgroundColor, white);
    bodyElem.style.setProperty(color, black);
    typeTestElem.style.setProperty(color, black);
}

defaultDarkButton.onclick = () => {
    navbarElem.style.setProperty(backgroundColor, white);
    navbarElem.style.setProperty(borderColor, white);
    bodyElem.style.setProperty(backgroundColor, black);
    bodyElem.style.setProperty(color, white);
    typeTestElem.style.setProperty(color, white);
}

babyBluesButton.onclick = () => {
    navbarElem.style.setProperty(backgroundColor, darkTeal);
    navbarElem.style.setProperty(borderColor, darkTeal);
    bodyElem.style.setProperty(backgroundColor, teal);
    bodyElem.style.setProperty(color, lightTeal);
    typeTestElem.style.setProperty(color, babyTan);
}

beachDayButton.onclick = () => {
    navbarElem.style.setProperty(backgroundColor, deepTan);
    navbarElem.style.setProperty(borderColor, deepTan);
    bodyElem.style.setProperty(backgroundColor, tan);
    bodyElem.style.setProperty(color, greyTan);
    typeTestElem.style.setProperty(color, white);
}

orchidFieldButton.onclick = () => {
    navbarElem.style.setProperty(backgroundColor, plum);
    navbarElem.style.setProperty(borderColor, plum);
    bodyElem.style.setProperty(backgroundColor, orchid);
    bodyElem.style.setProperty(color, deepPink);
    typeTestElem.style.setProperty(color, cream);
}

hackermanClassicButton.onclick = () => {
    navbarElem.style.setProperty(backgroundColor, black);
    navbarElem.style.setProperty(borderColor, hackerGreen);
    bodyElem.style.setProperty(backgroundColor, black);
    bodyElem.style.setProperty(color, hackerGreen);
    typeTestElem.style.setProperty(color, hackerGreen);
}

hackermanBlueButton.onclick = () => {
    navbarElem.style.setProperty(backgroundColor, hackerDarkBlue);
    navbarElem.style.setProperty(borderColor, hackerLightBlue);
    bodyElem.style.setProperty(backgroundColor, hackerDarkBlue);
    bodyElem.style.setProperty(color, hackerLightBlue);
    typeTestElem.style.setProperty(color, hackerLightBlue);
}