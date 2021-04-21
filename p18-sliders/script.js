const bodey = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

rightBtn.addEventListener("click", () => {
  activeSlide !== slides.length - 1 ? activeSlide++ : (activeSlide = 0);
  console.log(activeSlide);
  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener("click", () => {
  activeSlide !== 0 ? activeSlide-- : (activeSlide = slides.length - 1);
  console.log(activeSlide);
  setBgToBody();
  setActiveSlide();
});

setBgToBody();

function setBgToBody() {
  bodey.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[activeSlide].classList.add("active");
}
