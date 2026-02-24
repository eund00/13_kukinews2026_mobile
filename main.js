const swiper = new Swiper(".main-center .swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiper1 = new Swiper(".section_4 .swiper", {
  loop: true,
  slidesPerView: 1.5,
  spaceBetween: 20,
  // speed: 2000,
  speed: 35000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  freeMode: true,
  freeModeMomentum: false,
  allowTouchMove: true,
});

const swiper2 = new Swiper(".section_7 .swiper", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  // speed: 2000,
  speed: 35000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  freeMode: true,
  freeModeMomentum: false,
  allowTouchMove: true,
});

const swiper3 = new Swiper(".gnb_box .swiper", {
  slidesPerView: "auto", // 자동 너비
  spaceBetween: 35,
  freeMode: true, // 자연스러운 스크롤
});

const swiper4 = new Swiper(".header-snb .swiper", {
  slidesPerView: "auto", // 자동 너비
  spaceBetween: 35,
  freeMode: true, // 자연스러운 스크롤
});
const swiper5 = new Swiper("._fixed .swiper", {
  slidesPerView: "auto", // 자동 너비
  spaceBetween: 0,
  freeMode: false, // 자연스러운 스크롤
});
