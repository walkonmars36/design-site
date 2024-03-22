// Link Underline

const links = document.querySelectorAll("a");
links.forEach(function (link) {
  link.addEventListener("touchstart", function () {
    this.classList.add("active");
  });
  link.addEventListener("touchend", function () {
    this.classList.remove("active");
  });
  link.addEventListener("mouseenter", function () {
    this.classList.add("hover");
  });
  link.addEventListener("mouseleave", function () {
    this.classList.remove("hover");
  });
});
