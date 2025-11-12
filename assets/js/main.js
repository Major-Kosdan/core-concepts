// main.js — basic interactive behaviours: mobile nav, sticky header, smooth scroll
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navList = document.querySelector('.nav-list');
  const header = document.getElementById('site-header');
  const year = document.getElementById('year');

  // Set current year in footer
  if (year) year.textContent = new Date().getFullYear();

  // Mobile nav toggle
  hamburger.addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
    navList.classList.toggle('show');
  });

  // Close menu on click outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header-inner') && navList.classList.contains('show')) {
      navList.classList.remove('show');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // Sticky header shadow on scroll
  let lastScroll = 0;
  window.addEventListener('scroll', function() {
    const sc = window.scrollY;
    if (sc > 10) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
    lastScroll = sc;
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});
