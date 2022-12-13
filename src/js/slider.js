const sliderTrack = document.querySelector('.slider__track');
const item = document.querySelectorAll('.slider-item');
const prev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const dotsBlock = document.querySelector('.dots')


const slideWidth = item[0].offsetWidth;
const firstIndex = 1;
const lastIndex = item.length;

let controlsIsActive, animationDuration = null;
let currentIndex, currentPosition = null;


for (i=1; i <= item.length; i++){
    dotsBlock.innerHTML += `<li class = "dots__item" data-dot-index = ${i}></li> `
}
const dots = document.querySelectorAll('.dots__item');



function setDotActive(newIndex, prevIndex) {
  if (prevIndex) {
    const prevDot = document.querySelector(`[data-dot-index="${prevIndex}"]`);
    prevDot.classList.remove('dots__item_active');
  }
  const curDot = document.querySelector(`[data-dot-index="${newIndex}"]`);
  curDot.classList.add('dots__item_active');
}

function animateSlide(index, callback) {
  const prevPosition = currentPosition;
  const newPosition = -1 * index * slideWidth;
  const diffPosition = newPosition - prevPosition;
  const startTime = Date.now();

  const timer = setInterval(() => {
    const currentTime = Date.now();
    let timeFraction = (currentTime - startTime) / animationDuration;
    let progress, position = null;

    if (timeFraction >= 1) {
      timeFraction = 1;
      clearInterval(timer);
    }

    progress = 1 - Math.pow(1 - timeFraction, 2);
    position = prevPosition + diffPosition * progress;
    sliderTrack.style.transform = `translateX(${position}px)`;

    if (timeFraction === 1) {
      callback.call();
    }
  }, 16);
}

function setSlide(index) {
  currentIndex = index;
  currentPosition = -1 * currentIndex * slideWidth;
  sliderTrack.style.transform = `translateX(${currentPosition}px)`;
}

function changeSlide(index) {
  let newIndex = null;

  if (index > lastIndex) {
    newIndex = firstIndex;
  } 
  else if (index < firstIndex) {
    newIndex = lastIndex;
  } 
  else {
    newIndex = index;
  }

  controlsIsActive = false;
  setDotActive(newIndex, currentIndex);

  animateSlide(index, () => {
    setSlide(newIndex);
    controlsIsActive = true;
  });
}

function onNextSlide() {;
  if (controlsIsActive) {
    changeSlide(currentIndex + 1);
  }
}

function onPrevSlide() {
  if (controlsIsActive) {
    changeSlide(currentIndex - 1);
  }
}

function handleDotClick(event) {
  if (controlsIsActive) {
    const newIndex = Number(event.target.dataset.dotIndex);
    changeSlide(newIndex);
  }
}

function events() {
  btnNext.addEventListener('click', onNextSlide);
  prev.addEventListener('click', onPrevSlide);
  dots.forEach((dot) => dot.addEventListener('click', handleDotClick));
}

function startSlider() {
  const firstSlideClone = item[0].cloneNode(true);
  const lastSlideClone = item[item.length - 1].cloneNode(true);

  sliderTrack.prepend(lastSlideClone);
  sliderTrack.append(firstSlideClone);

  animationDuration = 1000;
  controlsIsActive = true;

  setSlide(firstIndex);
  setDotActive(firstIndex);
  events();
}

window.onload = () => startSlider();