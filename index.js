function triggerAnimations() {
  const elements = document.querySelectorAll(
    ".scale-up, .slide-left, .slide-right, .slide-up"
  );

  elements.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.classList.add("active");
    }
  });
}

// Scroll aur load dono pe trigger
window.addEventListener("scroll", triggerAnimations);
window.addEventListener("load", triggerAnimations);

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("nav.hover-link");

toggle.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.toggle("active"); // Add/remove active class
});
