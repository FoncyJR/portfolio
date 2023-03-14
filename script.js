//Favicon
document.querySelector('link[rel="shortcut icon"]').setAttribute('href', 'assets/img/mc-logo.png');

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

// Sticky navbar
window.onscroll = function() {stickyNavbar()};

const navbar = document.querySelector('nav');
const sticky = navbar.offsetTop;

function stickyNavbar() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add('sticky');
	} else {
		navbar.classList.remove('sticky');
	}
}

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const nav = document.querySelector('nav');

// Hide navList on page load
navList.classList.add('hidden');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
  nav.classList.toggle('sticky');
});

window.addEventListener('scroll', () => {
  if (window.innerWidth <= 768) {
    if (window.scrollY >= 0) {
      nav.classList.remove('sticky');
    } 
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    navList.classList.add('hidden');
  } else {
    navList.classList.remove('hidden');
    hamburger.classList.remove('active');
    navList.classList.remove('active');
    nav.classList.remove('sticky');
  }
});

hamburger.addEventListener('click', () => {
  navList.classList.toggle('hidden');
});

navList.addEventListener('click', () => {
  navList.classList.add('hidden');
  hamburger.classList.remove('active');
  navList.classList.remove('active');
});

