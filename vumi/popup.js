 // Get references to the elements
 const helpButton = document.getElementById('help');
 const popup = document.getElementById('popup');
 const closeButton = popup.querySelector('.close');

 // Show the popup when the button is clicked
 helpButton.addEventListener('click', () => {
     popup.style.display = 'block';
 });

 // Hide the popup when the close button is clicked
 closeButton.addEventListener('click', () => {
     popup.style.display = 'none';
 });

 // Hide the popup when clicking outside of it
 window.addEventListener('click', (event) => {
     if (event.target === popup) {
         popup.style.display = 'none';
     }
 });