const slides = document.querySelector(".slides");
const slideCount = document.querySelectorAll(".slide").length;
let currentIndex = 0;

document.getElementById("next").addEventListener("click", () => {
  if (currentIndex < slideCount - 3) {
    currentIndex++;
    updateSlidePosition();
  }
});

document.getElementById("prev").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlidePosition();
  }
});

function updateSlidePosition() {
  slides.style.transform = `translateX(${-currentIndex * (100 / 3)}%)`;
}
