// color change module




// function that uses switch cases to select which 
// color palette to use. The style variables 
// will then be changed colors.
let r = document.querySelector(':root');
let rs = document.getComputedStyle(r);

let defaultButton = document.getElementById('default');
let defaultDarkButton = document.getElementById('default-dark');
let babyBluesButton = document.getElementById('baby-blues');
let beachDayButton = document.getElementById('beach-day');
let orchidFieldButton = document.getElementById('orchid-field');
let hackermanClassicButton = document.getElementById('hackerman-classic');
let hackermanBlueButton = document.getElementById('hackerman-blue');

let navbarElem = document.getElementById('navbar');
let bodyElem = document.querySelector('body');
let typeTestElem = document.getElementById('type-test-wrapper');

defaultButton.onclick = () => {
    navbarElem.style.backgroundColor.setProperty(rs.getPropertyValue('--black'));
    bodyElem.style.backgroudColor.setProperty(rs.getPropertyValue('--white'));
    bodyElem.style.color.setProperty(rs.getPropertyValue('--black'));
}

defaultDarkButton.onclick = () => {
    navbarElem.style.backgroundColor.setProperty(rs.getPropertyValue('--white'));
    bodyElem.style.backgroundColor.setProperty(rs.getPropertyValue('--black'));
    bodyElem.style.color.setProperty(rs.getPropertyValue('--white'));
}

babyBluesButton.onclick = () => {
    navbarElem.style.backgroundColor.setProperty(rs.getPropertyValue('--darkTeal'));
    bodyElem.style.backgroundColor.setProperty(rs.getPropertyValue('--teal'));
    bodyElem.style.color.setProperty(rs.getPropertyValue('--lightTeal'));
    typeTestElem.style.color.setProperty(rs.getPropertyValue('--babyTan'));
}

beachDayButton.onclick = () => {
    navbarElem.style.backgroundColor.setProperty(rs.getPropertyValue('--deepTan'));
    bodyElem.style.backgroundColor.setProperty(rs.getPropertyValue('--tan'));
    bodyElem.style.color.setProperty(rs.getPropertyValue('--greyTan'));
    typeTestElem.style.color.setProperty(rs.getPropertyValue('--white'))
}

orchidFieldButton.onclick = () => {
    navbarElem.style.backgroundColor.setProperty(rs.getPropertyValue('--plum'));
    bodyElem.style.backgroundColor.setProperty(rs.getPropertyValue('--orchid'));
    bodyElem.style.color.setProperty(rs.getPropertyValue('--deepPink'));
    typeTestElem.style.color.setProperty(rs.getPropertyValue('--cream'));
}

hackermanClassicButton.onclick = () => {
    navbarElem.style.backgroundColor.setProperty(rs.getPropertyValue('--black'));
    navbarElem.style.borderColor.setProperty(rs.getPropertyValue('--hackerGreen'));
    bodyElem.style.backgroundColor.setProperty(rs.getPropertyValue('--black'));
    bodyElem.style.color.setProperty(rs.getPropertyValue('--hackerGreen'));
}

hackermanBlueButton.onclick = () => {
    navbarElem.style.backgroundColor.setProperty(rs.getPropertyValue('--hackerDarkBlue'));
    navbarElem.style.borderColor.setProperty(rs.getPropertyValue('--hackerLightBlue'));
    bodyElem.style.backgroundColor.setProperty(rs.getPropertyValue('--hackerDarkBlue'));
    bodyElem.style.color.setProperty(rs.getPropertyValue('--hackerLightBlue'));
}