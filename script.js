const hero = document.querySelector('.hero');
const skyscraper = document.querySelector('.skyscraper');
const skyscraper2 = document.querySelector('.skyscraper2');

let scrollPosition = 0;
let ticking = false;

// Optimize animations with requestAnimationFrame
window.addEventListener('scroll', () => {
  scrollPosition = window.scrollY;

  // Limit how often scroll position is processed
  if (!ticking) {
    window.requestAnimationFrame(() => {
      // Define the scroll limit for stopping the skyscraper animation
      const scrollLimit = 70;

      // Move hero's h1 element
      hero.querySelector('h1').style.transform = `translateY(-${scrollPosition / 8}px)`;

      // Move skyscrapers until scrollLimit is reached
      if (scrollPosition < scrollLimit) {
        skyscraper.style.transform = `translateX(${scrollPosition * 4}px)`;
        skyscraper2.style.transform = `translateX(-${scrollPosition * 4}px)`;
      } else {
        skyscraper.style.transform = `translateX(${scrollLimit * 4}px)`;
        skyscraper2.style.transform = `translateX(-${scrollLimit * 4}px)`;
      }

      ticking = false;
    });

    ticking = true;
  }
});

// Add CSS optimization
skyscraper.style.willChange = 'transform';
skyscraper2.style.willChange = 'transform';
hero.querySelector('h1').style.willChange = 'transform';


window.addEventListener('scroll', () => {
  const screenWidth = window.innerWidth; // Get screen width
  scrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrollLimit = 10;

      // Adjust hero's h1 element
      hero.querySelector('h1').style.transform = `translateY(-${scrollPosition / 8}px)`;

      // Check if screen is small (mobile) and adjust skyscrapers
      if (screenWidth > 768) {
        // Desktop animation
        if (scrollPosition < scrollLimit) {
          skyscraper.style.transform = `translateX(${scrollPosition * 4}px)`;
          skyscraper2.style.transform = `translateX(-${scrollPosition * 4}px)`;
        } else {
          skyscraper.style.transform = `translateX(${scrollLimit * 2}px)`;
          skyscraper2.style.transform = `translateX(-${scrollLimit * 2}px)`;
        }
      } else 
      {
        // Mobile animation (optional: reduce movement or stop it)
        skyscraper.style.transform = `translateX(0)`; // Keep them in place for mobile
        skyscraper2.style.transform = `translateX(0)`;
      }

      ticking = false;
    });

    ticking = true;
  }
});
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const totalScrollHeight = document.body.scrollHeight - windowHeight;
  
  // Calculate the percentage of the scroll position
  const scrollPercentage = scrollPosition / totalScrollHeight;

  // Update the background position based on the scroll percentage
  document.querySelector('.gradient-background').style.backgroundPosition = `0% ${scrollPercentage * 200}%`;
});



function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}