// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");


// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});