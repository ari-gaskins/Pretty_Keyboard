// navbar variables
let navbarToggle = document.getElementById('navbar');
let settingsButton = document.getElementById('settings');
let closeButton = document.getElementById('close');

// buttons that change theme
let defaultButton = document.getElementById('default');
let defaultDarkButton = document.getElementById('default-dark');
let babyBluesButton = document.getElementById('baby-blues');
let beachDayButton = document.getElementById('beach-day');
let orchidFieldButton = document.getElementById('orchid-field');
let hackermanClassicButton = document.getElementById('hackerman-classic');
let hackermanBlueButton = document.getElementById('hackerman-blue');

// type test variables
let typeTestWords = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet',
 'consectetur', 'adipiscing', 'elit', 'Fusce', 'elit', 'dui',
  'cursus', 'quis', 'feugiat', 'eu', 'gravida', 'vitae', 'nisi',
   'Donec', 'quis', 'molestie', 'lacus', 'In', 'et', 'metus'];
let typeTestField = document.getElementById('type-test').innerHTML;

// need variables representing HTML elements for timer countdown
let selectedOption = document.getElementById('timer-seconds');
// test value retrieval
// console.log(selectedOption.value);

// imports from countdown module
import { secondsArray } from "./modules/countdown";
import { countdown } from "./modules/countdown";

// seconds to countdown from
let thirtySeconds = 30;
let fortyFiveSeconds = 45;
let sixtySeconds = 60;
let ninetySeconds = 90;
let hundredTwentySeconds = 120;

// event listener that handles settings visibility
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

// function that shows shift keys and hides primary keys 
// when shift is held

// function that delivers type test to typeTestField after any key is pressed 

// function that registers keypresses and returns key code

// function that takes key code and string array arguments
// and maps it to each individual character.
// Note: string array should be made up of individual characters

// function that handles countdown time visible or not

