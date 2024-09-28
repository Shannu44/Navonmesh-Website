const hero = document.querySelector('.hero');
const skyscraper = document.querySelector('.skyscraper');
const skyscraper2 = document.querySelector('.skyscraper2');

let scrollPosition = 0;
let ticking = false;

window.addEventListener('scroll', () => {
  scrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrollLimit = 18; // Adjusted to vh/vw proportions

      // Move hero's h1 element upwards smoothly
      hero.querySelector('h1').style.transform = `translateY(-${scrollPosition /20}vh)`;

      // Move skyscrapers left and right
      if (scrollPosition < scrollLimit) {
        skyscraper.style.transform = `translateX(${scrollPosition * 1.5}vw)`;
        skyscraper2.style.transform = `translateX(-${scrollPosition * 1.5}vw)`;
      }

      ticking = false;
    });

    ticking = true;
  }
});

function showSidebar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}