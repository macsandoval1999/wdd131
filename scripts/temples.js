const menu = document.querySelector('nav');   
const menuSymbol = document.querySelector('#menu');

menuSymbol.addEventListener('click', function() {
    menu.classList.toggle('show-nav');
    menuSymbol.classList.toggle('show-nav');
});
