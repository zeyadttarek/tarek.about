// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

window.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelectorAll('.nav nav a');

  navToggle?.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    navToggle.classList.toggle('active');
    const expanded = document.body.classList.contains('nav-open');
    navToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  });

  navLinks.forEach(link => link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    navToggle?.classList.remove('active');
    navToggle?.setAttribute('aria-expanded', 'false');
  }));
});

// Smooth highlight of nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav nav a');

window.addEventListener('scroll', () => {
  const y = window.scrollY + 120;
  sections.forEach(sec => {
    if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach(l => l.style.color = '');
      const active = document.querySelector(`.nav nav a[href="#${sec.id}"]`);
      if (active && !active.classList.contains('btn')) active.style.color = 'var(--purple)';
    }
  });
});

// Simple reveal-on-scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .gallery figure, .contact-card, .stat, .timeline li').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  observer.observe(el);
});
