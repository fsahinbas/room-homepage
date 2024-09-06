const hamburgerEl = document.querySelector(".header__hamburger");
const closeEl = document.querySelector(".mobile-menu__close-icon");

const prevEl = document.querySelector(".slider__arrow.prev");
const nextEl = document.querySelector(".slider__arrow.next");
const sliderWrapperEl = document.querySelector(".slider__wrapper");

hamburgerEl.addEventListener("click", () => {
  document.body.classList.add("open-menu");
});

closeEl.addEventListener("click", () => {
  document.body.classList.remove("open-menu");
});

let slideIndex = 0;
let leftDistance = 0;
const slideLength = document.querySelectorAll(".slide").length;
prevEl.addEventListener("click", () => {
  if (slideIndex < slideLength - 1) {
    leftDistance = leftDistance - 100;
    sliderWrapperEl.style.transform = `translateX(${leftDistance}%)`;
    slideIndex++;
  }
});

nextEl.addEventListener("click", () => {
  if (slideIndex > 0) {
    leftDistance = leftDistance + 100;
    sliderWrapperEl.style.transform = `translate(${leftDistance}%)`;
    slideIndex--;
  }
});
