import Swiper from "swiper";

export default function() {
  const parent = document.querySelector('.v3-locations');
  const section = parent.closest('section');
  const description = parent.querySelector('.v3-locations__v3-description');
  const currentSlideSpan = parent.querySelector('.v3-swiper-controls__pagination .current');
  const thumbsBlock = parent.querySelector('.v3-locations__thumbnails');
  const prevBtn = parent.querySelector('.v3-swiper-controls__btn-wrapper.prev');
  const nextBtn = parent.querySelector('.v3-swiper-controls__btn-wrapper.next');
  const infoBlock = parent.querySelector('.v3-locations__info');
  const backBlock = parent.querySelector('.v3-locations__back');

  if (window.innerWidth > 1023) {
    infoBlock.style.height = backBlock.offsetHeight + 'px';
  }

  const thumbsSwiper = new Swiper(thumbsBlock, {
    slidesPerView: 5,
    spaceBetween: 12,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    loop: false,
    breakpoints: {
      1024: {
        slidesPerView: 6
      }
    }
  });

  const slider = new Swiper('.v3-locations .v3-locations__photo-wrapper .swiper-container', {
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
        currentSlideSpan.innerText = this.realIndex + 1;
        description.innerHTML = currentSlide.dataset.description;
      }
    }
  })

  window.addEventListener('resize', () => {
    thumbsSwiper.init();
    slider.init();
  })
}