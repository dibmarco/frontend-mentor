"use strict";

const questions = document.querySelectorAll(".question");

const openBtn = document.querySelectorAll(".open-btn");
const closeBtn = document.querySelectorAll(".close-btn");
const answers = document.querySelectorAll(".answer");


const openClose = function (i) {
  answers[i].classList.toggle("hidden");
  openBtn[i].classList.toggle("btn-hidden");
  closeBtn[i].classList.toggle("btn-hidden");
};

questions.forEach((question, i) => {
  question.addEventListener("click", function () {
    openClose(i);
  });
});

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
