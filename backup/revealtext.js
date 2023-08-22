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
   
//    INTRO BG REVEAL
   const bgIntro = document.getElementById("bg-intro");
   const btnIntro = document.querySelector(".btn-intro");
   const textIntro = document.querySelector("#about-text");

   const options = {
       root: null,
       rootMargin: "0px",
       threshold: 0.5 // Trigger the callback when 50% of the element is visible
   };
   const observer = new IntersectionObserver((entries, observer) => {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               bgIntro.style.opacity = 1;
               setTimeout(() => {
                    btnIntro.style.opacity = 1;
                }, 2000);
               setTimeout(() => {
                    textIntro.style.opacity = 1;
                }, 1000);
              
               // observer.unobserve(entry.target); // Stop observing once revealed
           }else{
               bgIntro.style.opacity = 0;
               btnIntro.style.opacity = 0;
               textIntro.style.opacity = 0;
           }
       });
   }, options);
   observer.observe(bgIntro);
   
   



   // MOUSE__REVEAL
function revealMouseWithDelay() {
     const mouse = document.querySelector(".container .mouse");
     mouse.classList.add("mouse-wheel");
   }setTimeout(revealMouseWithDelay, 5000);
   // END
