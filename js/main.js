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
//Scroll to the respective section when clicked
const navLink = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('.section');


function linkAction() {
    navLink.forEach(n => {
        n.classList.remove('active');
        if (n.id.endsWith('-link')) {
            for (section in sections) {
                if (section.id == n.id.substr(0, n.id.lastIndexOf('-link'))) {
                    var scrollToSection = document.getElementById(n.id.substr(0, n.id.lastIndexOf('-link')));
                }
            }
        }
    });

    this.classList.add('active')


    const navMenu = document.getElementById('nav__menu');
    navMenu.classList.remove('show');
    navToggle.classList.replace('bx-x', 'bx-menu');
}


//Specify link action for all navigation links
navLink.forEach(n =>
    n.addEventListener('click', linkAction)
);


//ScrollReveal animation
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: "1500",
    reset: true
})

//Reveal home
sr.reveal('.home-data__img', {})
sr.reveal('.button', { delay: 200 })
sr.reveal('#occupation', { delay: 300 })
sr.reveal('#greeting', { delay: 200 })
sr.reveal('.home-social', { interval: 100 })

//Reveal about
sr.reveal('.about-section__title', {})
sr.reveal('.about-img', { delay: 200 })
sr.reveal('.about-paragraph', { delay: 300 })

//Reveal services
sr.reveal('.services-section__title', {})
sr.reveal('.service', { interval: 200 })

//Reveal Qualifications
sr.reveal('.qualifications-section__title', {})
sr.reveal('.qualifications-type__container', { interval: 100 })
sr.reveal('.language-container', { interval: 200 })


//Reveal education
sr.reveal('.education-section__title', {})
sr.reveal('.education-tile', { interval: 200 })


//Reveal contacts
sr.reveal('.contact-section__title', {})
sr.reveal('.form-input', { interval: 200 })

//Reveal contact details
sr.reveal('.contact-row', { interval: 200 })

//Reveal footer
sr.reveal('.footer-row', { interval: 200 })