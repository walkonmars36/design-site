// Global JS

// Nav Menu //
document.addEventListener("astro:page-load", () => {
  const nav = document.querySelector(".primary-navigation");
  const navToggle = document.querySelector(".nav-toggle");
  const mainContent = document.querySelector("#main-content");

  // Function to close the navigation menu
  function closeNav() {
    nav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-label", "Open Menu");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll"); // Enable scrolling
    mainContent.classList.remove("opacity-01"); // Remove opacity-01 effect
  }

  // Event listener for the navigation toggle button

  navToggle.addEventListener("click", function () {
    const navIsOpen = nav.getAttribute("data-visible");
    console.log("clicked");
    if (navIsOpen === "true") {
      closeNav();
    } else {
      nav.setAttribute("data-visible", "true");
      navToggle.setAttribute("aria-label", "Close Menu");
      navToggle.setAttribute("aria-expanded", "true");
      document.body.classList.add("no-scroll"); // Disable scrolling
      mainContent.classList.add("opacity-01"); // Add opacity-01 effect
    }
  });

  // Event listeners for in-page links
  document
    .querySelectorAll('.primary-navigation a[href^="/"]')
    .forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        // Close the navigation menu
        closeNav();
        // Check if it's an in-page link or a different page
        if (this.getAttribute("href").startsWith("/")) {
          // Remove the leading "/" from the href value
          const targetId = this.getAttribute("href").substring(1);

          // Check if it's an in-page link
          if (this.getAttribute("href").startsWith("/#")) {
            // Check if the target element exists
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
              // Scroll to the target element
              targetElement.scrollIntoView({
                behavior: "smooth",
              });
            } else {
              // Navigate to the target page
              window.location.href = this.getAttribute("href");
            }
          } else {
            // Navigate to the target page
            window.location.href = this.getAttribute("href");
          }
        }
      });
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
});
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
