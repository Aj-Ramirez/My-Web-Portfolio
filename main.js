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
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  
