/* portfolio.js
   Scroll-driven interactions shared by the home page and project pages.
   - scroll progress bar
   - sticky-nav shrink + shadow
   - hero photo parallax (home only)
   - IntersectionObserver reveals (sections, staggered cards, gallery)
   - gold accent-rule draw-in
   All hooks are data-attribute / class driven so markup stays declarative. */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var progress = document.querySelector('.scroll-progress');
    var nav = document.querySelector('.site-nav');
    var heroPhoto = document.querySelector('[data-parallax]');

    /* ── Reveals: sections + staggered cards ── */
    var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

    // Cards stagger by column position (0 / 90 / 180ms across each row of 3).
    var cardDelay = new Map();
    var cardCount = 0;
    document.querySelectorAll('[data-reveal-card]').forEach(function (el) {
      cardDelay.set(el, (cardCount++ % 3) * 90);
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var isCard = el.hasAttribute('data-reveal-card');
        var delay = isCard
          ? (cardDelay.get(el) || 0)
          : (parseInt(el.getAttribute('data-reveal-delay'), 10) || 0);
        setTimeout(function () {
          el.classList.add('visible');
          // Hand transform back to the hover transition once revealed.
          if (isCard) {
            setTimeout(function () { el.classList.add('hoverable'); }, 720);
          }
        }, delay);
        io.unobserve(el);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

    reveals.forEach(function (el) { io.observe(el); });

    /* ── Gallery items stagger (80ms per item) ── */
    var galleryItems = Array.prototype.slice.call(document.querySelectorAll('.gallery-item'));
    galleryItems.forEach(function (el, i) {
      el.classList.add('reveal');
      el.style.transitionDuration = '0.6s';
      var gIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          setTimeout(function () { el.classList.add('visible'); }, i * 80);
          gIO.unobserve(el);
        });
      }, { threshold: 0.1 });
      gIO.observe(el);
    });

    /* ── Accent rule draws itself in ── */
    document.querySelectorAll('.accent-rule').forEach(function (el) {
      var lineIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          el.classList.add('drawn');
          lineIO.unobserve(el);
        });
      }, { threshold: 0.5 });
      lineIO.observe(el);
    });

    /* ── Scroll-driven: progress bar, nav shrink/shadow, hero parallax ── */
    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY || window.pageYOffset || 0;
        var docH = document.documentElement.scrollHeight - window.innerHeight;
        if (progress) progress.style.width = (docH > 0 ? (y / docH) * 100 : 0) + '%';
        if (nav) nav.classList.toggle('scrolled', y > 24);
        if (heroPhoto && y < 900) heroPhoto.style.transform = 'translateY(' + (y * 0.05) + 'px)';
        ticking = false;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  });
})();
