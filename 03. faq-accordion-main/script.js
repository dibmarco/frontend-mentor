"use strict";

const openBtn = document.querySelectorAll(".open-btn");
const closeBtn = document.querySelectorAll(".close-btn");
const answers = document.querySelectorAll(".answer");

const openClose = function (i) {
  answers[i].classList.toggle("hidden");
  openBtn[i].classList.toggle("btn-hidden");
  closeBtn[i].classList.toggle("btn-hidden");
};

openBtn.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    openClose(i);
  });
});

closeBtn.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    openClose(i);
  });
});
