/* SLIDER FUNCTIONALITY */
let currentSlide = 0;
const slides = document.querySelectorAll(".slider .slides img");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "block";
}

function changeSlide(n) {
  currentSlide = (currentSlide + n + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

/* ON LOAD, FIRST IMAGE LOADS BY DEFAULT*/
document.addEventListener("DOMContentLoaded", function () {
  showSlide(0);
});

/* DYNAMIC FOOTER YEAR */
const yearElement = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;
