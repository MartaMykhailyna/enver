const swiperEl = document.querySelector('swiper-container')
Object.assign(swiperEl, {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        661 : {    ////"@1.79"
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1170: {
            slidesPerView: 4,
            spaceBetween: 70,
        },
    },
});