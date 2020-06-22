import interact from 'interactjs';

export default function () {
  const parent = document.querySelector('.v3-top-slider');
  const img = parent.querySelector('.v3-top-slider__img-wrapper');
  const imgWidth = img.offsetWidth;
  const image = interact(img);
  const points = parent.querySelectorAll('.v3-top-slider__point');

  let position = 0;
  console.log(imgWidth);

  image.draggable({
    inertia: true,
    autoScroll: true,
    listeners: {
      move (event) {
        if ( (position + event.dx < 0) && (position + event.dx - window.innerWidth) > -imgWidth) {
          position += event.dx;
        }

        event.target.style.transform = `translate3d(${position}px, 0, 0)`;
      }
    }
  })

  points.forEach(point => {
    point.addEventListener('click', () => {
      points.forEach(el => {
        el.classList.remove('js_active');
      });
      point.classList.add('js_active');
    })
  })
}