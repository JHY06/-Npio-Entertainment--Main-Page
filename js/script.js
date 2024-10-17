const visualSlide = new Swiper(".visual-slide", {
    // Optional parameters
    direction: "vertical",
    loop: true,
    autoplay: true,
    speed: 1000,
    effect: "fade",

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },
});
const artistSwiper = new Swiper(".artist-swiper", {
    // Optional parameters
    loop: true,
    autoplay: true,
    speed: 1000,
    slidesPerView: 5,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },
});
