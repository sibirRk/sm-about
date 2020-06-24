import interact from 'interactjs';

export default function () {
  const parent = document.querySelector('.v3-top-slider');
  const img = parent.querySelector('.v3-top-slider__img-wrapper');
  const imgWidth = img.offsetWidth;
  const image = interact(img);
  const points = parent.querySelectorAll('.v3-top-slider__point');
  const showPointsBtn = parent.querySelector('.v3-top-slider__onoff-btn');
  const bottomBtn = parent.querySelector('.v3-top-slider__bottom-btn');
  const compass = parent.querySelector('.v3-top-slider__compass img');

  let position = 0;
  let pointsVisible = false;
  let pointsFlag = false;

  showPointsBtn.addEventListener('click', () => {
    if (window.innerWidth > 767 && !pointsFlag) {
      setTimeout(() => {
        image.draggable({
          // inertia: true,
          autoScroll: false,
          listeners: {
            move (event) {
              if ( (position + event.dx < 0) && (position + event.dx - window.innerWidth) > -imgWidth) {
                position += event.dx;
              }

              event.target.style.transform = `translate3d(${position}px, 0, 0)`;
              let deg = (position / window.innerWidth) * 100 / 2;
              compass.style.transform = `rotate(${-deg}deg)`
            }
          }
        })

        pointsFlag = true;
      }, 500);
  }

    if (pointsVisible) {
      showPointsBtn.classList.remove('js_on');
      parent.classList.remove('js_points-visible');
      pointsVisible = !pointsVisible;
    } else {
      showPointsBtn.classList.add('js_on');
      parent.classList.add('js_points-visible');
      pointsVisible = !pointsVisible;
    }
  })

  bottomBtn.addEventListener('click', () => {
    window.scrollTo({
      behavior: 'smooth',
      left: 0,
      top: parent.offsetHeight
    })
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