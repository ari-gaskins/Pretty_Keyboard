// navbar module

export const renderNavbar = () => {
   let navbarToggle = document.getElementById('navbar');
   let settingsButton = document.getElementById('settings');
   let closeButton = document.getElementById('close');

   // event listeners that handle navbar visibility
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
}
