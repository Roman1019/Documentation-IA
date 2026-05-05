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
      dynamicBullets: false,
    },
    loop: false,

    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      1200: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
    },
    speed: 600,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".advantages-accordion-item");

  items.forEach((item) => {
    const header = item.querySelector(".advantages-accordion-header");

    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      items.forEach((i) => i.classList.remove("active"));

      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".questions-item");

  items.forEach((item) => {
    const arrow = item.querySelector(".questions-arrow");
    const title = item.querySelector(".questions-item-title");

    const toggleItem = () => {
      const isActive = item.classList.contains("active");

      items.forEach((i) => i.classList.remove("active"));

      if (!isActive) {
        item.classList.add("active");
      }
    };

    arrow.addEventListener("click", (e) => {
      if (window.innerWidth > 768) {
        e.stopPropagation();
        toggleItem();
      }
    });

    title.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        toggleItem();
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("menuClose");
  const links = menu.querySelectorAll("a");

  function openMenu() {
    menu.classList.add("active");
    overlay.classList.add("active");
  }

  function closeMenu() {
    menu.classList.remove("active");
    overlay.classList.remove("active");
  }

  btn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  links.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
});
