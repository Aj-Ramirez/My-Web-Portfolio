window.addEventListener("load", function () {
     let shine = document.querySelector(".shine");
     let revealText = document.querySelector(".shine span");
     let c = document.querySelector(".cursor");
   
     shine.addEventListener("mouseenter", () => {
       c.classList.add("cursorHover"); // Add the class on hover
       revealText.style.opacity = "1"; // Make the text visible when hovered
     });
   
     shine.addEventListener("mouseleave", () => {
       c.classList.remove("cursorHover"); // Remove the class when leaving
       revealText.style.opacity = "0"; // Hide the text when not hovered
     });
   
     document.body.onmousemove = function (e) {
       var rect = shine.getBoundingClientRect();
       const offsetX = e.clientX - rect.left;
       const offsetY = e.clientY - rect.top;
   
       setTimeout(() => {
         const clipPathValue = `circle(100px at ${offsetX}px ${offsetY}px)`;
         revealText.style.clipPath = clipPathValue;
       }, 50);
   
       c.style.left = `${e.clientX}px`;
       c.style.top = `${e.clientY}px`;
     };
   });
   