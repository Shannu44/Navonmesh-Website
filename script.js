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
        skyscraper.style.transform = `translateX(${scrollPosition * 2}vw)`;
        skyscraper2.style.transform = `translateX(-${scrollPosition * 2}vw)`;
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


var loader = document.getElementById("load_wrap");
var container = document.getElementById("back");

window.addEventListener("load", function() {
  setTimeout(function() {
    loader.style.display = "none";       // Hide the loader
    window.scrollTo(0, 0);               // Scroll the page to the top after loading
  }, 1000); // 5-second delay
});






const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Function to animate the text
const animateText = (element) => {
    let iterations = 0;
    const interval = setInterval(() => {
        element.innerText = element.innerText
            .split("")
            .map((letter, index) => {
                if (index < iterations) {
                    return element.getAttribute('data-value')[index];
                }
                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

        if (iterations >= element.getAttribute('data-value').length) {
            clearInterval(interval);
        }
        iterations += 1 / 3; // Adjusting to slow down
    }, 30);
};

// Set up IntersectionObserver for all h1 elements
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateText(entry.target); // Call the function for the visible element
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the element is visible

// Observe all h1 elements with data-value attribute
document.querySelectorAll("h1[data-value]").forEach((h1) => {
    observer.observe(h1);
});