export function animationOnScroll() {
  const elements = document.querySelectorAll('.type-product');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('fade-in', entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target);
      });
    },
    { treshold: 0.7 }
  );

  [...elements].forEach((el) => {
    observer.observe(el);
  });
}
