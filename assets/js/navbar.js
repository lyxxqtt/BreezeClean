const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  if (navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    navLinks.classList.add('closing');
    setTimeout(() => {
      navLinks.classList.remove('closing');
    }, 400); 
  } else {
    navLinks.classList.add('open');
  }
  hamburger.classList.toggle('open');
});
