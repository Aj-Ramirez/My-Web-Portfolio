let mouseCursor = document.querySelector(".cursor");
// let burgerHover = document.querySelector(".burger-nav");
// let btnHover = document.querySelector(".button")
// let heroHeadingHover = document.querySelector(".heroHeadings")
// let socIconHover = document.querySelector(".soc-icon-footer");
// let myEmailHover = document.querySelector(".my-email-footer");
// let myPhoneHover = document.querySelector(".my-phone-footer");
// let aboutHover = document.querySelector("#aboutHeading");
// let introHover = document.querySelector("#about-text")
// let introBtn = document.querySelector(".button1")
// let xrayText = document.querySelector("#holdboth")

window.addEventListener('mousemove', cursor);
window.addEventListener('mousedown', handleMouseDown);
window.addEventListener('mouseup', handleMouseUp);
window.addEventListener('wheel', handleMouseScrollStart);
window.addEventListener('mousemove', handleMouseScrollEnd); 


function cursor (e) {
     mouseCursor.style.top = e.pageY + 'px';
     mouseCursor.style.left = e.pageX + 'px';
}
function handleMouseDown() {
  isMouseDown = true;
  mouseCursor.classList.add("shrinkCursor"); 
}
function handleMouseUp() {
  isMouseDown = false;
  mouseCursor.classList.remove("shrinkCursor");
}
function handleMouseScrollStart() {
  isMouseScroll = true;
  mouseCursor.classList.add("scrollMouse");
}

// function handleMouseScrollEnd() {
//      isMouseScroll = false;
//       mouseCursor.classList.remove("scrollMouse")
// }

// function handleMouseScrollEnd() {
//   isMouseScroll = false;
//   mouseCursor.style.transition = "width 0.5s, height 0.5s, border-radius 0.3s ease"; // Add transition to width and height
//   mouseCursor.classList.remove("scrollMouse");
  
//   // After the transition, reset the transition property to avoid unintended animations
//   mouseCursor.addEventListener("transitionend", () => {
//     mouseCursor.style.transition = "";
//   }, { once: true });
// }

let scrollingTimeout;
let isScrolling = false;

// Add both "wheel" and "touchmove" event listeners
window.addEventListener('wheel', handleScroll);
window.addEventListener('touchmove', handleScroll);

function handleScroll() {
  clearTimeout(scrollingTimeout);
  isScrolling = true;

  scrollingTimeout = setTimeout(() => {
    if (isScrolling) {
      handleMouseScrollEnd();
      isScrolling = false;
    }
  }, 100); // Adjust the timeout value as needed
}

function handleMouseScrollEnd() {
  // Your existing code for handling the end of scrolling
  mouseCursor.style.transition = "width 0.7s, height 0.7s, border-radius 0.7s ease"; // Add transition to width, height, and border-radius
  mouseCursor.classList.remove("scrollMouse");

  mouseCursor.addEventListener("transitionend", () => {
    mouseCursor.style.transition = "";
  }, { once: true });
}


// window.addEventListener("scroll", () => {
//   mouseCursor.classList.toggle("scrollMouse", window.scrollY > 0);
// });

// let elementHover = [mouseCursor, 
//                     burgerHover, 
//                     btnHover, 
//                     heroHeadingHover, 
//                     socIconHover, 
//                     myEmailHover, 
//                     myPhoneHover,
//                     aboutHover,
//                     introHover,
//                     introBtn,
//                     xrayText,
//                   ];

// document.addEventListener('mouseover', (e) => {
//      let targetElement = e.target;
   
//      // Check if the target element is in the elementHover array or a child of any element in the array
//      let isHoveredElement = elementHover.some(element => element === targetElement || element.contains(targetElement));
   
//      if (isHoveredElement) {
//        mouseCursor.classList.add("link-grow");
//        mouseCursor.classList.remove("unlink-grow")
//      } else {
//        mouseCursor.classList.remove("link-grow");
//        mouseCursor.classList.add("unlink-grow");
//       }
// });

