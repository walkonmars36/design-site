// read more button
const readMore = document.querySelectorAll(".read-more");
const showLess = document.querySelectorAll(".show-less");
const moreText = document.querySelectorAll(".more-text");

readMore.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    moreText[i].classList.add("visible");
    readMore[i].style.display = "none";
    showLess[i].style.display = "block";
  });
});

showLess.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    moreText[i].classList.remove("visible");
    readMore[i].style.display = "block";
    showLess[i].style.display = "none";
  });
});
