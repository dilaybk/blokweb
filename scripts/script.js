// JavaScript Document

//MENU
var button = document.querySelector('.landing > nav button');
var menu = document.querySelector('.landing > nav ul')

button.addEventListener('click', openMenu)

function openMenu() {
    menu.classList.toggle('isopen')
    console.log('check')
}

console.log('kaas')



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

