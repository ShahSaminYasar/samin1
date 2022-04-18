const themeSwitch1 = document.querySelector('.theme-switch-1');
const themeSwitch2 = document.querySelector('.theme-switch-2');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileNav = document.getElementById('mobile-nav-menu');

themeSwitch1.addEventListener('click', function() {
    themeSwitch1.classList.toggle('theme-switch-active');
    themeSwitch2.classList.toggle('theme-switch-active');
    document.body.classList.toggle('dark');
})
themeSwitch2.addEventListener('click', function() {
    themeSwitch1.classList.toggle('theme-switch-active');
    themeSwitch2.classList.toggle('theme-switch-active');
    document.body.classList.toggle('dark');
})

function toggleNavMenu() {
    mobileMenu.classList.toggle('menu-active');
    mobileNav.classList.toggle('nav-active');
}

mobileMenu.addEventListener('click', function() {
    toggleNavMenu();
});