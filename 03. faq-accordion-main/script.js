"use strict";

// Select elements

const headers = document.querySelectorAll(".q-and-a--header");
const openBtn = document.querySelectorAll(".open-btn");
const closeBtn = document.querySelectorAll(".close-btn");
const answerContainer = document.querySelectorAll(".answer-container");
const footer = document.querySelector('footer');


// check for window width and container heigth to adjust to smaller mobile screens
const windowWidth = window.innerWidth;
console.log(windowWidth);
let containerHeigth = document.querySelector(".container").offsetHeight;
console.log(containerHeigth);


// Immediately set height to 0 to trigger transition
answerContainer.forEach((el) => {
  el.style.height = "0";
});

// Add event listener

headers.forEach((header, i) => {
  header.addEventListener("click", () => {
    if (header.classList.contains("close")) {
      header.classList.remove("close");
      openBtn[i].classList.toggle("hidden");
      closeBtn[i].classList.toggle("hidden");
      answerContainer[i].classList.toggle("hidden");
      // Adjust height of content to match text height
      const textHeight =
        answerContainer[i].querySelector(".answer").offsetHeight;
      answerContainer[i].style.height = answerContainer[i].classList.contains(
        "hidden"
      )
        ? 0
        : textHeight + "px";

      containerHeigth = document.querySelector(".container").offsetHeight + textHeight;
      console.log(containerHeigth);
      // screen width and container heigth check
      if (windowWidth === 375 && containerHeigth >= 560) {
        footer.style.display = "none";
      }
    } else {
      header.classList.add("close");
      openBtn[i].classList.toggle("hidden");
      closeBtn[i].classList.toggle("hidden");
      answerContainer[i].style.height = 0;
      setTimeout(() => {
        answerContainer[i].classList.toggle("hidden");
      }, 300);
      const textHeight =
        answerContainer[i].querySelector(".answer").offsetHeight;
      containerHeigth = document.querySelector(".container").offsetHeight - textHeight;
      console.log(containerHeigth);
      if (windowWidth === 375 && containerHeigth < 560) {
        footer.style.display = "block";
      }
    }
  });
});
