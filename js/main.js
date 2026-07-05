const testimonialSwiper = new Swiper(".testimonialSwiper", {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: ".testimonialSwiper .swiper-pagination",
        clickable: true,
    },
});


const partnerSwiper = new Swiper('.partnerSwiper', {
  slidesPerView: 6,
  autoplay: true
});