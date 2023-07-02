const body = document.querySelector('body');
//Function menu mobile
const menu = document.querySelector('.menu-icon');
const itemsMenuMobile = document.querySelector('.items-menu-mobile');
const menuIcon = document.querySelector('.menu-icon');
menu.addEventListener('click', ()=>{
    menuIcon.classList.toggle('active')
    itemsMenuMobile.classList.toggle('active');
});