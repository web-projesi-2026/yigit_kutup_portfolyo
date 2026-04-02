// ─── SCROLL REVEAL ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ─── ACTIVE NAV LINK ───
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.style.color = 'var(--granite-gold)';
  }
});

// ─── STONE BLOCK PARALLAX (hero only) ───
const stoneBlock = document.querySelector('.stone-block');
if (stoneBlock) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    stoneBlock.style.transform = `translateY(${scrollY * 0.08}px)`;
  });
}

// ─── STAGGER CHILDREN ───
document.querySelectorAll('.skills-grid .skill-item').forEach((el, i) => {
  el.style.animationDelay = `${i * 0.07}s`;
  el.classList.add('fade-in');
  observer.observe(el);
});

document.querySelectorAll('.hobby-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.1}s`;
  el.classList.add('fade-in');
  observer.observe(el);
});

// ─── CURSOR GLOW (subtle) ───
const glow = document.createElement('div');
glow.style.cssText = `
  position: fixed;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(139,115,85,0.04) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
  transform: translate(-50%, -50%);
  transition: left 0.3s ease, top 0.3s ease;
`;
document.body.appendChild(glow);

document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});
