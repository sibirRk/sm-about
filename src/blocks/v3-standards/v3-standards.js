import Swiper from "swiper";
import videojs from 'video.js';

export default function () {
  const parent = document.querySelector('.v3-standards');
  const moreBtns = parent.querySelectorAll('.v3-standards__more-btn');
  const controls = parent.querySelector('.v3-swiper-controls');
  const prevBtn = controls.querySelector('.v3-swiper-controls__btn-wrapper.prev');
  const nextBtn = controls.querySelector('.v3-swiper-controls__btn-wrapper.next');
  const pagination = parent.querySelector('.v3-swiper-controls__pagination');
  const currentSlideNum = pagination.querySelector('.current');
  const videoWrappers = parent.querySelectorAll('.v3-standards__video-wrapper');

  moreBtns.forEach(btn => {
    const parent = btn.closest('.v3-standards__info')
    const description = parent.querySelector('.v3-standards__v3-description');

    btn.addEventListener('click', () => {
      description.classList.add('js_show-more');
      btn.style.display = 'none';
    })
  })


  const slider = new Swiper('.v3-standards .swiper-container', {
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn
    },
    on: {
      slideChange() {
        currentSlideNum.innerText = this.activeIndex + 1;

        parent.querySelectorAll('video').forEach(video => {
          video.pause();
        })
      }
    }
  })

  videoWrappers.forEach(wrapper => {
    const video = wrapper.querySelector('video')
    const playBtn = wrapper.querySelector('.v3-standards__video-btn');

    playBtn.addEventListener('click', () => {
      video.play();
    })
  })

  window.addEventListener('resize', () => {
    slider.init();
  })
}