// navbar module

// navbar variables
let navbarToggle = document.getElementById('navbar');
let settingsButton = document.getElementById('settings');
let closeButton = document.getElementById('close');

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