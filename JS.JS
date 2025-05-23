// script.js
// Interactive typewriter effect for the header description with sparkle
const headerText = document.querySelector('header p');
const originalText = "Front-End Developer | HTML | CSS | JavaScript";
let index = 0;

function typeWriter() {
  if (index < originalText.length) {
    headerText.innerHTML += `<span class="sparkle">${originalText.charAt(index)}</span>`;
    index++;
    setTimeout(typeWriter, 60);
  } else {
    // I Just Add Glowing Effect After Brefly Typing
    headerText.classList.add('glow');
    setTimeout(() => headerText.classList.remove('glow'), 1500);
  }
}

headerText.innerHTML = "";
typeWriter();

// Smooth scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header h1');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    window.scrollTo({ top: sections[0].offsetTop, behavior: 'smooth' });
  });
});

// Light/Dark Mode Toggle on Body Click with Visual Animation [Main part :-) i like this One]
let darkMode = false;

document.body.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') return;

  darkMode = !darkMode;

  document.body.style.transition = 'background 0.6s ease-in-out, color 0.6s ease-in-out';
  document.body.style.background = darkMode ? '#1e293b' : 'linear-gradient(to bottom, #cfe8e0 0%, #e0f7fa 100%)';
  document.body.style.color = darkMode ? 'white' : '#333';

  document.querySelectorAll('.card').forEach(card => {
    card.style.transition = 'background 0.5s, color 0.5s';
    card.style.background = darkMode ? '#334155' : 'white';
    card.style.color = darkMode ? 'white' : '#333';
  });

  document.querySelector('header').style.background = darkMode ? '#1e3a8a' : 'rgba(79, 70, 229, 0.9)';
  document.querySelector('footer').style.background = darkMode ? '#1e3a8a' : '#4f46e5';

  headerText.classList.add('shine');
  setTimeout(() => headerText.classList.remove('shine'), 1000);
});

console.log("Click anywhere to toggle light/dark mode with typewriter and sparkle effect");
