// JavaScript Document

//MENU
var button = document.querySelector('.landing > nav button');
var menu = document.querySelector('.landing > nav ul');

button.addEventListener('click', openMenu);

function openMenu() {
    menu.classList.toggle('isopen');
    console.log('check');
}

console.log('kaas');


//DARK MODE

// check for saved 'darkMode' in localStorage
var darkMode = localStorage.getItem('darkMode'); 

var darkModeToggle = document.querySelector('.landing > button');

var enableDarkMode = () => {
  // add the class to the body
  document.body.classList.add('darkmode');
  // update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

var disableDarkMode = () => {
  // remove the class from the body
  document.body.classList.remove('darkmode');
  // update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// if dark mode is enabled (equals to), then i want it enabled
// when the page loads, it's stays with the settings you selected
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});



//LOADER
var loader = document.querySelector('.loader');

window.addEventListener('load', loaderFace);

function loaderFace() {
    loader.className += 'hidden';
}

// window.addEventListener('load', function () {
//     var loader = document.querySelector('.loader');
//     console.log('loader');
//     loader.className += "hidden";
// })


//FADE-IN
var faders = document.querySelectorAll('section');
var appearOptions = {
    threshold: 0
};

var appearOnScroll = new IntersectionObserver (function(entries, appearOnScroll) {
    entries.forEach(entry => {

        if (!entry.isIntersecting) {
            console.log(entry);
            return; 
            //if entry intersect is false -> then return (function stops)
        } else { // if it is intersecting, then look at all these chickens
            entry.target.classList.add('appear'); 
            appearOnScroll.unobserve(entry.target); //once it observes, it won't observe anymore
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

