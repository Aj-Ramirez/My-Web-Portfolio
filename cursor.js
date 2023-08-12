let mouseCursor = document.querySelector(".cursor");
let burgerHover = document.querySelector(".burger-nav");
let btnHover = document.querySelector(".button")
let heroHeadingHover = document.querySelector(".heroHeadings")
let socIconHover = document.querySelector(".soc-icon-footer");
let myEmailHover = document.querySelector(".my-email-footer");
let myPhoneHover = document.querySelector(".my-phone-footer");
let aboutHover = document.querySelector("#aboutHeading");
let introHover = document.querySelector("#about-text")
let introBtn = document.querySelector(".button1")

window.addEventListener('mousemove', cursor);


function cursor (e) {
     mouseCursor.style.top = e.pageY + 'px';
     mouseCursor.style.left = e.pageX + 'px';
}

let elementHover = [mouseCursor, 
                    burgerHover, 
                    btnHover, 
                    heroHeadingHover, 
                    socIconHover, 
                    myEmailHover, 
                    myPhoneHover,
                    aboutHover,
                    introHover,
                    introBtn
                  ];

document.addEventListener('mouseover', (e) => {
     let targetElement = e.target;
   
     // Check if the target element is in the elementHover array or a child of any element in the array
     let isHoveredElement = elementHover.some(element => element === targetElement || element.contains(targetElement));
   
     if (isHoveredElement) {
       mouseCursor.classList.add("link-grow");
       mouseCursor.classList.remove("unlink-grow")
     } else {
       mouseCursor.classList.remove("link-grow");
       mouseCursor.classList.add("unlink-grow");
     }
   });


   


