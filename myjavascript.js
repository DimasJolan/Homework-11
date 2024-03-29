"use strict";

const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll(".slide");
const slidesWrapper = document.querySelectorAll('.slider-wrapper');

let index = 0;
const activeSlide = n => {
  console.log(slides);
  for (let slide of slides){
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
}

const nextSlide  = () => {
  if (index == slides.length - 1) {
    index = 0;
    activeSlide(index);
  }
  else {
    index++;
    activeSlide(index);
  }
}

const prevSlide  = () => {
  if (index == 0) {
    index = slides.length - 1;
    activeSlide(index);
  }
  else {
    index--;
    activeSlide(index);
  }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

