var myNav = document.querySelector("nav");
var navbarCollapse = document.querySelector(".navbar-collapse");
var closeBtn = document.querySelector(".mobile-nav-toggle");
var upto = document.querySelector(".back-to-top");
window.onscroll = function () {
    "use strict";
    if ((document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50)) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    }
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        upto.style.display = "block";
    }
    else {
        upto.style.display = "none";
    }
};
function classToggle() {
    const navs = document.querySelector('#collapse')
    navs.classList.toggle('show');
}
document.querySelector('#navbar-toggler').addEventListener('click', classToggle);

upto.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

var navbarBtn = document.getElementById('navbar-toggler');
var navbarIcon = document.getElementById("navbar-icon");
navbarBtn.addEventListener('click', () => {
    if (navbarIcon.classList.contains('bi-list')) {
        navbarIcon.classList.remove("bi-list");
        navbarIcon.classList.add("bi-x");
    }
    else {
        navbarIcon.classList.remove("bi-x");
        navbarIcon.classList.add("bi-list");
    }
})

var links =document.querySelectorAll(".scrollto");
links.forEach((item)=>{
    item.addEventListener('click',()=>{
        const el =document.getElementById(item.getAttribute("data-link"));
        const yOffset = -110;
        const y=el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y,behavior:"smooth"})
    })
})

var sections =document.querySelectorAll('section');
window.addEventListener('scroll',()=>{
    let current = '';
    sections.forEach(section =>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(window.pageYOffset >= (sectionTop - sectionHeight / 1)){
            current = section.getAttribute('id')
        }
    })
    links.forEach(link =>{
        link.classList.remove('active');
        if(link.getAttribute('data-link')==current){
            link.classList.add('active')
        }
    })
})