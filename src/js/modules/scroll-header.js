function resizeMenu(h_hght, color) {
  const nav = document.querySelector('.nav-header');
  function updateBackground() {
    const top = window.scrollY;

    nav.style.background = top > h_hght ? color : '';
  }

  window.addEventListener('scroll', updateBackground);
  updateBackground(); // Run initially to set background if needed
}

export default resizeMenu;
