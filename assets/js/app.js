/**--------------------- side-ber-humberger.js_start-------------- */
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".humberger-cross");
    const sidebar = document.querySelector(".sideber");

    if (!menuBtn || !sidebar) return;

    menuBtn.addEventListener("click", function () {
        menuBtn.classList.toggle("active");
        sidebar.classList.toggle("active");
    });
});
/**--------------------- side-ber-humberger.js_end-------------- */

/**------------------------- swipper-slider-start---------------------- */


const missionSwiper = new Swiper(".mission-swiper", {
  slidesPerView: 3.2,
  spaceBetween: 20,
  speed: 600,
  loop: false,
  grabCursor: true,

  navigation: {
    nextEl: ".mission-next",
    prevEl: ".mission-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
/**------------------------- swipper-slider-end---------------------- */
