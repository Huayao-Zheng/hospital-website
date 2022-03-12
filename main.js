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
