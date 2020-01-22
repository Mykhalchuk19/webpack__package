function createThirdSlider() {
  const btnNext = document.querySelector('.js-testimonials-sliders__next');
  const btnPrev = document.querySelector('.js-testimonials-sliders__prev');
  const firstSlider = document.querySelector('.testimonials-slider-first__list');
  const slidesInFirst = document.querySelectorAll('.testimonials-slider-first__item');
  let currentPosition = 0;
  let currentSlide = 1;
  const widthOneSlideInFirst = slidesInFirst[0].offsetWidth;
  const widthFirstSlider = widthOneSlideInFirst * slidesInFirst.length + 35 + (25 * slidesInFirst.length - 1);
  firstSlider.style.width = `${widthFirstSlider}px`;
  slidesInFirst[currentSlide].classList.add('testimonials-slider-first__item-active');

  function scrollToPrevFirstSlider() {
    currentPosition -= 1;
    if (currentPosition < 0) {
      firstSlider.style.transition = 'none';
      firstSlider.style.left = `-${(currentPosition + 2) * widthOneSlideInFirst}px`;
      const newSlide = firstSlider.lastElementChild.cloneNode(true);
      firstSlider.insertBefore(newSlide, firstSlider.children[0]);
      firstSlider.removeChild(firstSlider.children[slidesInFirst.length]);
      currentPosition += 1;
    }
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        firstSlider.style.transition = 'left 0.6s ease-in-out';
        firstSlider.style.left = `-${widthOneSlideInFirst * currentPosition}px`;
      });
    });
  }

  function findActiveSlidePrev() {
    const slides = firstSlider.querySelectorAll('.testimonials-slider-first__item');
    slides[currentSlide].classList.remove('testimonials-slider-first__item-active');
    currentSlide -= 1;
    if (currentSlide === 0) {
      currentSlide = 1;
      slides[currentSlide + 1].classList.remove('testimonials-slider-first__item-active');
    }
    slides[currentSlide].classList.add('testimonials-slider-first__item-active');
  }

  function scrollToNextFirstSlider() {
    currentPosition += 1;
    if (currentPosition > slidesInFirst.length - 3) {
      firstSlider.style.transition = 'none';
      firstSlider.style.left = `${-(currentPosition - 2) * widthOneSlideInFirst}px`;
      const newSlide = firstSlider.firstElementChild.cloneNode(true);
      firstSlider.appendChild(newSlide);
      firstSlider.removeChild(firstSlider.children[0]);
      currentPosition -= 1;
    }
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        firstSlider.style.transition = 'left 0.6s ease-in-out';
        firstSlider.style.left = `-${widthOneSlideInFirst * currentPosition}px`;
      });
    });
  }

  function findActiveSlideNext() {
    const slides = firstSlider.querySelectorAll('.testimonials-slider-first__item');
    slides[currentSlide].classList.remove('testimonials-slider-first__item-active');
    currentSlide += 1;
    if (currentSlide === slides.length - 1) {
      currentSlide = slides.length - 2;
      slides[currentSlide - 1].classList.remove('testimonials-slider-first__item-active');
    }
    slides[currentSlide].classList.add('testimonials-slider-first__item-active');
  }

  // --------------second-part__in__slider

  const secondSlider = document.querySelector('.testimonials-slider-second__list');
  const slidesInSecond = document.querySelectorAll('.testimonials-slider-second__item');
  let currentPos = 1;
  const widthOneSlideInSecond = slidesInSecond[0].offsetWidth;
  const widthSecondSlider = widthOneSlideInSecond * slidesInSecond.length;
  const currentLeft = widthOneSlideInSecond;
  secondSlider.style.width = `${widthSecondSlider}px`;
  secondSlider.style.left = `-${currentLeft}px`;

  function scrollToPrevSecondSlider() {
    currentPos -= 1;
    if (currentPos < 0) {
      secondSlider.style.transition = 'none';
      secondSlider.style.left = `-${(currentPos + 2) * widthOneSlideInSecond}px`;
      const newSlide = secondSlider.lastElementChild.cloneNode(true);
      secondSlider.insertBefore(newSlide, secondSlider.children[0]);
      secondSlider.removeChild(secondSlider.children[slidesInSecond.length]);
      currentPos += 1;
    }
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        secondSlider.style.transition = 'left 0.6s ease-in-out';
        secondSlider.style.left = `-${widthOneSlideInSecond * currentPos}px`;
      });
    });
  }

  function scrollToNextSecondSlider() {
    currentPos += 1;
    if (currentPos > slidesInSecond.length - 1) {
      secondSlider.style.transition = 'none';
      secondSlider.style.left = `${-(currentPos - 2) * widthOneSlideInSecond}px`;
      const newSlide = secondSlider.firstElementChild.cloneNode(true);
      secondSlider.appendChild(newSlide);
      secondSlider.removeChild(secondSlider.children[0]);
      currentPos -= 1;
    }
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        secondSlider.style.transition = 'left 0.6s ease-in-out';
        secondSlider.style.left = `-${widthOneSlideInSecond * currentPos}px`;
      });
    });
  }
  // --------third-path__in__slider------------------

  const stringAmountSlides = document.querySelector('.testimonials-sliders__amount');
  let currentNumberSlide = 2;

  function writeCurrentNumebrSlide() {
    if (slidesInSecond.length >= 10) {
      if (currentNumberSlide >= 10) {
        stringAmountSlides.innerHTML = `${currentNumberSlide} / ${slidesInSecond.length}`;
      } else {
        stringAmountSlides.innerHTML = `0${currentNumberSlide} / ${slidesInSecond.length}`;
      }
    } else {
      stringAmountSlides.innerHTML = `0${currentNumberSlide} / 0${slidesInSecond.length}`;
    }
  }

  writeCurrentNumebrSlide();
  function reduceCurrentNumberSlide() {
    currentNumberSlide -= 1;
    if (currentNumberSlide === 0) currentNumberSlide = slidesInSecond.length;
    writeCurrentNumebrSlide();
  }

  function enlargeCurrentNumberSlide() {
    currentNumberSlide += 1;
    if (currentNumberSlide === slidesInSecond.length + 1) currentNumberSlide = 1;
    writeCurrentNumebrSlide();
  }

  btnPrev.addEventListener('click', scrollToPrevFirstSlider);
  btnPrev.addEventListener('click', scrollToPrevSecondSlider);
  btnPrev.addEventListener('click', findActiveSlidePrev);
  btnPrev.addEventListener('click', reduceCurrentNumberSlide);
  btnNext.addEventListener('click', scrollToNextFirstSlider);
  btnNext.addEventListener('click', scrollToNextSecondSlider);
  btnNext.addEventListener('click', findActiveSlideNext);
  btnNext.addEventListener('click', enlargeCurrentNumberSlide);
}

createThirdSlider();
