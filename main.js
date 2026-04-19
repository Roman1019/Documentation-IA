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

    // Адаптив
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },

    // Додатково (можеш включити якщо хочеш)
    loop: true, // безкінечний скрол
    speed: 600, // плавність
  });
});
