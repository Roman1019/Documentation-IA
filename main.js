document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".feedback-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,

    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    pagination: {
      el: ".feedback-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
    loop: true,
    speed: 600,
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   const items = document.querySelectorAll(".advantages-accordion-item");

//   items.forEach((item) => {
//     const header = item.querySelector(".advantages-accordion-header");

//     header.addEventListener("click", () => {
//       const isActive = item.classList.contains("active");
//       items.forEach((i) => i.classList.remove("active"));
//       if (!isActive) {
//         item.classList.add("active");
//       }
//     });
//   });
// });
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".advantages-accordion-item");

  items.forEach((item) => {
    const header = item.querySelector(".advantages-accordion-header");
    const content = item.querySelector(".advantages-accordion-content");
    const line = item.querySelector(".line");

    header.addEventListener("click", () => {
      items.forEach((i) => {
        i.classList.remove("active");

        const c = i.querySelector(".advantages-accordion-content");
        const l = i.querySelector(".line");

        c.style.maxHeight = null;
        l.style.height = "40px"; // повертаємо маленьку
      });

      item.classList.add("active");

      content.style.maxHeight = content.scrollHeight + "px";
      line.style.height = content.scrollHeight + 40 + "px";
    });
  });
});
