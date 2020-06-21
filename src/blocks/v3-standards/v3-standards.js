import Swiper from "swiper";
// import videojs from 'video.js';

export default function () {
  const parent = document.querySelector('.v3-standards');
  const section = parent.closest('section');
  const moreBtns = parent.querySelectorAll('.v3-standards__more-btn');
  const controls = parent.querySelector('.v3-swiper-controls');
  const prevBtn = controls.querySelector('.v3-swiper-controls__btn-wrapper.prev');
  const nextBtn = controls.querySelector('.v3-swiper-controls__btn-wrapper.next');
  const pagination = parent.querySelector('.v3-swiper-controls__pagination');
  const currentSlideNum = pagination.querySelector('.current');
  const videoWrappers = parent.querySelectorAll('.v3-standards__video-wrapper');
  const infoBlock = parent.querySelector('.v3-standards__info');
  const backBlock = parent.querySelector('.v3-standards__back');

  moreBtns.forEach(btn => {
    const parent = btn.closest('.v3-standards__info-wrapper');
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
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    on: {
      init() {
        const currentSlide = this.slides[this.realIndex];
        const color = currentSlide.dataset.color;
        infoBlock.style.background = color;
        section.style.height = backBlock.offsetHeight + 'px';

        if (window.innerWidth < 768) {
          const slideHeight = this.slides[this.realIndex].offsetHeight;
          backBlock.style.background = color;
          // infoBlock.style.minHeight = slideHeight - 100 + 'px';
        }
      },
      slideChange() {
        const currentSlide = this.slides[this.realIndex];
        const color = currentSlide.dataset.color;
        currentSlideNum.innerText = this.activeIndex + 1;
        infoBlock.style.background = color;

        if (window.innerWidth < 768) {
          backBlock.style.background = color;
          const infoWrapperHeight = currentSlide.querySelector('.v3-standards__info-wrapper').offsetHeight;
          const slideHeight = this.slides[this.realIndex].offsetHeight;
          // infoBlock.style.minHeight = infoWrapperHeight + 237 + 'px';
        }

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