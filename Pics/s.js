const hero = document.querySelector('.hero');
const skyscraper = document.querySelector('.skyscraper');
const skyscraper2 = document.querySelector('.skyscraper2');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const windowWidth = window.innerWidth; // Get window width to calculate limits

  // Adjust text movement
  hero.querySelector('h1').style.transform = `translateY(-${scrollPosition / 2}px)`;

  // Ensure skyscrapers stay within the screen by limiting translation
  const maxTranslate = windowWidth / 2; // Maximum allowed translation

  skyscraper.style.transform = `translateX(${Math.min(scrollPosition / 1, maxTranslate)}px)`;
  skyscraper2.style.transform = `translateX(-${Math.min(scrollPosition / 1, maxTranslate)}px)`;
});
