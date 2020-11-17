//Show the navigation menu

const navMenu = document.getElementById('nav__menu'),
    navToggle = document.getElementById('nav__toggle'),
    navLinks = document.getElementsByClassName('nav__link')



//Open or close the menu 

navToggle.addEventListener('click', () => {


    if (navMenu.classList.contains('show')) {
        navToggle.classList.replace('bx-x', 'bx-menu');
        navMenu.classList.remove('show');
    } else {
        navMenu.classList.add('show');
        navToggle.classList.replace('bx-menu', 'bx-x');
    }
})


//Close the menu when the nav link is closed
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');



    const navMenu = document.getElementById('nav__menu');
    navMenu.classList.remove('show');
    navToggle.classList.replace('bx-x', 'bx-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));