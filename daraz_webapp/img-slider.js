const images = document.querySelectorAll('.img-slider-js');
const sliderDots = document.querySelector('.slider-dots');
let currentIndex = 0;

function goToSlide(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
  updateActiveDot(index);
  currentIndex = index;
}

const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    const nextIndex = (currentIndex + 1) % images.length;
    goToSlide(nextIndex);
  });
}
if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    goToSlide(prevIndex);
  });
}

dotCreation();

function dotCreation() {
  sliderDots.innerHTML = Array.from(images)
    .map((img, index) => `
      <span class="material-symbols-outlined img-slider-dots" data-index="${index}">circle</span>
    `)
    .join('');

  const dots = document.querySelectorAll('.img-slider-dots');
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = Number(dot.dataset.index);
      goToSlide(index);
    });
  });

  goToSlide(0);
}

function updateActiveDot(index) {
  document.querySelectorAll('.img-slider-dots').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}