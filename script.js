document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Nav: solid background after scrolling past hero ---------- */
  const nav = document.getElementById('siteNav');
  const onScroll = () => {
    if (window.scrollY > 80) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav drawer ---------- */
  const navToggle = document.getElementById('navToggle');
  const navDrawer = document.getElementById('navDrawer');
  if (navToggle && navDrawer) {
    navToggle.addEventListener('click', () => {
      const isOpen = navDrawer.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    navDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navDrawer.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Hero video sound toggle ---------- */
  const heroVideo = document.getElementById('heroVideo');
  const soundToggle = document.getElementById('soundToggle');
  if (heroVideo && soundToggle) {
    soundToggle.addEventListener('click', () => {
      const nowMuted = !heroVideo.muted ? true : false;
      heroVideo.muted = nowMuted;
      if (!nowMuted) {
        heroVideo.volume = 1;
        heroVideo.play().catch(() => {});
      }
      soundToggle.setAttribute('aria-pressed', String(!nowMuted));
      soundToggle.setAttribute('aria-label', nowMuted ? 'Turn on video sound' : 'Turn off video sound');
    });
  }

  /* ---------- Film section: click to play with sound ---------- */
  const filmsVideo = document.getElementById('filmsVideo');
  const filmsPlay = document.getElementById('filmsPlay');
  if (filmsVideo && filmsPlay) {
    filmsVideo.play().catch(() => {});
    filmsPlay.addEventListener('click', () => {
      filmsVideo.muted = false;
      filmsVideo.volume = 1;
      filmsVideo.play().catch(() => {});
      filmsPlay.style.opacity = '0';
      filmsPlay.style.pointerEvents = 'none';
    });
    filmsVideo.addEventListener('pause', () => {
      filmsPlay.style.opacity = '1';
      filmsPlay.style.pointerEvents = 'auto';
    });
  }

});
