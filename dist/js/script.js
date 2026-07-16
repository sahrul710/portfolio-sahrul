const scrollup = document.querySelector(".scroll-up");
window.onscroll = () => {
  if (window.scrollY > 500) {
    scrollup.classList.add("scroll-active");
  } else {
    scrollup.classList.remove("scroll-active");
  }
};
