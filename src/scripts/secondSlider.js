function createSecondSlider() {
  const nextBtn = document.querySelector('.js-services__next');
  const prevBtn = document.querySelector('.js-services__prev');
  const slider = document.querySelector('.slider-services__list');
  const slides = slider.querySelectorAll('.slider-services__item');
  let currentPosition = 0;
  let currentSlide = 1;
  const widthSlide = slides[0].offsetWidth;
  const widthSlider = widthSlide * slides.length + 30 * (slides.length - 1);
  slides[currentSlide].classList.add('js-services-slider__item-active');
  slider.style.width = `${widthSlider}px`;

  function scrollToPrev() {
    currentPosition -= 1;
    if (currentPosition < 0) {
      slider.style.transition = 'none';
      slider.style.left = `-${(currentPosition + 2) * widthSlide + 30}px`;
      const newSlide = slider.lastElementChild.cloneNode(true);
      slider.insertBefore(newSlide, slider.children[0]);
      slider.removeChild(slider.children[slides.length]);
      currentPosition += 1;
    }
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        slider.style.transition = 'left 0.6s ease-in-out';
        slider.style.left = `-${widthSlide * currentPosition}px`;
      });
    });
  }

  function findActiveSlidePrev() {
    const slidesInActive = slider.querySelectorAll('.slider-services__item');
    slidesInActive[currentSlide].classList.remove('js-services-slider__item-active');
    console.log(currentSlide);
    currentSlide -= 1;
    console.log(currentSlide);
    if (currentSlide === 0) {
      currentSlide = 1;
      slidesInActive[currentSlide + 1].classList.remove('js-services-slider__item-active');
      console.log(currentSlide);
    }
    slidesInActive[currentSlide].classList.add('js-services-slider__item-active');
  }

  prevBtn.addEventListener('click', scrollToPrev);
  prevBtn.addEventListener('click', findActiveSlidePrev);

  function scrollToNext() {
    currentPosition += 1;
    if (currentPosition > slides.length - 3) {
      slider.style.transition = 'none';
      slider.style.left = `${-(currentPosition - 2) * widthSlide - 30}px`;
      const newSlide = slider.firstElementChild.cloneNode(true);
      slider.appendChild(newSlide);
      slider.removeChild(slider.children[0]);
      currentPosition -= 1;
    }
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        slider.style.transition = 'left 0.6s ease-in-out';
        slider.style.left = `-${widthSlide * currentPosition + 60}px`;
      });
    });
  }

  function findActiveSlideNext() {
    const slidesInActive = slider.querySelectorAll('.slider-services__item');
    slidesInActive[currentSlide].classList.remove('js-services-slider__item-active');
    currentSlide += 1;
    if (currentSlide === slidesInActive.length - 1) {
      currentSlide = slidesInActive.length - 2;
      slidesInActive[currentSlide - 1].classList.remove('js-services-slider__item-active');
    }
    slidesInActive[currentSlide].classList.add('js-services-slider__item-active');
  }

  nextBtn.addEventListener('click', scrollToNext);
  nextBtn.addEventListener('click', findActiveSlideNext);
}

createSecondSlider();
