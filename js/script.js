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

// new production 슬라이드
const swiper = new Swiper(".newproduction-slide", {
    slidesPerView: 6, // You can adjust this to show more slides
    spaceBetween: 10, // Adjust space between slides
    speed: 1000,
    autoplay: true,
    loop: true, // Enable infinite loop
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
