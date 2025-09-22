document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for all anchor links with hashes
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      // For the external instagram link, don't prevent default
      const href = this.getAttribute('href');
      if (href.startsWith('http')) {
        return;
      }
      
      e.preventDefault();

      const targetElement = document.querySelector(href);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Intersection Observer for fade-in animations
  const fadeInElements = document.querySelectorAll('.fade-in-element');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const fadeInObserver = new IntersectionObserver(observerCallback, observerOptions);

  fadeInElements.forEach(el => fadeInObserver.observe(el));
});
