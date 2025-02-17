import Glide from '@glidejs/glide';

function setGlide() {
  const glides = document.querySelectorAll('.glide');

  glides.forEach((el) => {
    new Glide(el, {
      type: 'carousel',
      startAt: 0,
    }).mount();
  });
}

export default setGlide;
