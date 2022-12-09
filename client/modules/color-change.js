// color change module

// buttons that change theme
let defaultButton = document.getElementById('default');
let defaultDarkButton = document.getElementById('default-dark');
let babyBluesButton = document.getElementById('baby-blues');
let beachDayButton = document.getElementById('beach-day');
let orchidFieldButton = document.getElementById('orchid-field');
let hackermanClassicButton = document.getElementById('hackerman-classic');
let hackermanBlueButton = document.getElementById('hackerman-blue');

// function that takes button element argument
// and declares variables that represent the style
// attribute of what elements will have their colors
// changed and uses switch cases to select which 
// color palette to use. The style variables 
// will then be instantiated with colors. 