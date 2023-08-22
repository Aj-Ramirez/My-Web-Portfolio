// let mouseCursor = document.querySelector(".cursor");
// let burgerHover = document.querySelector(".burger-nav");
// let btnHover = document.querySelector(".button")
// let heroHeadingHover = document.querySelector(".heroHeadings")
// let socIconHover = document.querySelector(".soc-icon-footer");
// let myEmailHover = document.querySelector(".my-email-footer");
// let myPhoneHover = document.querySelector(".my-phone-footer");
// let aboutHover = document.querySelector("#aboutHeading");
// let introHover = document.querySelector("#about-text")
// let introBtn = document.querySelector(".button1")

// window.addEventListener('mousemove', cursor);

// function cursor (e) {
//      mouseCursor.style.top = e.pageY + 'px';
//      mouseCursor.style.left = e.pageX + 'px';
// }

// let elementHover = [mouseCursor, 
//                     burgerHover, 
//                     btnHover, 
//                     heroHeadingHover, 
//                     socIconHover, 
//                     myEmailHover, 
//                     myPhoneHover,
//                     aboutHover,
//                     introHover,
//                     introBtn
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





// // BURGER__NAVIGRATION 
// const nav = document.querySelector(".nav-menu");
// const burger = document.querySelector(".burger-nav");
// const backNav = document.querySelector(".back-nav-menu");
// const menuLink = document.querySelector('.c-work__list');
// const burgerLines = document.querySelector('.plate5');

//   burger.addEventListener("click", () => {
//     toggleNav();
//   });

//   menuLink.addEventListener("click", () => {
//     toggleNav();
//     burgerLines.classList.toggle("active"); // Add or remove "active" class for the burger
//   });

//     function toggleNav() {
//       nav.classList.toggle("show-nav");
//       backNav.classList.toggle("back-show-nav");
//       burgerLines.classList.toggle("inactive");
//     }
// // END__NAV


// HEADING TEXT FILL ANIMATION
function applyStylesWithColor() {
  document.getElementById("heading1").style.color = "#111c27";
  document.getElementById("heading2").style.color = "#3782ce";
  }setTimeout(applyStylesWithColor, 2000);

   
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
  const button = document.querySelector('.btn-intro');
  button.textContent = text;
}
// END


