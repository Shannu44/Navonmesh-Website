const hero = document.querySelector('.hero');
const skyscraper = document.querySelector('.skyscraper');
const skyscraper2 = document.querySelector('.skyscraper2');

// Add event listener to the window scroll event
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  hero.querySelector('h1').style.transform = `translateY(-${scrollPosition / 6}px)`;
  
  // Move the skyscrapers left and right
  skyscraper.style.transform = `translate(${scrollPosition / 1}px, 0)`;
  skyscraper2.style.transform = `translate(-${scrollPosition / 1}px, 0)`;
});