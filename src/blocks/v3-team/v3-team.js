import Swiper from "swiper";

export default function () {
  const parent = document.querySelector('.v3-team');
  const section = parent.closest('section');
  const thumbsBlock = parent.querySelector('.v3-team__thumbnails');
  const prevBtn = parent.querySelector('.v3-swiper-controls__btn-wrapper.prev');
  const nextBtn = parent.querySelector('.v3-swiper-controls__btn-wrapper.next');
  const infoBlock = parent.querySelector('.v3-team__info');
  const backBlock = parent.querySelector('.v3-team__back');

  if (window.innerWidth > 1023) {
    infoBlock.style.height = backBlock.offsetHeight + 'px';
  }

  const thumbsSwiper = new Swiper(thumbsBlock, {
    slidesPerView: 5,
    spaceBetween: 12,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    loop: false,
  });

  const slider = new Swiper('.v3-team .v3-team__photo-wrapper .swiper-container', {
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn
    },
    slidesPerView: 1,
    thumbs: {
      swiper: thumbsSwiper
    },
    on: {
      init() {
      },
      slideChange() {
        const currentSlide = this.slides[this.realIndex];
      }
    }
  })

  window.addEventListener('resize', () => {
    thumbsSwiper.init();
    slider.init();
  })
}