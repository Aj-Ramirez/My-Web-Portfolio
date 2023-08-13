// SMOOTH__SCROLL
const body = document.body,
scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
height = scrollWrap.getBoundingClientRect().height - 1,
speed = 0.05;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
     offset += (window.pageYOffset - offset) * speed;

     var scroll = "translateY(-" + offset + "px) translateZ(0)";
     scrollWrap.style.transform = scroll;

     callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();

// ANCHOR SECTION
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const main = document.querySelector("main");
    const yOffset = 0; // You can adjust this value to offset any fixed header/navbar
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
} 
// END__SMOOTH__SCROLL

// BURGER__NAVIGRATION 
const nav = document.querySelector(".nav-menu");
const burger = document.querySelector(".burger-nav");
const backNav = document.querySelector(".back-nav-menu");
const menuLink = document.querySelector('.c-work__list');
const burgerLines = document.querySelector('.plate5');

  burger.addEventListener("click", () => {
    toggleNav();
  });

  menuLink.addEventListener("click", () => {
    toggleNav();
    burgerLines.classList.toggle("active"); // Add or remove "active" class for the burger
  });

    function toggleNav() {
      nav.classList.toggle("show-nav");
      backNav.classList.toggle("back-show-nav");
      burgerLines.classList.toggle("inactive");
    }
// END__NAV

// MOUSE__REVEAL
function revealMouseWithDelay() {
  const mouse = document.querySelector(".container .mouse");
  mouse.classList.add("mouse-wheel");
}setTimeout(revealMouseWithDelay, 7000);
// END

// FOR H1 HERO SECTION COLOR FILL  
function isInViewport(element) {
     const rect = element.getBoundingClientRect();
     return (
       rect.top >= 0 && rect.left >= 0 &&
       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
     );
   }
   
function activateAnimation() {
  const heading1 = document.getElementById('heading1');
  const heading2 = document.getElementById('heading2');
  if (isInViewport(heading1)) {
    heading1.classList.add('animate');
    heading2.classList.add('animate');
  }
}
  activateAnimation();

  window.addEventListener('scroll', activateAnimation);
 // END 

  //  HERO BTN AND HEADING CHANGE TEXT
  function changeTextFront(text) {
    const front = document.querySelector('#front'); 
    front.textContent = text;
  }
  function changeTextEnd(text) {
    const end = document.querySelector('#end');
    end.textContent = text;
  }
  function changeTextDev(text) {
    const dev = document.querySelector('#dev');
    dev.textContent = text;
  }
  function changeTextHero(text) {
    const dev = document.querySelector('#dev');
    dev.textContent = text;
  }
  function changeText(text) {
    const button = document.querySelector('.button');
    button.textContent = text;
  }

  function changeTextIntro(text) {
    const button = document.querySelector('.button1');
    button.textContent = text;
  }
  // END

  function scrollToIntro() {
    const introSection = document.getElementById("introduction");
      if (introSection) {
        introSection.scrollIntoView({ behavior: "smooth" });
      }
  }
  function scrollToAbout() {
    const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
  }
  function scrollToHero() {
    const heroSection  = document.getElementById("hero")
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: "smooth" });
      }
  }
  
// HEADING TEXT FILL ANIMATION
  function applyStylesWithColor() {
  document.getElementById("heading1").style.color = "#111c27";
  document.getElementById("heading2").style.color = "#3782ce";
  }setTimeout(applyStylesWithColor, 2000);


  // REVEAL EVERY TEXT PARAGRAPH
document.addEventListener("DOMContentLoaded", function () {

  const paragraph = document.getElementById("about-text");

  const words = paragraph.innerText.split(/\s+/); // Split the text into words

  paragraph.innerHTML = ""; // Clear the original text content

  // Create and append span elements for each word
  words.forEach(word => {
      const span = document.createElement("span");
      span.textContent = word + " ";
      paragraph.appendChild(span);
  });

  // Add AOS animation attribute to each span
  const spans = paragraph.querySelectorAll("span");
  spans.forEach((span, index) => {
      span.setAttribute("data-aos", "zoom-in-up");
      span.setAttribute("data-aos-easing", "ease-in-out");
      span.setAttribute("data-aos-delay", 100 + index * 50); // Adjust delay as needed
      span.setAttribute("data-aos-duration", 1300);
  });
});

// Text reveal when present in the viewport
document.addEventListener("DOMContentLoaded", function () {

  const paragraph = document.getElementById("intro-text"); // Get the paragraph element

  const words = paragraph.innerText.split(/\s+/); // Split the text into words

  paragraph.innerHTML = ""; // Clear the original text content

  // Create and append span elements for each word
  words.forEach(word => {
      const span = document.createElement("span");
      span.textContent = word + " ";
      paragraph.appendChild(span);
  });

  // Add AOS animation attribute to each span
  const spans = paragraph.querySelectorAll("span");
  spans.forEach((span, index) => {
      span.setAttribute("data-aos", "zoom-in-up");
      span.setAttribute("data-aos-easing", "ease-in-out");
      span.setAttribute("data-aos-delay", 100 + index * 50); // Adjust delay as needed
      span.setAttribute("data-aos-duration", 1300);
  });
});
// END

// FILL BG-COLOR WHEN IN VIEWPORT
function handleIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.backgroundColor = "#111c27"; // Change background color
      entry.target.style.transition = "background-color 1.5s ease"; // Add smooth transition
    } else {
      entry.target.style.backgroundColor = "white"; // Reset to initial background color
    }
  });
}
// Create an intersection observer
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5 // Adjust threshold as needed
};

const observer = new IntersectionObserver(handleIntersection, options);
const aboutElement = document.getElementById("about"); // Target the #about element
observer.observe(aboutElement); // Start observing the #about element

// Function to handle the intersection changes for the reveal trigger
function handleReveal(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible"); // Add a CSS class to reveal the button
      observer.unobserve(entry.target); // Stop observing once revealed
    }
  });
}
// END

// Create an intersection observer for the reveal trigger
const showOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5 // Adjust threshold as needed
};

const showObserver = new IntersectionObserver(handleReveal, showOptions);

// Target the reveal trigger element
const showTrigger = document.getElementById("showTrigger");

// Start observing the reveal trigger element
showObserver.observe(showTrigger);


