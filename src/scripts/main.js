// Global JS

// Nav Menu //

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".nav-toggle");
const mainContent = document.querySelector("#main-content");

navToggle.addEventListener("click", function () {
  navToggle.classList.toggle("close");

  const navIsOpen = nav.getAttribute("data-visible");

  if (navIsOpen === "true") {
    nav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-label", "Open Menu");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll"); // Enable scrolling
    mainContent.classList.remove("opacity-01"); // Remove opacity-01 effect
  } else {
    nav.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-label", "Close Menu");
    navToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll"); // Disable scrolling
    mainContent.classList.add("opacity-01"); // Add opacity-01 effect
  }
});

// read more button
const readMore = document.querySelector(".read-more");
const readLess = document.querySelector(".read-less");
const moreText = document.querySelector(".more-text");

readMore.addEventListener("click", () => {
  moreText.classList.add("visible");
  readMore.style.display = "none";
  readLess.style.display = "block";
});

readLess.addEventListener("click", () => {
  moreText.classList.remove("visible");
  readMore.style.display = "block";
  readLess.style.display = "none";
});

// Scroll to Top //

const backToTopButton = document.querySelector(".back-to-top");

if (backToTopButton !== null) {
  backToTopButton.addEventListener("click", scrollToTop);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });
}
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

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
