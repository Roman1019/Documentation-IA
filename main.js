// Ініціалізація Swiper
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".feedback-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,

    // Навігація (твої кнопки)
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    pagination: {
      el: ".feedback-pagination",
      clickable: true, // щоб можна було клікати по крапочках
      dynamicBullets: true,
    },

    // Адаптив
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },

    // Додатково (можеш включити якщо хочеш)
    loop: true, // безкінечний скрол
    speed: 600, // плавність
  });
});
