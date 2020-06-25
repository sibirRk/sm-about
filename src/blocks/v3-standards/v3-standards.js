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
  const videoWrappers = parent.querySelector('.v3-standards__video');
  const infoBlock = parent.querySelector('.v3-standards__info');
  const backBlock = parent.querySelector('.v3-standards__back');
  const playBtn = parent.querySelector('.v3-standards__play');
  const video = parent.querySelector('video')

  // for fast load loader img
  let img = document.createElement('img');
  img.src = video.dataset.loader;

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
        const videos = currentSlide.dataset.video.split(',');

        currentSlideNum.innerText = this.activeIndex + 1;
        infoBlock.style.background = color;

        video.querySelectorAll('source').forEach(src => {
          video.removeChild(src);
        })

        videos.forEach(el => {
          const arr = el.split('.');
          const format = arr[arr.length - 1];
          let source = document.createElement('source');
          source.src = el;
          // source.type = 'video/' + (format === 'ogv' ? 'ogg' : format);
          video.appendChild(source);
        })

        video.poster = video.dataset.loader;
        video.classList.add('loading');

        let img = document.createElement('img');
        img.src = currentSlide.dataset.poster;
        img.onload = function() {
          video.poster = img.src;
          video.classList.remove('loading');
        };

        video.load();

        playBtn.classList.remove('plaing');

        if (window.innerWidth < 768) {
          backBlock.style.background = color;
          const infoWrapperHeight = currentSlide.querySelector('.v3-standards__info-wrapper').offsetHeight;
          const slideHeight = this.slides[this.realIndex].offsetHeight;
          // infoBlock.style.minHeight = infoWrapperHeight + 237 + 'px';
        }

        video.pause();
      }
    }
  })

  video.onended = function() {
    playBtn.classList.remove('plaing');
  };

  playBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play();

      playBtn.classList.add('plaing');
    } else {
      video.pause();
      playBtn.classList.remove('plaing');
    }
  })

  window.addEventListener('resize', () => {
    slider.init();
  })
}