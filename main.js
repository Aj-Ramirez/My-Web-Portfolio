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


// BURGER NAVIGRATION
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


   function revealMouseWithDelay() {
     const mouse = document.querySelector(".container .mouse");
     mouse.classList.add("mouse-wheel");
   }setTimeout(revealMouseWithDelay, 7000);


 

//    FOR H1 HERO SECTION 
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
   
   // Initial check in case the element is already in the viewport on page load
   activateAnimation();
   
   // Add event listener to activate the animation when scrolling
   window.addEventListener('scroll', activateAnimation);
   
  //  For Hero Button
  function changeText(text) {
    const button = document.querySelector('.button');
    button.textContent = text;
  }
  function scrollToAbout() {
    const aboutSection = document.getElementById("introduction");
   
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
  
// HEADING TEXT 
  function applyStylesWithColor() {
  document.getElementById("heading1").style.color = "#111c27";
  document.getElementById("heading2").style.color = "#3782ce";
  }setTimeout(applyStylesWithColor, 3000);


  // Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {

  // Get the paragraph element
  const paragraph = document.getElementById("about-text");

  // Split the text into words
  const words = paragraph.innerText.split(/\s+/);

  // Clear the original text content
  paragraph.innerHTML = "";

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


// Function to handle the intersection changes
function handleIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.backgroundColor = "#111c27"; // Change background color
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

// Target the #about element
const aboutElement = document.getElementById("about");

// Start observing the #about element
observer.observe(aboutElement);

