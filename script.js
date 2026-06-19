// Header: добавляем фон/бордер после скролла
const header = document.getElementById('siteHeader');
const onScroll = () => {
  if (window.scrollY > 8) header.classList.add('is-scrolled');
  else header.classList.remove('is-scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Reveal-on-scroll для секций
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// Один раз запускаем "бегущую точку" по пайплайну, когда он попадает в вьюпорт
const pipeline = document.getElementById('pipeline');
if (pipeline && 'IntersectionObserver' in window) {
  const pipelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        pipeline.classList.add('is-active');
        pipelineObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  pipelineObserver.observe(pipeline);
}
