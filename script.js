
// Add this to your existing script.js or a new JavaScript file
const menuIcon = document.getElementById('menu-items');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
   sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height =sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*='+ id +  ']').classList.add('active');
        });
    }
   });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}
// script.js
const menuButton = document.getElementById("menu-items");
const navBar = document.querySelector(".navbar");
const activeNav = document.querySelector(".active-nav");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("fa-bars");
  menuButton.classList.toggle("fa-times");
  navBar.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-items");
    const navbar = document.querySelector(".navbar");

    menuButton.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });
  });