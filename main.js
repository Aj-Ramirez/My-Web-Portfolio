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


// BURGER NAVIGRATION
const nav = document.querySelector(".nav-menu");
const burger = document.querySelector(".burger-nav")
const backNav = document.querySelector(".back-nav-menu")

burger.addEventListener("click", () => {
     nav.classList.toggle("show-nav");
     backNav.classList.toggle("back-show-nav");

   });

   function revealMouseWithDelay() {
     const mouse = document.querySelector(".container .mouse");
     mouse.classList.add("mouse-wheel");
   }setTimeout(revealMouseWithDelay, 3000);



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
   