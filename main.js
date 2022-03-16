const openNavBtn = document.getElementById('open__nav-btn');
const closeNavBtn = document.getElementById('close__nav-btn');
const navList = document.querySelector('.nav__items');

openNavBtn.addEventListener('click', () => {
  navList.style.display = 'flex';
  closeNavBtn.style.display = 'inline-block';
  openNavBtn.style.display = 'none';
});

closeNavBtn.addEventListener('click', () => {
  navList.style.display = 'none';
  closeNavBtn.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
});

// Testimonals (Swiper.js)
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
