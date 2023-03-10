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

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 0) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});
