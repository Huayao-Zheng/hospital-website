const openNavBtn = document.getElementById('open__nav-btn');
const closeNavBtn = document.getElementById('close__nav-btn');
const navList = document.querySelector('.nav__items');
const navItems = document.querySelectorAll('.nav__items li a');

function openNav() {
  navList.style.display = 'flex';
  closeNavBtn.style.display = 'inline-block';
  openNavBtn.style.display = 'none';
}

function closeNav() {
  navList.style.display = 'none';
  closeNavBtn.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
}

function handleEventListener(addOrRemove, items, fn) {
  if (addOrRemove === 'add' || addOrRemove === 'remove') {
    items.forEach((item) => {
      item[`${addOrRemove}EventListener`]('click', fn);
    });
  }
}

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);

//(mobile and tablet screen) close nav menu when a menu item is clicked
if (window.innerWidth <= 1024) {
  handleEventListener('add', navItems, closeNav);
}

// handle resizing,
window.addEventListener('resize', () => {
  if (window.innerWidth <= 1024) {
    handleEventListener('add', navItems, closeNav);
  } else {
    handleEventListener('remove', navItems, closeNav);
  }
});

// Testimonals (Swiper.js).
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // >= 600px
    600: {
      slidesPerView: 2,
    },
    // >= 1024px
    1024: {
      slidesPerView: 3,
    },
  },
});
