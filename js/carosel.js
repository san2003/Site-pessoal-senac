document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-carosel-button]");
  const slidesContainer = document.querySelector("[data-slides]");
  const slides = Array.from(slidesContainer.children);
  let currentIndex = 0;

  // Configuração inicial
  slides.forEach((slide) => {
    slide.style.transition = "all 0.5s ease-in-out";
  });

  function changeSlide(newIndex) {
    const currentSlide = slides[currentIndex];
    const nextSlide = slides[newIndex];

    // Animação de saída
    currentSlide.style.transform = "scale(0.95)";
    currentSlide.style.opacity = "0";
    currentSlide.removeAttribute("data-active");

    // Animação de entrada
    nextSlide.style.display = "block";
    nextSlide.style.transform = "scale(1)";
    nextSlide.style.opacity = "1";
    nextSlide.setAttribute("data-active", "");

    currentIndex = newIndex;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.caroselButton === "next" ? 1 : -1;
      const newIndex =
        (currentIndex + direction + slides.length) % slides.length;
      changeSlide(newIndex);
    });
  });
});
