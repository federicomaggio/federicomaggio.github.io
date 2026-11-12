const navToggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.primary-nav');

function closeNavigation() {
  navToggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
  document.body.classList.remove('nav-open');
  navToggle.querySelector('.sr-only').textContent = 'Open navigation';
}

navToggle.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
  document.body.classList.toggle('nav-open', !isOpen);
  navToggle.querySelector('.sr-only').textContent = isOpen ? 'Open navigation' : 'Close navigation';
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeNavigation);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeNavigation();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 760) {
    closeNavigation();
  }
});
