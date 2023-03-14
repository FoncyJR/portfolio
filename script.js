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

// Embedded videos
// Load the YouTube API script
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create the players
var player1, player2, player3;
function onYouTubeIframeAPIReady() {
  player1 = new YT.Player('player1', {
    height: '360',
    width: '640',
    videoId: 'NbgS9aHS1mo'
  });

  player2 = new YT.Player('player2', {
    height: '360',
    width: '640',
    videoId: 'VIDEO_ID_2_HERE'
  });

  player3 = new YT.Player('player3', {
    height: '360',
    width: '640',
    videoId: 'VIDEO_ID_3_HERE'
  });
}
