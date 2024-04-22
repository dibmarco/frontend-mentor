"use strict";

// Elements
const card = document.querySelector(".card");
const selectedRating = document.querySelector(".selected-rating");
const ratingList = document.querySelector(".rating-list");
const ratingValues = ratingList.querySelectorAll(".rating-value");
const submitBtn = document.querySelector(".submit-button");

let rating;

ratingList.addEventListener("click", function (e) {
  if (e.target.classList.contains("rating-value")) {
    // Reset styles for all rating values
    ratingValues.forEach((ratingValue) => {
      ratingValue.style.backgroundColor = ""; // Set to default or another color
      ratingValue.style.color = ""; // Set to default or another color
    });

    // Store rating value
    rating = e.target.dataset.value;
    console.log(rating);
    
    // Set styles for the clicked element
    e.target.style.backgroundColor = "var(--orange)";
    e.target.style.color = "var(--white)";
  }
});

submitBtn.addEventListener("click", () => {
  selectedRating.textContent = rating;
  card.classList.add("flip");
  setTimeout(() => {
    card.classList.remove("flip");
    ratingValues.forEach((ratingValue) => {
      ratingValue.style.backgroundColor = "";
      ratingValue.style.color = "";
    });
    /* submitBtn.style.backgroundColor = "var(--orange)";
    submitBtn.style.color = "var(--white)"; */
  }, 4 * 1000);
});
