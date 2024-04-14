"use strict";

// Select elements

const headers = document.querySelectorAll(".q-and-a--header");
const openBtn = document.querySelectorAll(".open-btn");
const closeBtn = document.querySelectorAll(".close-btn");
const answerContainer = document.querySelectorAll(".answer-container");

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
    } else {
      header.classList.add("close");
      openBtn[i].classList.toggle("hidden");
      closeBtn[i].classList.toggle("hidden");
      answerContainer[i].style.height = 0;
      setTimeout(() => {
        answerContainer[i].classList.toggle("hidden");
      }, 300);
    }
  });
});
