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

// 모달 recent news
// Modal 1
const thumbnail1 = document.querySelector(".videoThumbnail1");
const modal1 = document.getElementById("videoModal1");
const iframe1 = document.getElementById("videoIframe1");
const closeModal1 = document.getElementById("closeModal1");

thumbnail1.addEventListener("click", function () {
    const videoUrl = this.getAttribute("data-video-url");
    iframe1.src = videoUrl;
    modal1.style.display = "block";
});

closeModal1.onclick = function () {
    modal1.style.display = "none";
    iframe1.src = ""; // Clear video src
};

window.onclick = function (event) {
    if (event.target === modal1) {
        modal1.style.display = "none";
        iframe1.src = "";
    }
};

// Modal 2
const thumbnail2 = document.querySelector(".videoThumbnail2");
const modal2 = document.getElementById("videoModal2");
const iframe2 = document.getElementById("videoIframe2");
const closeModal2 = document.getElementById("closeModal2");

thumbnail2.addEventListener("click", function () {
    const videoUrl = this.getAttribute("data-video-url");
    iframe2.src = videoUrl;
    modal2.style.display = "block";
});

closeModal2.onclick = function () {
    modal2.style.display = "none";
    iframe2.src = "";
};

window.onclick = function (event) {
    if (event.target === modal2) {
        modal2.style.display = "none";
        iframe2.src = "https://www.youtube.com/embed/nm2fR-CB2SU";
    }
};

// Modal 3
const thumbnail3 = document.querySelector(".videoThumbnail3");
const modal3 = document.getElementById("videoModal3");
const iframe3 = document.getElementById("videoIframe3");
const closeModal3 = document.getElementById("closeModal3");

thumbnail3.addEventListener("click", function () {
    const videoUrl = this.getAttribute("data-video-url");
    iframe3.src = videoUrl;
    modal3.style.display = "block";
});

closeModal3.onclick = function () {
    modal3.style.display = "none";
    iframe3.src = "";
};

window.onclick = function (event) {
    if (event.target === modal3) {
        modal3.style.display = "none";
        iframe3.src = "_";
    }
};

// Modal 4
const thumbnail4 = document.querySelector(".videoThumbnail4");
const modal4 = document.getElementById("videoModal4");
const iframe4 = document.getElementById("videoIframe4");
const closeModal4 = document.getElementById("closeModal4");

thumbnail4.addEventListener("click", function () {
    const videoUrl = this.getAttribute("data-video-url");
    iframe4.src = videoUrl;
    modal4.style.display = "block";
});

closeModal4.onclick = function () {
    modal4.style.display = "none";
    iframe4.src = "";
};

window.onclick = function (event) {
    if (event.target === modal4) {
        modal4.style.display = "none";
        iframe4.src = "";
    }
};
