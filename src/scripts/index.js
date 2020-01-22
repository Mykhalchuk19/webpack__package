import '../styles/basic.sass';
import './secondSlider.js';
import './thirdSlider.js';


function createFirstSlider() {
  const introContent = document.querySelector('div.intro__content');
  const slider = document.querySelector('ul.intro__list');
  const firstSlide = document.querySelector('li.intro__item');
  const lastSlide = firstSlide.cloneNode(true);
  lastSlide.dataset.number = 'last';
  slider.appendChild(lastSlide);

  const slides = slider.querySelectorAll('li.intro__item');

  const indicators = document.createElement('ul');
  for (let i = 0; i < slides.length - 1; i += 1) {
    const dot = document.createElement('li');
    const button = document.createElement('button');
    button.classList.add('intro__button');
    button.setAttribute('data-index', i);
    button.addEventListener('click', showSlider);
    dot.appendChild(button);
    dot.classList.add('intro__dot');
    indicators.appendChild(dot);
  }

  indicators.classList.add('intro__dots');
  introContent.appendChild(indicators);

  const buttons = indicators.querySelectorAll('button.intro__button');
  buttons[0].classList.add('active__button');
  const widthSlide = slides[0].offsetWidth;
  let count = 0;

  function showSlider() {
    for (let i = 0; i < slides.length - 1; i += 1) {
      if (this.getAttribute('data-index') === slides[i].getAttribute('data-number')) {
        slider.style.transform = `translateX(-${widthSlide * i}px)`;
        count = i;
        buttons[i].classList.add('active__button');
      } else if (buttons[i].classList.contains('active__button') === true) {
        buttons[i].classList.remove('active__button');
      }
    }
    buttons[0].disabled = false;
  }

  slider.style.transition = 'ease-in-out 0.5s transform';
  slider.style.transform = 'translateX(0px)';

  setInterval(() => {
    for (let i = 0; i < slides.length - 1; i += 1) {
      if (buttons[i].classList.contains('active__button') === true) {
        buttons[i].classList.remove('active__button');
      }
    }
    slider.style.transition = 'ease-in-out 0.5s transform';
    slider.style.transform = `translateX(-${widthSlide * count}px)`;
    if (count === slides.length - 1 || count === slides.length) {
      buttons[0].classList.add('active__button');
      buttons[0].disabled = true;
    } else {
      buttons[count].classList.add('active__button');
    }
    count += 1;

    if (count > slides.length) {
      slider.style.transition = 'none';
      slider.style.transform = 'translateX(0px)';
      buttons[0].classList.remove('active__button');
      buttons[1].classList.add('active__button');
      buttons[0].disabled = false;
      setTimeout(() => {
        slider.style.transition = 'ease-in-out 0.5s transform';
        slider.style.transform = `translateX(-${widthSlide}px)`;
        count = 2;
      }, 0);
    }
  }, 5000);
}

createFirstSlider();