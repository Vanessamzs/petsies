document.addEventListener('turbo:load', () => {
  const path = window.location.pathname;

  const iconLinks = document.querySelectorAll('.icon-link');

  iconLinks.forEach(link => {
    if (link.getAttribute('href') === path) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
