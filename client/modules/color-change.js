// color change module




// function that uses switch cases to select which 
// color palette to use. The style variables 
// will then be changed colors.
const colorChange = () => {
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
}