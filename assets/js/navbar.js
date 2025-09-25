  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      navLinks.classList.add('closing');
    } else {
      navLinks.classList.remove('closing');
      navLinks.classList.add('open');
    }
  });

  // Close nav when clicking a link
  navItems.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 767) {
        navLinks.classList.remove('open');
        navLinks.classList.add('closing');
        hamburger.classList.remove('open');

        setTimeout(() => {
          navLinks.classList.remove('closing');
        }, 400); 
      }
    });
  });

  // ANTI SCROLL once na nakaopen
if (navLinks.classList.contains('open')) {
  document.body.style.overflow = 'hidden';
} else {
  document.body.style.overflow = '';
}
