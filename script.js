const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
menu.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? 'Close' : 'Menu';
});
links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  links.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.textContent = 'Menu';
}));

const form = document.querySelector('#application-form');
const message = document.querySelector('#form-message');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    message.textContent = 'A few required details are still missing.';
    message.className = '';
    return;
  }
  const button = form.querySelector('button');
  button.disabled = true;
  button.textContent = 'Preparing your application…';
  message.textContent = 'This site does not yet have a secure submission service. Your information has not been sent.';
  message.className = '';
  window.setTimeout(() => { button.disabled = false; button.innerHTML = 'Send application <b>↗</b>'; }, 700);
});
