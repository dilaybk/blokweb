// JavaScript Document
var button = document.querySelector('.landing > nav button');
var menu = document.querySelector('.landing > nav ul')

button.addEventListener('click', openMenu)

function openMenu() {
    menu.classList.toggle('isopen')
    console.log('check')
}

console.log('kaas')